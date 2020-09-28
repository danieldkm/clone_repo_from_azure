import * as fs from 'fs';

class CheckExistsDirectoryService {
  execute(dir: string): boolean {
    try {
      fs.readdirSync(dir);
      // const foundDir =
      // console.log('foundDir', foundDir);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default CheckExistsDirectoryService;
