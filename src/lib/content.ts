export const site = {
  name: "Connections Languages",
  tagline: "Centro de Línguas Online",
  phone: "(41) 99101-3056",
  phoneHref: "5541991013056",
  email: "connectionslanguages@gmail.com",
  instagram: "https://www.instagram.com/connections.languages/",
  youtube: "https://www.youtube.com/@ConnectionsLanguages",
  whatsappMessage:
    "Olá, gostaria de mais informações sobre as aulas na Connections :)",
  enterpriseWhatsappMessage:
    "Olá, gostaria de mais informações sobre os cursos corporativos da Connections Languages",
  ctaTitle: "Aprenda idiomas de forma natural e conecte-se com o mundo",
  heroHeadline: {
    lead: "Aprenda",
    highlightTerracotta: "idiomas",
    middle: "de forma natural e",
    tail: "conecte-se com o",
    highlightYellow: "mundo",
  },
  ctaSubtitle:
    "Aulas personalizadas de acordo com seus interesses e objetivos. Ganhe confiança para se comunicar no dia a dia.",
} as const;

export const navLinks = [
  // { href: "#sobre", label: "Sobre Nós" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#idiomas", label: "Idiomas" },
  { href: "#professores", label: "Professores" },
  // { href: "#pacotes", label: "Pacotes" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "/empresarial", label: "Empresarial" },
  // { href: "/newsletter", label: "Newsletter", highlight: true },
] as const;

export const enterpriseNavLinks = [
  { href: "/empresarial#vantagens", label: "Vantagens" },
  { href: "/empresarial#metodologia", label: "Metodologia" },
  { href: "/empresarial#solucoes", label: "Soluções" },
  { href: "/empresarial#contato", label: "Contato" },
] as const;

export const enterprise = {
  hero: {
    title: "Connections Languages",
    titleLine: "para Empresas",
    subtitle:
      "Capacite sua equipe com cursos de idiomas corporativos e alcance novos mercados globais.",
    cta: "Solicitar Proposta",
  },
  advantages: {
    title: "Vantagens dos Cursos de Idiomas Corporativos",
    items: [
      {
        title: "Expansão Global",
        description:
          "Prepare sua equipe para negociações internacionais e expansão para novos mercados.",
      },
      {
        title: "Vantagem Competitiva",
        description:
          "Diferencie sua empresa no mercado com profissionais capacitados para comunicação global.",
      },
      {
        title: "Equipe Motivada",
        description:
          "Invista no desenvolvimento profissional e retenção de talentos através do aprendizado contínuo.",
      },
    ],
  },
  methodology: {
    title: "Metodologia",
    heading: "Aulas Personalizadas para seu Negócio",
    description:
      "Desenvolvemos programas específicos para cada área de atuação, com vocabulário técnico e situações reais do seu negócio.",
    pillars: [
      {
        code: "01",
        label: "Conteúdo adaptado ao seu setor",
        theme: {
          bg: "var(--primary)",
          text: "color-mix(in srgb, var(--primary) 55%, var(--heading))",
        },
      },
      {
        code: "02",
        label: "Simulações de reuniões e negociações",
        theme: {
          bg: "var(--hero-accent)",
          text: "color-mix(in srgb, var(--hero-accent) 40%, var(--heading))",
        },
      },
      {
        code: "03",
        label: "Comunicação empresarial eficiente",
        theme: {
          bg: "var(--yellow-dark)",
          text: "color-mix(in srgb, var(--yellow-dark) 35%, var(--heading))",
        },
      },
      {
        code: "04",
        label: "Flexibilidade de horários para equipes",
        theme: {
          bg: "var(--terracotta)",
          text: "color-mix(in srgb, var(--terracotta) 60%, var(--heading))",
        },
      },
    ],
  },
  solutions: {
    title: "Nossas Soluções",
    items: [
      {
        title: "Treinamento por Nível",
        image: "/img/vectors/meeting.png",
        imageAlt: "Treinamento por Nível",
        description:
          "Diagnóstico inicial e divisão em grupos homogêneos por nível de proficiência.",
        bullets: [
          "Avanço progressivo com metas claras",
          "Relatórios periódicos de evolução",
        ],
      },
      {
        title: "Treinamento por Departamento",
        image: "/img/vectors/puzzle2.png",
        imageAlt: "Treinamento por Departamento",
        description:
          "Programas específicos para cada área da empresa com vocabulário técnico relevante.",
        bullets: ["Comercial/Vendas", "TI/Tecnologia", "Administrativo"],
      },
      {
        title: "Imersão Executiva",
        image: "/img/vectors/executivo.png",
        imageAlt: "Imersão Executiva",
        description:
          "Programa intensivo para executivos com foco em liderança e negociações internacionais.",
        bullets: [
          "Business English avançado",
          "Preparação para reuniões e apresentações",
          "Protocolos internacionais",
        ],
      },
    ],
  },
  testimonials: {
    title: "Empresas que Confiam",
    items: [
      {
        quote:
          "A Connections Languages transformou nossa capacidade de comunicação internacional. Em 6 meses, nossa equipe comercial já estava fechando negócios em inglês com confiança.",
        author: "Carlos Mendes, Diretor Comercial",
      },
      {
        quote:
          "O programa personalizado para nossa equipe de TI foi essencial para integrarmos com times globais. A metodologia prática fez toda a diferença.",
        author: "Ana Lúcia, Gerente de RH",
      },
      {
        quote:
          "A imersão executiva preparou nosso time de liderança para expandir nossos negócios na Europa. Resultados mensuráveis em pouco tempo.",
        author: "Roberto Silva, CEO",
      },
    ],
  },
  contact: {
    title: "Fale com nosso time corporativo",
    description:
      "Preencha o formulário e nossa equipe entrará em contato para entender as necessidades da sua empresa e desenvolver uma proposta personalizada.",
    formTitle: "Solicitar Proposta Personalizada",
    employeeOptions: ["1-5", "6-10", "11-20", "21-50", "50+"],
  },
} as const;

