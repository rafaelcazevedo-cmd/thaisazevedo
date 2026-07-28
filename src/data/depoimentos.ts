/**
 * Vidas Transformadas — depoimentos publicados.
 *
 * Fluxo (decisão 2026-07-25): sem formulário/backend. Thais envia cada novo
 * depoimento pelo WhatsApp (canal zap) → adicionamos AQUI, no TOPO da lista
 * (a página exibe na ordem do array = mais recentes primeiro) → deploy.
 * Só publicar com a confirmação da Thais de que a família autorizou.
 */
export interface Depoimento {
  /** Nome de quem escreveu (como deve aparecer). */
  nome: string;
  /** Nome e idade do paciente, opcional (ex.: "Miguel, 8 anos"). */
  paciente?: string;
  /** Texto completo, sem cortes — a página não usa "ler mais". */
  texto: string;
}

export const depoimentos: Depoimento[] = [
  // Novos depoimentos entram no topo.
  // 2026-07-28 · enviado pela Thais via WhatsApp (CR-23); consentimento
  // confirmado por ela em 2026-07-28. Texto verbatim.
  {
    nome: 'Aline',
    paciente: 'Pablo, 11 anos',
    texto:
      'Há muito tempo eu vivia com uma preocupação diária: o que seria do futuro do meu ' +
      'irmão?\n\n' +
      'Meu irmão, Pablo, tem 11 anos e, por uma sequência de fatores, acabou ficando muito ' +
      'atrasado na alfabetização. Ele tem TDAH, não sabia ler, escrever ou se concentrar, e ' +
      'isso impactava não só a vida escolar, mas também sua autoestima, comportamento e a ' +
      'forma como ele se enxergava.\n\n' +
      'Infelizmente, durante muito tempo, as dificuldades e o comportamento dele foram ' +
      'interpretados como falta de interesse ou indisciplina.\n\n' +
      'Faz apenas um mês que iniciamos as aulas com a Thais, mas esse tempo já foi ' +
      'suficiente para dizer que ela tem mudado a vida do Pablo e a nossa também.\n\n' +
      'Desde o primeiro contato, percebi que não tinha encontrado "somente" uma professora. ' +
      'Pela preocupação em conhecer toda a história dele antes mesmo da primeira aula, eu ' +
      'entendi que ela faria a diferença.\n\n' +
      'Pela primeira vez vimos alguém adaptar o ensino à criança, e não a criança ao ' +
      'ensino.\n\n' +
      'Desde a primeira aula, o Pablo percebeu que sabia coisas que acreditava não saber. Na ' +
      'verdade, ele só nunca tinha aprendido da forma que fazia sentido para ele. Isso mudou ' +
      'completamente sua confiança. Hoje ele acredita que consegue.\n\n' +
      'A forma como a Thais ensina é diferente. Ela enxerga o aluno antes da dificuldade, ' +
      'entende as necessidades de cada criança e adapta o ensino para que ela aprenda de ' +
      'verdade. Com carinho, paciência, criatividade e muita inteligência, ela transforma o ' +
      'aprendizado em algo leve e divertido (dá vontade de virar aluno dela tbm..)\n\n' +
      'Hoje o Pablo fica ansioso pelos dias de aula, já está lendo palavras que antes não ' +
      'conseguia, escrevendo, evoluindo... (cada criança tem seu tempo).\n\n' +
      'Antes, vivíamos com uma insegurança constante. Não sabíamos se deveríamos pedir ' +
      'ajuda, se faria diferença ou se simplesmente deveríamos deixar a vida seguir na ' +
      'escola. Hoje esse sentimento não existe mais, graças a Thais.\n\n' +
      'Faço questão de contar para todas as pessoas que conheço sobre o trabalho dela, ' +
      'porque sei que existem muitas famílias vivendo a mesma angústia que nós vivíamos. ' +
      'Mais do que ensinar uma criança a ler e escrever, ela devolve a autoestima, a ' +
      'confiança e a esperança para toda a família.\n\n' +
      'Muito obrigada, Thais. Você está mudando a vida do Pablo, e tenho certeza de que ' +
      'também vai mudar a de muitas outras crianças.',
  },
  // 2026-07-28 · enviado pela Thais via WhatsApp (CR-21); consentimento
  // confirmado por ela em 2026-07-28. Texto verbatim.
  {
    nome: 'Priscila',
    paciente: 'As crianças que moraram no Lar Infantil Allan Kardec',
    texto:
      'Admiro profundamente a Thais pela profissional excepcional e pelo ser humano generoso ' +
      'que ela é. Sua atuação na Neuropsicopedagogia já transforma realidades e seu trabalho ' +
      'voluntário mostra a nobreza do seu coração.  Este novo site é reflexo de sua ' +
      'competência e amor pelo que faz com as crianças. Ela une o trabalho com afeto de uma ' +
      'forma única e sua dedicação ao voluntariado são provas do su compromisso, conhecimento ' +
      'e cuidado. Falo isso porque a conheço desde nova, quando ela era voluntária no Lar ' +
      'Infantil Allan Kardec, onde cresci e morei por anos. Fui uma das crianças ajudadas por ' +
      'ela e sempre observei o carinho, a atenção e sua dedicação comigo e com as outras ' +
      'crianças. Sucesso nessa nova etapa! Você merece voar alto!',
  },
  // 2026-07-27 · enviado pela Thais via WhatsApp (CR-20); consentimento
  // confirmado por ela em 2026-07-27 ("Sim"). Texto verbatim.
  {
    nome: 'Josefa',
    paciente: 'Ezequiel, 29 anos',
    texto:
      'Estou muito feliz com o atendimento do Ezequiel. Antes do Ezequiel começar com os ' +
      'atendimentos, ele era muito triste. Hoje, ele melhorou bastante, no sorriso e na ' +
      'felicidade! Sou muito grata por você existir na vida do meu filho! Muito obrigada!',
  },
  // 2026-07-27 · enviados pela Thais via WhatsApp (CR-18); consentimento das
  // famílias confirmado por ela em 2026-07-27 ("Sim"). Texto verbatim.
  {
    nome: 'Paula',
    paciente: 'Hellena, 6 anos',
    texto:
      'Minha filha tem TEA e TDAH e passa em atendimento com a Thais há 1 ano e meio.\n\n' +
      'Vimos uma evolução muito grande nesse período. A Hellena está muito mais concentrada, ' +
      'tem menos estereotipias, consegue se relacionar melhor com as pessoas e está começando ' +
      'a falar algumas palavras.\n\n' +
      'Consigo ver o carinho e a dedicação que a Thais tem com as crianças que atende. ' +
      'Acredito que isso faz toda a diferença na evolução da criança. Minha filha adora ir ver vê-la!',
  },
  {
    nome: 'Ana Carla',
    paciente: 'Bernardo, 8 anos',
    texto:
      'A Thais é maravilhosa. Uma excelente profissional. Tem um olhar diferenciado para ' +
      'nossas crianças.\n\n' +
      'Bernardo se desenvolveu muito com a Thais. Seu método de abordagem com a criança faz ' +
      'uma diferença enorme no tratamento.\n\n' +
      'Lembro da paciência que ela teve em respeitar o tempo do Bernardo. A prova disso é o ' +
      'amor e carinho que ele tem por ela. Obrigada por ser tão humana e respeitosa com meu ' +
      'filho. Eterna gratidão!',
  },
];
