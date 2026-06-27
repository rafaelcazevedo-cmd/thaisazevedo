/**
 * Prompt-aligned FAQ, written to match how parents actually phrase questions to Google
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
    question: 'Qual a diferença entre psicólogo e neuropsicopedagogo?',
    answer:
      'A diferença está no foco. O psicólogo cuida da saúde emocional, do comportamento e das relações, e pode fazer psicoterapia. O neuropsicopedagogo cuida da aprendizagem: investiga como a criança aprende e trabalha as dificuldades nesse processo, fortalecendo habilidades como atenção, memória, linguagem, raciocínio e funções executivas, com olhar pedagógico e muito acolhimento. As duas áreas se complementam e muitas vezes caminham juntas, mas uma não substitui a outra.',
  },
  {
    question: 'Quando devo procurar uma neuropsicopedagoga para a minha criança?',
    answer:
      'Procure uma avaliação quando a criança apresenta dificuldade persistente para ler, escrever ou fazer contas, recusa ir à escola, demora muito para fazer a lição, tem queixas frequentes dos professores, desatenção ou baixa autoestima relacionada aos estudos. Quanto mais cedo a dificuldade é identificada, melhores são os resultados.',
  },
  {
    question: 'Com que idade a criança pode iniciar o acompanhamento?',
    answer:
      'O acompanhamento neuropsicopedagógico costuma ser indicado a partir da educação infantil e durante toda a vida escolar, abrangendo crianças e adolescentes. Mesmo antes da alfabetização é possível trabalhar habilidades que preparam para a leitura e a escrita.',
  },
  {
    question: 'Como funciona a avaliação neuropsicopedagógica?',
    answer:
      'A avaliação é um processo estruturado que investiga como a criança aprende dentro de cinco grandes habilidades: linguagem, matemática, atenção, memória e funções executivas. São cerca de 10 sessões, com entrevista inicial com os pais, testes padronizados, escalas de rastreio, observações clínicas e atividades lúdicas. Ao final, há uma reunião de devolutiva com a família, com o perfil de aprendizagem e um plano de intervenção individualizado.',
  },
  {
    question: 'Preciso de um diagnóstico para começar o acompanhamento?',
    answer:
      'Não. Não é preciso ter diagnóstico para iniciar o acompanhamento neuropsicopedagógico. Qualquer criança que apresente alguma dificuldade pedagógica pode começar, o trabalho é focado no paciente como indivíduo, e não em um rótulo.',
  },
  {
    question: 'A neuropsicopedagogia atende autistas ou pessoas com TDAH?',
    answer:
      'Sim. A neuropsicopedagogia é uma excelente terapia para neurodivergentes, incluindo autistas, portadores de TDAH ou Síndrome de Down, além de Dislexia, Discalculia e outras dificuldades de aprendizagem. O trabalho respeita o ritmo e o modo único de aprender de cada um.',
  },
  {
    question: 'A neuropsicopedagoga dá diagnóstico de autismo ou TDAH?',
    answer:
      'O diagnóstico de Autismo e de TDAH é médico e multidisciplinar (pode envolver médico, psicólogo e fonoaudiólogo); a neuropsicopedagoga não emite esse laudo. Já a Dislexia e a Discalculia, por serem dificuldades de aprendizagem, podem ser identificadas na avaliação neuropsicopedagógica. Em todos os casos, a neuropsicopedagoga avalia a aprendizagem, contribui com a investigação e, quando necessário, encaminha e atua em conjunto com os demais profissionais.',
  },
  {
    question: 'Quanto tempo dura o acompanhamento?',
    answer:
      'O tempo varia conforme a necessidade de cada paciente. Alguns demandam alguns meses de intervenção; outros se beneficiam de um acompanhamento mais longo. A reavaliação periódica mostra a evolução e ajuda a decidir, junto com a família, o momento da alta.',
  },
  {
    question: 'O atendimento é em consultório ou em casa?',
    answer:
      'Os atendimentos particulares acontecem tanto no consultório, em São Paulo, quanto na residência dos pacientes (atendimento domiciliar). Entre em contato pelo WhatsApp para combinar o formato e o horário que melhor funcionam para a sua família.',
  },
  {
    question: 'Vocês trabalham junto com a escola?',
    answer:
      'Sim. Com autorização da família, a neuropsicopedagoga dialoga com professores e coordenação para alinhar estratégias entre o consultório e a sala de aula. Essa parceria entre família, escola e profissional potencializa o desenvolvimento do paciente.',
  },
  {
    question: 'Quanto custa a avaliação ou as sessões?',
    answer:
      'Os valores variam conforme o tipo de serviço e são informados de forma transparente no primeiro contato. Fale pelo WhatsApp para receber os valores atualizados e tirar suas dúvidas, sem compromisso.',
  },
];