export const sobreTypedStrings = [
  "Conectando Pessoas",
  "Conectando Famílias",
  "Conectando Amigos",
] as const;

export const sobreSlides = [
  { src: "/img/slide1.jpg", alt: "Slide 1" },
  { src: "/img/slide2.jpg", alt: "Slide 2" },
  { src: "/img/slide3.jpg", alt: "Slide 3" },
] as const;

export const idiomas = [
  {
    name: "Inglês",
    code: "EN",
    layout: "wide",
    theme: {
      bg: "var(--primary)",
      text: "color-mix(in srgb, var(--primary) 55%, var(--heading))",
    },
  },
  {
    name: "Português",
    code: "PT",
    layout: "square",
    theme: {
      bg: "var(--hero-accent)",
      text: "color-mix(in srgb, var(--hero-accent) 40%, var(--heading))",
    },
  },
  {
    name: "Espanhol",
    code: "ES",
    layout: "square",
    theme: {
      bg: "var(--yellow-dark)",
      text: "color-mix(in srgb, var(--yellow-dark) 35%, var(--heading))",
    },
  },
  {
    name: "Francês",
    code: "FR",
    layout: "square",
    theme: {
      bg: "var(--primary-soft)",
      text: "color-mix(in srgb, var(--primary) 65%, var(--heading))",
    },
  },
  {
    name: "Italiano",
    code: "IT",
    layout: "square",
    theme: {
      bg: "var(--terracotta)",
      text: "color-mix(in srgb, var(--terracotta) 60%, var(--heading))",
    },
  },
  {
    name: "Alemão",
    code: "DE",
    layout: "wide",
    theme: {
      bg: "var(--nav)",
      text: "var(--heading)",
    },
  },
] as const;

