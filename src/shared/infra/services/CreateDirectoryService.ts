import * as fs from 'fs';

const fsPromise = fs.promises;

interface IParams {
  path: string;
  recursive: boolean;
}

class CreateDirectoryService {
  async execute({ path, recursive }: IParams): Promise<string | undefined> {
    const result = await fsPromise.mkdir(path, { recursive });
    return result;
  }
}

export default CreateDirectoryService;

// const directoryCreated = await createDirectoryService.execute({
//   path: '/Users/danie/Documents/kroton/Nova pasta/teste1',
//   recursive: true,
// });
// debug('directoryCreated', directoryCreated);
// const check = await checkExistsDirectoryService.execute(
//   '/Users/danie/Documents/kroton/Nova pasta/teste1',
// );
// debug('check', check);
