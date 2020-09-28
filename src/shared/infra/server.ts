import ListProjectsService from '@modules/kdop/services/ListProjectsService';
import ListRepositoryService from '@modules/kdop/services/ListRepositoryService';
import CloneRepositoryService from '@modules/kdop/services/CloneRepositoryService';
import IProjectDTO from '@modules/kdop/dtos/IProjectDTO';
import IRepositoryDTO from '@modules/kdop/dtos/IRepositoryDTO';
import config from '@config/index';
import Debug from 'debug';
import connection from './azure';

const listProjectsService = new ListProjectsService();
const listRepositoryService = new ListRepositoryService();
const cloneRepositoryService = new CloneRepositoryService();
const debug = Debug('api:main');

const myProjects = [
  'Sistemas Colaborar',
  'Produtos Adaptativos',
  'Plataformas Interativas',
];

async function start() {
  const projects = await listProjectsService.execute(connection);
  const workingProjects = projects.filter((project: IProjectDTO) =>
    myProjects.includes(project.name),
  );
  debug('workingProjects', workingProjects);

  const clone = async (workingProject: string) => {
    const repositories: IRepositoryDTO[] = await listRepositoryService.execute(
      connection,
      workingProject,
    );
    const promisesClone = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const repository of repositories) {
      if (
        config.dreamteamRepositories.includes(repository.name) ||
        config.eadevsRepositories.includes(repository.name)
      ) {
        // debug('respository', repository.remoteUrl);
        promisesClone.push(
          cloneRepositoryService.execute(repository.name, repository.remoteUrl),
        );
      }
    }
    const resultsClone = await Promise.all(promisesClone);
    debug('resultsClone', resultsClone);
  };

  const promises: any[] = [];
  workingProjects.forEach(wp => promises.push(clone(wp.url)));
  const results = await Promise.all(promises);
  debug(results);
}

start();