export const metodologia = [
  {
    title: "Aulas 100% Online e ao vivo",
    icon: "/img/vectors/flexibility.png",
    iconAlt: "Flexibilidade",
    image: "/img/vectors/online_class.png",
    imageAlt: "Aulas online",
    paragraphs: [
      "Quando você marcar sua primeira aula, ou sua aula experimental, o professor irá te mandar o link da plataforma que aconteceram as aulas.",
      "Tendo internet, um computador ou celular, pode fazer a aula de qualquer lugar do mundo!",
    ],
    imageFirst: false,
  },
  {
    title: "Método Natural",
    icon: "/img/vectors/goal.png",
    iconAlt: "Objetivos",
    image: "/img/vectors/watering.png",
    imageAlt: "Método Natural",
    paragraphs: [
      "Acreditamos que a melhor maneira de aprender um novo idioma é de forma natural, se expondo a assuntos do seu interesse, com o foco nos seus objetivos.",
      "Você é o centro da aula! Nossa missão é criar conexões por meio do idioma.",
      "Buscamos fazer o aluno se sentir confortável e ajudamos a aprender com tópicos, temas e aulas customizadas de acordo com seus interesses e necessidades.",
    ],
    imageFirst: false,
  },
] as const;

export const metodologiaPlataforma = {
  title: "ConnectLang",
  description:
    "Uma plataforma exclusiva desenvolvida pela Connections para apoiar a evolução dos nossos alunos, com ferramentas de estudo, biblioteca e acompanhamento dos professores.",
  image: "/img/plataform-section.png",
  imageAlt: "Plataforma exclusiva Connections para alunos",
} as const;

export const professores = [
  {
    name: "Vitor Cardoso",
    initials: "VC",
    image: "/img/professor1.jpg",
    role: "Trilíngue Autodidata",
    tags: ["Inglês", "Cultura Geek", "Tecnologia"],
    bio: "Desde os 7 anos, Vitor domina o inglês e traz para suas aulas o método autodidata, onde a curiosidade é a chave para o aprendizado. Inspirado pela arte e pela interação humana, ele transforma o estudo de idiomas em uma experiência envolvente e natural!",
    theme: {
      ring: "var(--primary)",
      tagBg: "var(--primary)",
      tagText: "var(--background)",
    },
  },
  {
    name: "Daniel Cardoso",
    initials: "DC",
    image: "/img/professor2.png",
    role: "Poliglota Autodidata",
    tags: ["Inglês", "Italiano", "Francês", "Alemão"],
    bio: "Fundador da Connections e por mais de 8 anos trabalhando com educação, Daniel é apaixonado por motivar pessoas a aprenderem idiomas e acredita que constância e o método certo levam qualquer pessoa à fluência!",
    theme: {
      ring: "var(--hero-accent)",
      tagBg: "var(--hero-accent)",
      tagText: "var(--heading)",
    },
  },
  {
    name: "Lucas Alvarez",
    initials: "LA",
    image: "/img/professor4.jpeg",
    role: "Professor de Espanhol",
    tags: ["Espanhol", "Conversação"],
    bio: "Espanhol de nascimento, mas de mãe brasileira, viveu parte da sua infância na sua terra natal antes de migrar para o Brasil, tendo herdado de berço os dois idiomas, o espanhol e o português. No entanto, o ir e vir entre os dois países se tornou um \"destino\" comum durante todos estes anos, trazendo consigo muitas experiências e aprendizados enriquecedores.\n\nCom o domínio natural das duas línguas, e apaixonado pelas diversas culturas do mundo, quer te ajudar a aprender o espanhol de uma forma natural e espontânea, te levando a explorar novas fronteiras através da língua e da conversação.",
    theme: {
      ring: "var(--terracotta)",
      tagBg: "var(--terracotta)",
      tagText: "var(--background)",
    },
  },
  {
    name: "Professora Maria",
    initials: "PM",
    image: "/img/professor5.jpeg",
    role: "Inglês e Português",
    tags: ["Inglês", "Literatura", "Cultura pop"],
    bio: "Formada em Letras Português/Inglês, Maria é apaixonada por idiomas, literatura e cultura pop. Com experiência em ensino personalizado, ela conecta o aprendizado a temas que os alunos amam — de séries e músicas a cultura asiática. Suas aulas são dinâmicas, acolhedoras e feitas sob medida para cada estudante.",
    theme: {
      ring: "color-mix(in srgb, var(--primary) 72%, var(--heading))",
      tagBg: "color-mix(in srgb, var(--primary) 72%, var(--heading))",
      tagText: "var(--background)",
    },
  },
] as const;

