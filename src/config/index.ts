interface IRepo {
  [key: string]: any;
}

const dreamteam: IRepo = {
  'colaborar-pontos-prova-producer': 'dreamteam/pontuacao_prova',
  'agregador-pontos-alunos-piloto': 'dreamteam/pontuacao_prova',
  'pontos-prova-aluno-sender': 'dreamteam/pontuacao_prova',
  'pontos-prova-aluno-re-sender': 'dreamteam/pontuacao_prova',

  'prova-aluno-digital-re-generate': 'dreamteam/prova_digital',
  'agregador-prova-aluno-digital': 'dreamteam/prova_digital',
  'prova-aluno-digital-sender': 'dreamteam/prova_digital',
  'prova-aluno-digital-re-sender': 'dreamteam/prova_digital',
  'log-gabarito-prova-digital': 'dreamteam/prova_digital',
  'processa-gabarito-prova-digital': 'dreamteam/prova_digital',
  'prova-digital': 'dreamteam/prova_digital',

  'api-detalhamento-prova': 'dreamteam/gabarito_prova',
  'api-gabarito-liberado': 'dreamteam/gabarito_prova',
  'api-resumo-prova': 'dreamteam/gabarito_prova',

  'ava-discipline-consumer': 'dreamteam/ava30',
  'ava-student-enrolled-consumer': 'dreamteam/ava30',
  'infrastructureAva3.0': 'dreamteam/ava30',
  'microapp-authorization-ava30': 'dreamteam/ava30',
  'Serverless-Ava3.0': 'dreamteam/ava30',

  'api-agendamento-gateway': 'dreamteam/agendador_provas',
  'api-autenticador-agendamento': 'dreamteam/agendador_provas',
  'api-consolidador-unidade': 'dreamteam/agendador_provas',
  'api-agendamento-salas': 'dreamteam/agendador_provas',
  'api-consolidador-agendamento-salas': 'dreamteam/agendador_provas',
  'api-agendamento-vagas': 'dreamteam/agendador_provas',
  'api-consolidador-agendamento-vagas': 'dreamteam/agendador_provas',
  'api-agendamento': 'dreamteam/agendador_provas',
  'api-consolidador-agendamento': 'dreamteam/agendador_provas',
  'api-agendamento-parametros': 'dreamteam/agendador_provas',
  'api-consolidador-agendamento-parametros': 'dreamteam/agendador_provas',
  'agendamento-unidade': 'dreamteam/agendador_provas',
  'agendador-aluno': 'dreamteam/agendador_provas',

  'cartao-resposta-consumer': 'dreamteam/cartao_resposta',
  'cartao-resposta-producer': 'dreamteam/cartao_resposta',

  'colaborar-web-lms': 'legado',
  extranet: 'legado',
  rest: 'legado',

  'BD.UNOPAR-V2': 'banco',
  'BDAux.UNOPAR': 'banco',
  'BD.EDINT-V2': 'banco',
  'BDAux.EDINT': 'banco',
};

const dreamteamRepositories = [
  'colaborar-pontos-prova-producer',
  'agregador-pontos-alunos-piloto',
  'pontos-prova-aluno-sender',
  'pontos-prova-aluno-re-sender',

  'prova-aluno-digital-re-generate',
  'agregador-prova-aluno-digital',
  'prova-aluno-digital-sender',
  'prova-aluno-digital-re-sender',
  'log-gabarito-prova-digital',
  'processa-gabarito-prova-digital',
  'api-gabarito-liberado',
  'api-resumo-prova',
  'api-detalhamento-prova',

  'ava-discipline-consumer',
  'ava-student-enrolled-consumer',
  'infrastructureAva3.0',
  'microapp-authorization-ava30',
  'Serverless-Ava3.0',

  'api-agendamento-gateway',
  'api-autenticador-agendamento',
  'api-consolidador-unidade',
  'api-agendamento-salas',
  'api-consolidador-agendamento-salas',
  'api-agendamento-vagas',
  'api-consolidador-agendamento-vagas',
  'api-agendamento',
  'api-consolidador-agendamento',
  'api-agendamento-parametros',
  'api-consolidador-agendamento-parametros',
  'agendamento-unidade',
  'agendador-aluno',

  'cartao-resposta-consumer',
  'cartao-resposta-producer',

  'colaborar-web-lms',
  'extranet',

  'BD.UNOPAR-V2',
  'BDAux.UNOPAR',
  'BD.EDINT-V2',
  'BDAux.EDINT',
  'rest',
];

const eadevs: IRepo = {
  'dnm-consumer-pontos': 'eadevs/dnm',

  syncvideos: 'eadevs/mediastream',

  'boletim-consumer-nota-ava-30': 'eadevs/ava30',

  'trilha-carreira-api-certificado': 'eadevs/trilha_carreira',
  'trilha-carreira-consumer-fechamento-disciplina': 'eadevs/trilha_carreira',
  'trilha-carreira-consumer-fechamento-matricula': 'eadevs/trilha_carreira',
  'trilha-carreira-producer-fechamento-disciplina': 'eadevs/trilha_carreira',
  'trilha-carreira-producer-fechamento-matricula': 'eadevs/trilha_carreira',
  'trilha-carreira-re-sender-fechamento-disciplina': 'eadevs/trilha_carreira',
  'trilha-carreira-re-sender-fechamento-matricula': 'eadevs/trilha_carreira',

  'place-carga-matriculas': 'eadevs/place',
  'place-carga-polos': 'eadevs/place',
  'place-carga-solicitacoes-analise-curricular': 'eadevs/place',
  PlaceEadKroton: 'eadevs/place',
};

const eadevsRepositories = [
  'dnm-consumer-pontos',

  'syncvideos',

  'boletim-consumer-nota-ava-30',

  'trilha-carreira-api-certificado',
  'trilha-carreira-consumer-fechamento-disciplina',
  'trilha-carreira-consumer-fechamento-matricula',
  'trilha-carreira-producer-fechamento-disciplina',
  'trilha-carreira-producer-fechamento-matricula',
  'trilha-carreira-re-sender-fechamento-disciplina',
  'trilha-carreira-re-sender-fechamento-matricula',

  'place-carga-matriculas',
  'place-carga-polos',
  'place-carga-solicitacoes-analise-curricular',
  'PlaceEadKroton',
];

export default {
  dreamteam,
  dreamteamRepositories,
  eadevs,
  eadevsRepositories,
};
