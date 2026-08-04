export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'residencial' | 'comercial' | 'interiores' | 'urbanismo';
  categoryLabel: string;
  location: string;
  year: string;
  area: string;
  client: string;
  image: string;
  gallery: string[];
  description: string;
  concept: string;
  features: string[];
  blueprintUrl?: string;
  status: 'Concluído' | 'Em Construção' | 'Fase de Projeto';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
  projectRef: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export const COMPANY_INFO = {
  name: "Genesis Grupo S.A",
  phone: "+244 923 881 992",
  phoneFormatted: "+244 923 881 992",
  whatsappUrl: "https://wa.me/244923881992?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20projeto%20de%20arquitetura%20com%20o%20Genesis%20Grupo%20S.A",
  email: "contacto@genesisgrupo.co.ao",
  address: "Angola, Huambo - Cidade Alta, Rua dos Ocupadores",
  city: "Huambo, Cidade Alta",
  country: "Angola",
  hours: "Segunda a Sexta: 08:00 - 18:00 | Sábado: 09:00 - 13:00",
  stats: [
    { label: "Projetos Concluídos", value: "120+" },
    { label: "Anos de Experiência", value: "14+" },
    { label: "Cidades Atendidas", value: "8 em Angola" },
    { label: "Satisfação de Clientes", value: "99.4%" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "villa-horizonte-huambo",
    title: "Residência Villa Horizonte",
    subtitle: "Arquitetura Residencial de Alto Padrão",
    category: "residencial",
    categoryLabel: "Residencial Luxo",
    location: "Huambo, Cidade Alta",
    year: "2025",
    area: "650 m²",
    client: "Família Vasconcelos",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop"
    ],
    description: "Uma residência contemporânea concebida para maximizar a luz natural e a ventilação bioclimática no clima do Planalto Central do Huambo, integrando interiores de luxo e paisagismo autóctone.",
    concept: "A volumetria em balanço cria sombras naturais estratégicas, reduzindo o consumo de energia para climatização e conectando o espaço interior aos jardins através de panos de vidro minimalistas.",
    features: [
      "Estrutura com betão aparelhado e pedra local",
      "Sistema de aproveitamento de águas pluviais",
      "Piscina infinity integrada ao declive natural",
      "Automação residencial e painéis solares híbridos"
    ],
    status: "Concluído"
  },
  {
    id: "centro-empresarial-genesis",
    title: "Torre Corporativa Genesis Peak",
    subtitle: "Complexo de Escritórios & Comércio",
    category: "comercial",
    categoryLabel: "Comercial & Corporativo",
    location: "Huambo, Centro Comercial",
    year: "2024",
    area: "3.400 m²",
    client: "Grupo Investimentos Huambo",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
    ],
    description: "Um hino à modernidade corporativa no Huambo. O edifício alia fachadas duplas ventiladas a uma distribuição flexível para escritórios de topo e lojas exclusivas no piso térreo.",
    concept: "Transparência corporativa e eficiência térmica: a fachada exterior filtra o excesso de insolação mantendo visual panorâmico sobre a cidade alta do Huambo.",
    features: [
      "Certificação de eficiência energética",
      "Lobby em pé-direito duplo de 7 metros",
      "Estacionamento subterrâneo em 2 níveis",
      "Auditório executivo com 150 lugares"
    ],
    status: "Concluído"
  },
  {
    id: "penthouse-cidade-alta",
    title: "Penthouse Alvalade & Cidade Alta",
    subtitle: "Design de Interiores & Luxo Minimalista",
    category: "interiores",
    categoryLabel: "Interiores",
    location: "Huambo / Luanda",
    year: "2025",
    area: "320 m²",
    client: "Privado",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop"
    ],
    description: "Reestruturação completa do layout de uma penthouse com curadoria de mobiliário por medida em madeiras nobres angolanas, acabamentos acetinados e paleta neutra em tons quentes e grená.",
    concept: "Fluidez espacial e sobriedade elegante. Eliminação de barreiras visuais para integrar cozinha gourmet, sala principal e terraço suspenso.",
    features: [
      "Marcenaria customizada em pau-rosa",
      "Iluminação cênica automatizada em LED",
      "Lareira ecológica em mármore calcário",
      "Suíte master com closet walk-in"
    ],
    status: "Concluído"
  },
  {
    id: "plano-urbano-parque-alto",
    title: "Masterplan Parque Urbano Cidade Alta",
    subtitle: "Planeamento Urbano Sustentável",
    category: "urbanismo",
    categoryLabel: "Planeamento Urbano",
    location: "Huambo, Cidade Alta",
    year: "2026",
    area: "12 Hectares",
    client: "Governo Provincial / Parceria Privada",
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?q=80&w=1600&auto=format&fit=crop"
    ],
    description: "Projeto urbanístico de revitalização e criação de corredores ecológicos pedonais, ciclovias e praças comunitárias na área nobre do Huambo.",
    concept: "Reconectar a comunidade com o espaço público através de zonas verdes acessíveis, passeios sombreados e arquitetura comunitária modular.",
    features: [
      "Ciclovias integradas com 8 km",
      "Praça central com anfiteatro ao ar livre",
      "Mobiliário urbano antivandalismo",
      "Reflorestamento com espécies nativas do planalto"
    ],
    status: "Em Construção"
  },
  {
    id: "villa-moringa-benguela",
    title: "Villa Marítima Baía Azul",
    subtitle: "Arquitetura Residencial Tropical Modernista",
    category: "residencial",
    categoryLabel: "Residencial Luxo",
    location: "Benguela, Baía Azul",
    year: "2024",
    area: "520 m²",
    client: "Dr. Fernando Miranda",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1600&auto=format&fit=crop"
    ],
    description: "Residência de férias de linhas arrojadas na costa de Benguela, articulando pátios internos com a vista frontal para o mar atlántico.",
    concept: "Brise-soleil verticais que protegem do calor marítimo enquanto canalizam a brisa constante para refrescar naturalmente os dormitórios.",
    features: [
      "Aço corten e betão pigmentado marfim",
      "Deck em madeira teca sustentável",
      "Piso cerâmico atérmico antiderrapante",
      "Varanda gourmet suspensa sobre as dunas"
    ],
    status: "Concluído"
  },
  {
    id: "clinica-medica-planalto",
    title: "Centro Médico Especializado Huambo",
    subtitle: "Arquitetura Hospitalar & Saúde",
    category: "comercial",
    categoryLabel: "Comercial & Corporativo",
    location: "Huambo, Rua dos Ocupadores",
    year: "2025",
    area: "1.800 m²",
    client: "Grupo Saúde Angola",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop"
    ],
    description: "Desenvolvimento de clínica médica moderna focada no conforto humanizado dos pacientes, fluxo otimizado de profissionais e assepsia impecável.",
    concept: "Arquitetura curativa: utilização de luz natural indireta e áreas ajardinadas acessíveis aos quartos para acelerar o bem-estar e recuperação dos utentes.",
    features: [
      "Salas cirúrgicas com filtragem HEPA",
      "Recepção ampla com jardins verticais",
      "Acessibilidade total segundo normas internacionais",
      "Reservatório industrial subterrâneo de água potável"
    ],
    status: "Concluído"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Eng. Manuel Costa",
    role: "Diretor Executivo",
    company: "Invest-Huambo Real Estate",
    location: "Huambo, Angola",
    avatar: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=400&auto=format&fit=crop",
    content: "O Genesis Grupo S.A superou todas as expectativas no desenvolvimento da Torre Genesis Peak. Desde o estudo prévio ao acompanhamento de obra na Cidade Alta, a rigidez com prazos e a sobriedade do design minimalista foram exemplares.",
    rating: 5,
    projectRef: "Torre Corporativa Genesis Peak"
  },
  {
    id: "t2",
    name: "Dra. Teresa Fonseca",
    role: "Proprietária",
    company: "Clínica Saúde & Vida",
    location: "Huambo, Angola",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    content: "Transformaram a nossa visão para a nova clínica numa referência arquitetónica no Huambo. O aproveitamento da luz e a elegância dos interiores trazem um nível de serenidade inigualável para os nossos pacientes.",
    rating: 5,
    projectRef: "Centro Médico Especializado Huambo"
  },
  {
    id: "t3",
    name: "Arq. António Silva",
    role: "Consultor de Investimento",
    company: "Grupo Mar & Sol",
    location: "Benguela, Angola",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=400&auto=format&fit=crop",
    content: "A precisão dos orçamentos e dos projetos 3D da equipa Genesis deu-nos total segurança antes de iniciar a construção. Recomendo de olhos fechados para quem exige arquitetura moderna de padrão internacional.",
    rating: 5,
    projectRef: "Villa Marítima Baía Azul"
  },
  {
    id: "t4",
    name: "Dra. Beatriz Santos",
    role: "Cliente Residencial",
    company: "Cidade Alta",
    location: "Huambo, Angola",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop",
    content: "Morar na nossa casa concebida pelo Genesis Grupo é um sonho diário. As divisões são extremamente aconchegantes e o conforto térmico no Huambo é impecável durante todo o ano.",
    rating: 5,
    projectRef: "Residência Villa Horizonte"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "tendencias-arquitetura-angola-2026",
    title: "Tendências de Arquitetura Contemporânea em Angola para 2026",
    slug: "tendencias-arquitetura-angola-2026",
    category: "Tendências",
    readTime: "5 min de leitura",
    date: "28 de Julho, 2026",
    author: {
      name: "Arq. Genesis Grupo",
      role: "Equipa de Conceção",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Descubra como a integração de materiais locais, bioclimatismo e linhas minimalistas está a moldar os novos edifícios residenciais e corporativos de alto padrão no Huambo e Luanda.",
    content: [
      "A arquitetura moderna em Angola atravessa uma fase fascinante de maturidade e identidade singular. Não se trata mais apenas de replicar modelos internacionais, mas sim de conceber espaços que dialoguem diretamente com a nossa geografia, clima e estilo de vida.",
      "No Genesis Grupo S.A, temos observado três grandes picos de tendência para 2026: a valorização de elementos bioclimáticos (ventilação cruzada e proteção solar), a aplicação de betão estrutural combinado com pedras da região do Planalto Central, e a transição definitiva para edifícios energeticamente eficientes.",
      "A iluminação natural estratégica torna-se a grande protagonista dos interiores. Grandes superfícies envidraçadas associadas a brises-soleil metálicos ou de madeira garantem amplitude sem aquecimento excessivo."
    ],
    tags: ["Arquitetura Angola", "Huambo", "Design Bioclimático", "Minimalismo"]
  },
  {
    id: "como-planejar-orcamento-construcao",
    title: "Guia Prático: Como Estimar o Orçamento da sua Obra sem Surpresas",
    slug: "como-planejar-orcamento-construcao",
    category: "Dicas de Construção",
    readTime: "7 min de leitura",
    date: "15 de Junho, 2026",
    author: {
      name: "Eng. Pedro Chaves",
      role: "Diretor de Projetos",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Passo a passo fundamental para calcular custos de projeto, materiais, mão de obra e licenças no contexto imobiliário angolano.",
    content: [
      "Construir uma casa ou edifício comercial é um dos maiores investimentos de uma vida. Ter clareza sobre todas as fases financeiras desde o primeiro esboço evita atrasos e dissabores durante a execução.",
      "Primeiro passo: defina o programa de necessidades de forma rigorosa. Qual a metragem real necessária? Quais os acabamentos imprescindíveis e quais os desejáveis?",
      "O projeto executivo detalhado reduz até 25% dos custos imprevistos em obra, pois antecipa conflitos entre instalações hidráulicas, elétricas e estruturais."
    ],
    tags: ["Orçamentos", "Gestão de Obra", "Huambo", "Planeamento"]
  },
  {
    id: "importancia-projetos-3d-photorealistas",
    title: "A Importância dos Renders 3D Fotorrealistas na Decisão Arquitetónica",
    slug: "importancia-projetos-3d-photorealistas",
    category: "Tecnologia 3D",
    readTime: "4 min de leitura",
    date: "02 de Maio, 2026",
    author: {
      name: "Dra. Inês Benguela",
      role: "Especialista em Visualização 3D",
      avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=300&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    excerpt: "Como a simulação tridimensional imersiva permite ajustar texturas, volumetria e iluminação antes de colocar o primeiro tijolo no terreno.",
    content: [
      "Visualizar a sua futura residência ou escritório exatamente como ficará construído é uma revolução no relacionamento entre cliente e arquiteto.",
      "Com o avanço da computação gráfica no Genesis Grupo S.A, desenvolvemos maquetes virtuais interativas e animações walkthrough que reproduzem com fidelidade milimétrica a incidência solar das 08h às 18h no Huambo.",
      "Isso permite ao investidor ajustar cores de fachada, tipos de piso e distribuição de mobiliário com total tranquilidade."
    ],
    tags: ["Renders 3D", "Visualização", "Tecnologia", "Design de Interiores"]
  }
];

export const ESTIMATE_TYPES = [
  { id: 'residencial', title: 'Residência Unifamiliar / Villa', baseRateAOA: 250000, icon: 'Home' },
  { id: 'comercial', title: 'Edifício Comercial / Escritórios', baseRateAOA: 320000, icon: 'Building2' },
  { id: 'interiores', title: 'Design de Interiores & Remodelação', baseRateAOA: 180000, icon: 'Palette' },
  { id: 'urbanismo', title: 'Planeamento Urbano / Loteamento', baseRateAOA: 120000, icon: 'Compass' },
];

export const FINISH_LEVELS = [
  { id: 'essencial', title: 'Essencial / Padrão Médio', multiplier: 1.0, desc: 'Linhas sóbrias, materiais duráveis de ótima qualidade.' },
  { id: 'superior', title: 'Superior / Padrão Elevado', multiplier: 1.4, desc: 'Acabamentos nobres, automação básica e grandes vãos.' },
  { id: 'luxo', title: 'Alto Luxo Minimalista', multiplier: 1.85, desc: 'Pedras exclusivas, domótica avançada, caixilharia de topo.' },
];

export const EXTRA_SERVICES = [
  { id: 'render3d', title: 'Maquete Virtual 3D & Animação 4K', rate: 350000 },
  { id: 'interiores', title: 'Projeto Detalhado de Interiores & Marcenaria', rate: 500000 },
  { id: 'licenciamento', title: 'Gestão de Licenciamento Municipal (Huambo/Províncias)', rate: 450000 },
  { id: 'fiscalizacao', title: 'Fiscalização e Acompanhamento Técnico da Obra', rate: 750000 },
];
