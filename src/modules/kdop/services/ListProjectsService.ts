import * as azdev from 'azure-devops-node-api';
import { IRestResponse } from 'typed-rest-client/RestClient';
import IProjectDTO from '../dtos/IProjectDTO';

interface IResult {
  value: [IProjectDTO];
  count: number;
}

class ListProjectsService {
  async execute(connection: azdev.WebApi): Promise<IProjectDTO[]> {
    // console.log(`${process.env.AZURE_ORG_URL}/_apis/projects?api-version=2.0`);
    const resultAzure: IRestResponse<IResult> = await connection.rest.get(
      `${process.env.AZURE_ORG_URL}/_apis/projects?api-version=2.0`,
    );

    if (resultAzure) {
      const { result } = resultAzure;
      const { value } = result || { value: [] };
      return value;
    }
    return [];
  }
}

export default ListProjectsService;
