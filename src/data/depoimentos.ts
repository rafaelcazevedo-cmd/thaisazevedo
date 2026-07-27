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