export const modalidades = [
  {
    title: "Aulas em Grupo",
    image: "/img/vectors/group_meeting_online.png",
    imageAlt: "Aulas em Grupo",
    paragraphs: [
      "Aulas em grupo, com até 5 pessoas, promovem interação e aprendizado colaborativo. É uma ótima opção para quem gosta de trocar experiências e aprender em equipe.",
      "Ideal para desenvolver habilidades de comunicação em um ambiente dinâmico e descontraído.",
    ],
    imageFirst: true,
    pacotes: ["6 meses", "1 ano", "Flexível"],
  },
  {
    title: "Aulas Particulares",
    image: "/img/vectors/meetin_online.png",
    imageAlt: "Aulas Particulares",
    paragraphs: [
      "Aulas particulares oferecem atenção exclusiva do professor, permitindo um aprendizado personalizado e focado nos seus objetivos.",
      "Perfeitas para quem busca flexibilidade e um ritmo de aprendizado adaptado às suas necessidades.",
    ],
    imageFirst: false,
    pacotes: ["6 meses", "1 ano", "Flexível"],
  },
  // {
  //   title: "Mentoria para Autodidatas",
  //   image: "/img/vectors/ideia.png",
  //   imageAlt: "Mentoria para Autodidatas",
  //   paragraphs: [
  //     "Nossa mentoria é ideal para quem deseja aprender um idioma de forma independente, mas precisa de orientação para começar. Mesmo que o idioma desejado não seja falado diretamente, é possível oferecer ajuda com materiais, rotinas de estudo e estratégias personalizadas.",
  //     "Você terá acesso a um plano de estudos estruturado, dicas de recursos confiáveis e acompanhamento para garantir que está no caminho certo.",
  //     "Transforme sua curiosidade em fluência com a nossa mentoria para autodidatas!",
  //   ],
  //   imageFirst: false,
  //   imageSmall: true,
  // },
] as const;

export const pacotes = [
  {
    title: "Aulas Particulares",
    plans: [{ name: "6 meses" }, { name: "1 ano" }, { name: "Flexível" }],
    note: "Oferecemos até 5 aulas por semana. Entre em contato para montar o pacote ideal para você.",
  },
  {
    title: "Aulas em Grupo",
    plans: [{ name: "6 meses" }, { name: "1 ano" }, { name: "Flexível" }],
    note: "Oferecemos até 5 aulas por semana. Entre em contato para montar o pacote ideal para você.",
  },
] as const;

export const depoimentos = [
  {
    quote:
      "I think the way you try to teach, with conversations, games, and videos, makes the class better, unlike classes at school where only the teacher talked. I found your method much easier to learn.",
    author: "Geovane Meurer",
  },
  {
    quote:
      "Estou gostando bastante. Eu sou um caso diferente porque eu não faço aula porque preciso, é simplesmente por prazer, então fico muito a vontade para aprender no meu tempo e conseguir soltar a conversação. Então a aula é quase um bate-papo, quase uma terapia. haha",
    author: "Thiago Bollmann",
  },
  {
    quote:
      "Evolução irmão. Pratiquei bastante a conversação contigo, melhorei meu vocabulário aprendendo bastante palavra nova.",
    author: "Matheus Frizzo",
  },
] as const;

export const bentoFeatures = [
  {
    title: "Aulas ao vivo e personalizadas",
    description:
      "Quando você marca sua aula experimental, recebe o link da plataforma e já começa com foco no seu objetivo.",
    size: "large",
  },
  {
    title: "Foco em conversação",
    description:
      "Você é o centro da aula. Aprendizado com temas do seu interesse e prática real de comunicação.",
    size: "medium",
  },
  {
    title: "Horários flexíveis",
    description:
      "Com internet e celular ou computador, você pode estudar de qualquer lugar do mundo.",
    size: "medium",
  },
  {
    title: "Professores capacitados",
    description:
      "Equipe treinada para adaptar conteúdos ao seu ritmo, com aulas customizadas e acompanhamento contínuo.",
    size: "small",
  },
] as const;
