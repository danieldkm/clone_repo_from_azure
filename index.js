const axios = require('axios');
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

function dirExists(dir) {
  try {
    const foundDir = fs.readdirSync(dir);
    console.log('foundDir', foundDir);
    return true;
  } catch (error) {
    return false;
  }
  // .forEach(file => {
  //   const fullPath = path.join(dir, file);
  //   console.log('fullPath', fullPath, file);
  // 	// if (fs.lstatSync(fullPath).isDirectory()) {
  // 	// 	traverseDir(fullPath);
  // 	// } else if (file === fileToFound.fileName) {
  // 	// 	fileToFound.fullpath = fullPath;
  // 	// 	throw new Error('File found');
  // 	// }
  // });
}

axios
  .get(
    'https://dev.azure.com/kdop/Plataformas%20Interativas/_apis/git/repositories?api-version=1.0',
    {
      headers: {
        Authorization:
          'Basic loewgh2k7y5ye4thq6goxwnlj6t46q2q3ydgogjmofq5xisa5xta',
        Accept: 'application/json',
      },
    },
  )
  .then(response => {
    console.log('repo', response.data);
    response.data.value.forEach(git => {
      const name = git.name;
      console.log('repo', name);

      const url = git.remoteUrl.toString().replace('kdop@', 'daniel@');

      if (
        dirExists(name) ||
        name === 'Plataformas Interativas' ||
        name === 'IntegraçãoOrbitUnidadesCursos'
      ) {
        console.log(name, 'dirExists');
      } else {
        console.log(name, 'dirNotExists');
        execSync(`git clone ${url}`, (error, stdout, stderr) => {
          if (error) {
            console.log(`error: ${error.message}`);
            return;
          }
          if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
        });
      }
    });
  })
  .catch(e => {
    console.log(e);
  });
