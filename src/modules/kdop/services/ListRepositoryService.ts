import * as azdev from 'azure-devops-node-api';
import { IRestResponse } from 'typed-rest-client/RestClient';
import Debug from 'debug';
import IRepositoryDTO from '../dtos/IRepositoryDTO';

const debug = Debug('api:ListRepositoryService');

interface IResultWebLink {
  _links: {
    web: {
      href: string;
    };
  };
}

interface IResult {
  value: [IRepositoryDTO];
  count: number;
}

class ListRepositoryService {
  async execute(
    connection: azdev.WebApi,
    url_project: string,
  ): Promise<IRepositoryDTO[]> {
    debug(url_project);
    const resultAzure: IRestResponse<IResultWebLink> = await connection.rest.get(
      url_project,
    );
    if (resultAzure) {
      const { result } = resultAzure;
      const { _links } = result || { value: [] };
      if (_links?.web.href) {
        const projectUrl = _links?.web.href;
        debug(`${projectUrl}/_apis/git/repositories?api-version=1.0`);
        const resultRepositories: IRestResponse<IResult> = await connection.rest.get(
          `${projectUrl}/_apis/git/repositories?api-version=1.0`,
        );
        const resultRepo = resultRepositories.result;
        const { value } = resultRepo || { value: [] };
        return value;
      }
      return [];
    }
    return [];
  }
}

export default ListRepositoryService;
