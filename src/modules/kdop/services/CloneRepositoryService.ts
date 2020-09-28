import CheckExistsDirectoryService from '@shared/infra/services/CheckExistsDirectoryService';
import CreateDirectoryService from '@shared/infra/services/CreateDirectoryService';

import config from '@config/index';
import * as child_process from 'child_process';
import util from 'util';
import path from 'path';

const exec = util.promisify(child_process.exec);

class CloneRepositoryService {
  checkExistsDirectoryService;

  createDirectoryService;

  constructor() {
    this.checkExistsDirectoryService = new CheckExistsDirectoryService();
    this.createDirectoryService = new CreateDirectoryService();
  }

  async execute(name: string, url_repository: string): Promise<any> {
    const directory = config.dreamteam[name] || config.eadevs[name];
    // console.log(
    //   'directory',
    //   `${process.env.WORKING_DIRECTORY}/${directory}/${name}`,
    // );
    const existsDirectory = await this.checkExistsDirectoryService.execute(
      `${process.env.WORKING_DIRECTORY}/${directory}/${name}`,
    );
    // console.log('existsDirectory', existsDirectory);
    if (!existsDirectory) {
      // console.log('clonar', url_repository);
      const workingDirectory = path.resolve(
        `${process.env.WORKING_DIRECTORY}/${directory}`,
      );

      await this.createDirectoryService.execute({
        path: workingDirectory,
        recursive: true,
      });
      // console.log('resultDir', resultDir);
      const commands = [
        `cd ${workingDirectory}`,
        `git clone ${url_repository}`,
      ];
      // console.log('commands', commands);
      const result = await exec(`${commands[0]} && ${commands[1]}`);
      // console.log('result', result);
      return result;
    }
    return null;
  }
}

export default CloneRepositoryService;
