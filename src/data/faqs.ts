/**
 * Prompt-aligned FAQ — written to match how parents actually phrase questions to Google
 * and to AI assistants (GEO). Each answer opens with a direct, quotable sentence.
 *
 * Used on /perguntas-frequentes (full list + FAQPage schema) and as excerpts on other pages.
 */
export interface Faq {
  question: string;
  /** Plain-text answer (also emitted into FAQPage JSON-LD, so keep it clean and factual). */
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'O que faz uma neuropsicopedagoga?',
    answer:
      'A neuropsicopedagoga é a profissional que avalia e intervém nas dificuldades de aprendizagem, unindo conhecimentos de neurociência, psicologia e pedagogia. Ela identifica como a criança aprende, o que está atrapalhando esse processo e propõe estratégias individualizadas para que ela avance na escola e ganhe confiança.',
  },
  {
    question: 'Qual a diferença entre psicopedagogo e neuropsicopedagogo?',
    answer:
      'A principal diferença é o foco no funcionamento cerebral da aprendizagem. O psicopedagogo trabalha as dificuldades de aprendizagem de forma ampla; o neuropsicopedagogo acrescenta a base da neurociência, considerando atenção, memória, linguagem e funções executivas para entender e intervir nas dificuldades de cada criança.',
  },
  {
    question: 'Quando devo procurar uma neuropsicopedagoga para meu filho?',
    answer:
      'Procure uma avaliação quando a criança apresenta dificuldade persistente para ler, escrever ou fazer contas, recusa ir à escola, demora muito para fazer a lição, tem queixas frequentes dos professores, desatenção ou baixa autoestima relacionada aos estudos. Quanto mais cedo a dificuldade é identificada, melhores são os resultados.',
  },
  {
    question: 'Com que idade a criança pode iniciar o acompanhamento?',
    answer:
      'O acompanhamento neuropsicopedagógico costuma ser indicado a partir da educação infantil e durante todo o ensino fundamental, abrangendo crianças e adolescentes. Mesmo antes da alfabetização é possível trabalhar habilidades que preparam para a leitura e a escrita.',
  },
  {
    question: 'Como funciona a avaliação neuropsicopedagógica?',
    answer:
      'A avaliação é um processo de cerca de 10 sessões que investiga como a criança aprende dentro de cinco grandes habilidades: linguagem, matemática, atenção, memória e funções executivas. Inclui entrevista com os pais e atividades com a criança. Ao final, a família recebe um relatório com o perfil de aprendizagem e um plano de intervenção, que costuma ter cerca de mais 10 sessões.',
  },
  {
    question: 'Preciso de um diagnóstico para começar o acompanhamento?',
    answer:
      'Não. Não é preciso ter diagnóstico para iniciar o acompanhamento neuropsicopedagógico. Qualquer criança que apresente alguma dificuldade pedagógica pode começar — o trabalho é focado no paciente como indivíduo, e não em um rótulo.',
  },
  {
    question: 'A neuropsicopedagogia atende crianças autistas ou com TDAH?',
    answer:
      'Sim. A neuropsicopedagogia é uma excelente terapia para crianças neurodivergentes — incluindo autistas, crianças com TDAH e com síndrome de Down — além de crianças com dislexia, discalculia e outras dificuldades de aprendizagem. O trabalho respeita o ritmo e o modo único de aprender de cada uma.',
  },
  {
    question: 'A neuropsicopedagoga dá o diagnóstico de dislexia ou TDAH?',
    answer:
      'O diagnóstico fechado de transtornos como dislexia e TDAH é feito por equipe multidisciplinar (que pode incluir médico, psicólogo e fonoaudiólogo). A neuropsicopedagoga identifica sinais, contribui com a avaliação da aprendizagem e, quando necessário, encaminha para os profissionais adequados, atuando em conjunto com eles.',
  },
  {
    question: 'Quanto tempo dura o acompanhamento?',
    answer:
      'O tempo varia conforme a necessidade de cada criança. Algumas demandam alguns meses de intervenção; outras se beneficiam de um acompanhamento mais longo. A reavaliação periódica mostra a evolução e ajuda a decidir, junto com a família, o momento da alta.',
  },
  {
    question: 'O atendimento é em consultório ou em casa?',
    answer:
      'Os atendimentos particulares acontecem tanto no consultório, em São Paulo, quanto na residência dos pacientes (atendimento domiciliar). Entre em contato pelo WhatsApp para combinar o formato e o horário que melhor funcionam para a sua família.',
  },
  {
    question: 'Vocês trabalham junto com a escola?',
    answer:
      'Sim. Com autorização da família, a neuropsicopedagoga dialoga com professores e coordenação para alinhar estratégias entre o consultório e a sala de aula. Essa parceria entre família, escola e profissional potencializa os resultados da intervenção.',
  },
  {
    question: 'Quanto custa a avaliação ou as sessões?',
    answer:
      'Os valores variam conforme o tipo de serviço (avaliação completa ou sessões de intervenção) e são informados de forma transparente no primeiro contato. Fale pelo WhatsApp para receber os valores atualizados e tirar suas dúvidas, sem compromisso.',
  },
];
