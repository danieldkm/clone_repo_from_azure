export default interface IRepositoryDTO {
  id: string;
  name: string;
  description: string;
  url: string;
  defaultBranch: string;
  size: number;
  remoteUrl: string;
  sshUrl: string;
  webUrl: string;
}

// {
//   id: '3bfba655-0378-4585-bd17-3572f8226ff9',
//   name: 'orbit-util-comunica',
//   url: 'https://dev.azure.com/kdop/05ef6c9e-bf0c-4c10-8f81-29a50094a7e5/_apis/git/repositories/3bfba655-0378-4585-bd17-3572f8226ff9',
//   project: {
//     id: '05ef6c9e-bf0c-4c10-8f81-29a50094a7e5',
//     name: 'Plataformas Interativas',
//     url: 'https://dev.azure.com/kdop/_apis/projects/05ef6c9e-bf0c-4c10-8f81-29a50094a7e5',
//     state: 'wellFormed',
//     revision: 1811674,
//     visibility: 'private',
//     lastUpdateTime: '2020-02-27T13:13:01.267Z'
//   },
//   defaultBranch: 'refs/heads/master',
//   size: 22135,
//   remoteUrl: 'https://kdop@dev.azure.com/kdop/Plataformas%20Interativas/_git/orbit-util-comunica',
//   sshUrl: 'git@ssh.dev.azure.com:v3/kdop/Plataformas%20Interativas/orbit-util-comunica',
//   webUrl: 'https://dev.azure.com/kdop/Plataformas%20Interativas/_git/orbit-util-comunica'
// },
