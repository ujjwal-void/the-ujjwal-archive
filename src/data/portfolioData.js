// Core Dataset for Ujjwal's Personal Digital Portfolio & Recruiter Archive
// Grounded 100% in Ujjwal's Resume, GitHub, LeetCode & Physics/Math Notes

export const PROFILE_DATA = {
  name: "Ujjwal Ujjwal",
  title: "Software Engineer & AI/Backend Architect",
  tagline: "Software Engineer at ZFunds & Founding Engineer at Advor.ai. Specializing in AI/LLM Systems, Hybrid RAG, High-Concurrency Backends, and Physics/Mathematics Foundations.",
  email: "ujjwal.02023@gmail.com",
  phone: "+91 7380679251",
  location: "Gurugram, India",
  leetcode: "https://leetcode.com/u/ujjwal92/",
  status: "SDE at ZFunds • Building ZIVA V2 WealthTech AI",
  bio: "Software Engineer with deep experience in building high-scale distributed backends and production AI systems. Core engineer on ZIVA V2 WealthTech platform at ZFunds and former Founding Engineer at Advor.ai, where I scaled event-driven microservices to <150ms P99 latency and built hybrid RAG pipelines with Redis caching.",
  education: {
    degree: "B.Tech in Computer Science Engineering (AI & ML Specialization)",
    institution: "Vellore Institute of Technology, Chennai",
    period: "2021 - 2025",
    gpa: "7.23 / 10.0",
    schooling: "Intermediate (Class XII) - Lucknow Public College (83.25%)"
  },
  socials: [
    { name: "GitHub", url: "https://github.com/ujjwal-void", icon: "Github", label: "github.com/ujjwal-void" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ujjwal-ujjwal-dev/", icon: "Linkedin", label: "linkedin.com/in/ujjwal-ujjwal-dev" },
    { name: "LeetCode", url: "https://leetcode.com/u/ujjwal92/", icon: "Code2", label: "leetcode.com/u/ujjwal92" },
    { name: "Email", url: "mailto:ujjwal.02023@gmail.com", icon: "Mail", label: "ujjwal.02023@gmail.com" },
    { name: "Phone", url: "tel:+917380679251", icon: "Phone", label: "+91 7380679251" }
  ]
};

export const WORK_EXPERIENCE = [
  {
    id: "zfunds",
    company: "ZFunds",
    role: "Software Development Engineer",
    period: "April 2026 – Present",
    location: "Gurugram, India",
    techStack: ["Python", "TypeScript", "JavaScript", "Node.js", "FastAPI", "Flask", "Express", "AWS"],
    highlights: [
      "Served as a core engineer driving the development and architecture of ZIVA Version 2, India’s pioneer WealthTech AI platform.",
      "Architected and integrated a comprehensive, end-to-end Portfolio Analysis module across backend, frontend, and AI sub-systems.",
      "Implemented critical financial modules within ZIVA, including Goal Proposal, Portfolio Proposal, and Fund Recommendation engines.",
      "Designed and deployed dynamic language-switching and context-switching capabilities to enhance conversational continuity and user experience.",
      "Developed and integrated robust prompt guardrails to secure AI responses, minimize hallucinations, and mitigate prompt injection risks."
    ]
  },
  {
    id: "cyberpoint",
    company: "CyberPoint Private Limited (Advor.ai)",
    role: "Software Developer (Founding Engineer)",
    period: "Jan 2025 – April 2026",
    location: "Gurugram, India",
    techStack: ["Python", "TypeScript", "JavaScript", "FastAPI", "Nest.js", "Express", "Node.js", "React.js", "Redis", "RabbitMQ", "FAISS", "AWS"],
    highlights: [
      "Scaled the backend to handle peak traffic surges using Redis clustering and multi-layer caching with prefetch pipelines.",
      "Migrated Profile Ranking service to an event-driven architecture using RabbitMQ, slashing P99 response times from 700ms to <150ms.",
      "Engineered a hybrid RAG pipeline with a deterministic keyword-trigger layer to pull 100% accurate data from DB before falling back to LLM search.",
      "Built an automated technical screening engine & async bio-generator using LangChain & Redis task queues to process LLM calls asynchronously.",
      "Built RAG-based AI search engine using Llama, FAISS, and Elasticsearch, improving document retrieval accuracy by 40%.",
      "Architected microservices (Profile Ranking, Rating, Feeds) from scratch and deployed zero-downtime releases on AWS (EC2, S3, Coolify) with Grafana/Prometheus/Sentry monitoring."
    ]
  },
  {
    id: "drdo",
    company: "Defence Research and Development Organisation (DRDO)",
    role: "DevOps & Networking Intern",
    period: "June 2024 – July 2024",
    location: "Hyderabad, India",
    techStack: ["Python", "Flask", "Docker", "Kubernetes", "Cyber Security", "Packet Sniffing"],
    highlights: [
      "Developed real-time LAN monitoring tool using Flask with responsive frontend for bandwidth tracking, device discovery, and network activity analysis.",
      "Integrated packet sniffing capabilities for deep traffic inspection.",
      "Containerized services with Docker and deployed via Kubernetes with secure CI/CD pipelines and IP-restricted admin dashboards."
    ]
  },
  {
    id: "iamneo",
    company: "Iamneo",
    role: "Java Fullstack Intern",
    period: "Aug 2023 – Dec 2023",
    location: "Remote",
    techStack: ["Java", "Spring Boot", "React.js", "JUnit", "Kafka", "SonarQube"],
    highlights: [
      "Built RESTful endpoints using Spring Boot with custom DTOs and input validation for core content modules.",
      "Integrated SonarQube into CI pipeline for automated security vulnerability detection.",
      "Built a React administrative dashboard for bulk CRUD operations, eliminating manual production SQL updates.",
      "Configured Kafka consumer groups for background data synchronization during heavy write traffic."
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "osmos-hackathon",
    title: "1st Runner-Up — Osmos Hackathon by OnlineSales.ai",
    award: "Secured 1st Runner-Up out of 131 teams",
    prize: "Prize: INR 30,000",
    description: "Led team of 4 through 3 elimination rounds to build AdCraft, an AI-powered advertisement generation platform emphasizing user-centric design & AI collaboration.",
    demoLink: "#"
  },
  {
    id: "cryptoguard-hackathon",
    title: "Finalist — CryptoGuard Hackathon at VIT Chennai",
    award: "Hackathon Finalist",
    description: "Developed identity verification tool using Face Detection and Web3 decentralized architecture for secure credential storage with team of 3."
  }
];

export const TECHNICAL_SKILLS = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C++"],
  frontend: ["React.js", "Next.js", "Redux Toolkit", "HTML5/CSS3", "Vanilla CSS"],
  backend: ["FastAPI", "Node.js", "Express.js", "Nest.js", "Spring Boot", "Flask", "RESTful APIs", "Microservices", "WebSockets"],
  ai_llm: ["LangChain", "LlamaIndex", "ChromaDB", "FAISS", "Elasticsearch", "Embeddings", "RAG Pipelines", "Hugging Face", "Prompt Engineering"],
  ml_dl: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "CNNs", "NLP"],
  databases: ["MongoDB", "Redis (Clustering/Caching)", "MySQL", "PostgreSQL"],
  devops_cloud: ["AWS (EC2, S3, Lambda, RDS, DynamoDB, CloudWatch)", "Docker", "Kubernetes", "CI/CD Pipelines", "Coolify"],
  observability: ["Kafka", "RabbitMQ", "Sentry", "Grafana", "Prometheus"]
};

export const PHYSICS_MATH_NOTES = [
  {
    id: "vector-spaces-geometry",
    title: "High-Dimensional Vector Geometry, Dot Product & Cosine Similarity",
    category: "Linear Algebra & Vectors",
    date: "Aug 2026",
    videoUrl: "https://www.youtube.com/embed/FGBgZAJL-mM",
    formula: "cos(θ) = (u · v) / (||u|| ||v||) = Σ(u_i * v_i) / (sqrt(Σ u_i^2) * sqrt(Σ v_i^2))",
    summary: "Understanding vectors as directional arrows in spatial geometry and as ordered numerical lists. How vector dot products quantify projection, magnitude, and spatial alignment in 1536-dimensional embedding spaces.",
    csConnection: "Direct mathematical foundation for Vector Databases (FAISS, Qdrant, ChromaDB) used in LLM Retrieval-Augmented Generation (RAG) and Semantic Search.",
    keyTakeaway: "On unit-normalized embedding vectors, Euclidean distance and Cosine similarity yield identical top-k rankings, making vector dot products optimal for O(log N) matrix search."
  },
  {
    id: "activation-functions-gelu-relu",
    title: "Neural Network Activation Functions (ReLU, GELU & Non-Linearities)",
    category: "Activation Math & Neural Nets",
    date: "Jul 2026",
    videoUrl: null,
    formula: "ReLU(x) = max(0, x)  |  GELU(x) = x * Φ(x) ≈ 0.5x * (1 + tanh(sqrt(2/π) * (x + 0.044715 x^3)))",
    summary: "Why non-linear activation functions are mathematically mandatory to break linear superposition in multi-layer perceptrons. Deriving GELU (Gaussian Error Linear Unit) used in Transformer architectures like GPT and BERT.",
    csConnection: "Activation functions introduce non-linearity, enabling deep neural networks to approximate arbitrary continuous functions (Universal Approximation Theorem).",
    keyTakeaway: "GELU weights inputs by their probability value under a Gaussian distribution, preventing the 'dying ReLU' gradient vanishing problem during Transformer backpropagation."
  },
  {
    id: "activation-softmax-cross-entropy",
    title: "Softmax Activation Function & Cross-Entropy Gradient Loss",
    category: "Activation Math & Optimization",
    date: "Jun 2026",
    videoUrl: null,
    formula: "Softmax(z_i) = e^(z_i) / Σ e^(z_j)  |  L_CE = - Σ y_i log(Softmax(z_i))",
    summary: "Converting raw neural network output logits into a normalized probability distribution that sums to 1. Deriving the loss gradient ∂L/∂z_i = Softmax(z_i) - y_i for backpropagation.",
    csConnection: "Standard final-layer activation in Transformer LLMs for next-token prediction and multi-class classification logits.",
    keyTakeaway: "Subtracting max(z) before exponentiating (Softmax Numerical Stability Trick) prevents floating-point overflow (Infinity) in C++ / PyTorch CUDA kernels."
  }
];

export const PROJECTS_DATA = [
  {
    id: "ziva-v2-wealthtech",
    title: "ZIVA V2 — AI WealthTech Platform & Portfolio Module",
    category: "AI & WealthTech",
    companyTag: "ZFunds",
    tagline: "End-to-end Portfolio Analysis, Goal Proposal, & AI Financial Engines.",
    description: "Served as a core engineer driving ZIVA V2. Architected the Portfolio Analysis module across backend, frontend, and AI sub-systems, built Goal & Fund Recommendation engines, and integrated prompt injection guardrails.",
    tags: ["Python", "FastAPI", "TypeScript", "Node.js", "AWS", "Prompt Guardrails"],
    githubUrl: "https://github.com/ujjwal-void",
    demoUrl: "https://github.com/ujjwal-void",
    metrics: { impact: "Production AI Platform", scope: "ZFunds Core" },
    keyFeatures: [
      "End-to-end Portfolio Analysis engine",
      "Goal Proposal & Fund Recommendation modules",
      "Dynamic language & context-switching for AI conversations",
      "Robust prompt guardrails to mitigate hallucinations and injection risks"
    ]
  },
  {
    id: "advor-hybrid-rag",
    title: "Advor.ai — Event-Driven Microservices & Hybrid RAG Engine",
    category: "AI & High-Scale Backend",
    companyTag: "CyberPoint / Advor.ai",
    tagline: "Event-driven architecture with RabbitMQ, Redis clustering, and FAISS/Llama RAG.",
    description: "Architected microservices handling high traffic surges. Slashing P99 response latency from 700ms to <150ms using RabbitMQ and Redis caching, and built a hybrid RAG pipeline combining deterministic keyword triggers with LLM search (+40% accuracy).",
    tags: ["Python", "TypeScript", "FastAPI", "Nest.js", "RabbitMQ", "Redis", "FAISS", "LangChain"],
    githubUrl: "https://github.com/ujjwal-void",
    demoUrl: "https://github.com/ujjwal-void",
    metrics: { latency: "<150ms P99", accuracy: "+40% Retrieval" },
    keyFeatures: [
      "Event-driven microservices architecture with RabbitMQ",
      "Deterministic keyword-trigger + LLM semantic RAG search",
      "Async technical screening & bio-generator queue with LangChain",
      "AWS EC2/S3 zero-downtime deployment with Prometheus & Grafana"
    ]
  },
  {
    id: "nexus-pm",
    title: "Nexus PM — Project Management Backend Service",
    category: "Backend Microservices",
    companyTag: "Open Source Project",
    tagline: "RESTful API with 30+ endpoints & 3-tier Role-Based Access Control (RBAC).",
    description: "A robust project management backend engine featuring hierarchical task management, subtasks, file attachments, and JWT verification with email password resets.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    githubUrl: "https://github.com/ujjwal-void/Nexus-PM",
    demoUrl: "https://github.com/ujjwal-void",
    metrics: { endpoints: "30+ REST APIs", auth: "JWT & Email Verif" },
    keyFeatures: [
      "Three-tier RBAC system (Admin, Project Admin, Member)",
      "Hierarchical task management with subtasks and file attachments",
      "JWT authentication with email verification and password reset flows"
    ]
  },
  {
    id: "write-medium",
    title: "Write Medium — Full-Stack Blogging Platform",
    category: "Full-Stack Web App",
    companyTag: "Open Source Project",
    tagline: "Full-stack publishing platform with optimized MongoDB queries and search.",
    description: "Full-stack article publishing platform featuring JWT authentication, optimized MongoDB query performance, responsive design, and instant search.",
    tags: ["React.js", "Express.js", "Tailwind CSS", "MongoDB", "JWT"],
    githubUrl: "https://github.com/ujjwal-void/Write-Medium",
    demoUrl: "https://github.com/ujjwal-void",
    metrics: { architecture: "RESTful API", query: "Optimized Mongo" },
    keyFeatures: [
      "JWT authentication & user publication dashboard",
      "Optimized MongoDB indexing for fast article search",
      "RESTful API architecture with clean responsive UI"
    ]
  },
  {
    id: "adcraft-ai",
    title: "AdCraft — AI Advertisement Generation Platform",
    category: "AI Hackathon Winner",
    companyTag: "Osmos Hackathon 1st Runner-Up",
    tagline: "AI ad generation platform. 1st Runner-Up out of 131 teams (Prize: INR 30k).",
    description: "Built an AI-powered advertisement generation platform emphasizing user-centric design and AI collaboration. Secured 1st Runner-Up at the Osmos Hackathon by OnlineSales.ai.",
    tags: ["Python", "AI/LLM", "React.js", "FastAPI"],
    githubUrl: "https://github.com/ujjwal-void",
    demoUrl: "#",
    metrics: { award: "1st Runner-Up / 131 Teams", prize: "INR 30,000" },
    keyFeatures: [
      "AI creative generation pipeline",
      "Collaborative human-AI iteration workflow",
      "Award-winning hackathon architecture"
    ]
  },
  {
    id: "drdo-lan-monitor",
    title: "DRDO Real-Time LAN & Packet Inspection Tool",
    category: "DevOps & Cybersecurity",
    companyTag: "DRDO Internship",
    tagline: "Real-time network bandwidth tracking, device discovery, & packet sniffing.",
    description: "Flask network observability application built during DRDO internship featuring packet sniffing, device discovery, bandwidth monitoring, Docker containerization, and Kubernetes IP-restricted dashboards.",
    tags: ["Python", "Flask", "Docker", "Kubernetes", "Packet Sniffing", "Cyber Security"],
    githubUrl: "https://github.com/ujjwal-void",
    demoUrl: "https://github.com/ujjwal-void",
    metrics: { deployment: "Kubernetes / K8s", security: "IP-Restricted" },
    keyFeatures: [
      "Real-time bandwidth tracking & device discovery",
      "Deep packet inspection sniffing pipeline",
      "Containerized K8s deployment with IP-restricted admin dashboard"
    ]
  }
];

export const LINKTREE_LINKS = [
  {
    id: "portfolio-main",
    title: "⚡ Ujjwal's Main Archive",
    description: "Work Experience, Real Projects, Physics/Math & Culture Notes",
    url: "#home",
    icon: "Sparkles",
    badge: "Main",
    highlight: true
  },
  {
    id: "resume-pdf",
    title: "📄 Official Resume & Work Experience",
    description: "View Software Engineer Experience at ZFunds, Advor.ai & DRDO",
    url: "#experience",
    icon: "FileText",
    badge: "Recruiter"
  },
  {
    id: "physics-math",
    title: "⚛️ Physics & Mathematics Notes",
    description: "Vector spaces, general relativity metrics & Shannon entropy math",
    url: "#physics",
    icon: "Atom",
    badge: "Science"
  },
  {
    id: "leetcode-profile",
    title: "🧩 LeetCode Competitive Coding",
    description: "Algorithmic Problem Solving & Data Structures Profile",
    url: "https://leetcode.com/u/ujjwal92/",
    icon: "Code2",
    badge: "Algorithms"
  },
  {
    id: "github-profile",
    title: "💻 GitHub (@ujjwal-void)",
    description: "Check out repositories, codebases & open-source projects",
    url: "https://github.com/ujjwal-void",
    icon: "Github",
    badge: "Code"
  },
  {
    id: "linkedin-profile",
    title: "👔 LinkedIn Profile",
    description: "Connect with me on LinkedIn (Software Development Engineer)",
    url: "https://www.linkedin.com/in/ujjwal-ujjwal-dev/",
    icon: "Linkedin",
    badge: "Network"
  }
];

export const MEDIA_DATA = [
  // BOOKS SECTION
  {
    id: "i-hear-you",
    type: "book",
    title: "I Hear You",
    creator: "Michael S. Sorensen",
    year: "2017",
    rating: "9.5 / 10",
    recommendation: "Must Read (Essential Communication)",
    image: "./media/i-hear-you.png",
    review: "A masterclass in active validation. It breaks down how validating human emotions—rather than immediately jumping to fix or debug symptoms—radically improves interpersonal dynamics and engineering leadership."
  },
  {
    id: "metamorphosis",
    type: "book",
    title: "Metamorphosis",
    creator: "Franz Kafka",
    year: "1915",
    rating: "9.8 / 10",
    recommendation: "Must Read (Existential Masterpiece)",
    image: "./media/metamorphosis.jpg",
    review: "Kafka’s stark exploration of alienating routine and utility-driven human relationships. Gregor Samsa's transformation exposes how rapidly societal value fades when an individual can no longer contribute to economic output."
  },
  {
    id: "dorian-gray",
    type: "book",
    title: "The Picture of Dorian Gray",
    creator: "Oscar Wilde",
    year: "1890",
    rating: "9.7 / 10",
    recommendation: "Must Read (Classic Literature)",
    image: "./media/dorian-gray.jpg",
    review: "Wilde's brilliant philosophical examination of hedonism, aesthetics, and moral decay. The hidden portrait acting as a mirror for consequence is a timeless allegory for unseen system debt accumulated beneath a flawless surface."
  },
  {
    id: "rosie-project",
    type: "book",
    title: "The Rosie Project",
    creator: "Graeme Simsion",
    year: "2013",
    rating: "9.2 / 10",
    recommendation: "Highly Recommended (Witty & Heartfelt)",
    image: "./media/rosie-project.jpg",
    review: "A hilarious and clever perspective on applying rigid algorithmic heuristics and deterministic questionnaires to human relationships. Shows how life's best breakthroughs often emerge outside deterministic logic."
  },

  // MOVIES SECTION
  {
    id: "kishkindha-kaandam",
    type: "movie",
    title: "Kishkindha Kaandam",
    creator: "Dinjith Ayyathan / Asif Ali",
    year: "2024",
    rating: "9.6 / 10",
    recommendation: "Must Watch (Mind-Bending Mystery)",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
    review: "An extraordinary Malayalam mystery thriller that uses memory degradation and monkey-infested forests as an intricate puzzle box. The gradual unspooling of clues without cheap jump scares is storytelling at its finest."
  },

  // ANIME SECTION
  {
    id: "another",
    type: "anime",
    title: "Another",
    creator: "Yukito Ayatsuji / P.A. Works",
    year: "2012",
    rating: "9.2 / 10",
    recommendation: "Highly Recommended (Atmospheric Horror)",
    image: "./media/another-anime.png",
    review: "Chilling, atmospheric horror surrounding Class 3-3's curse. The eerie tension, systemic paranoia, and methodical search for the 'extra dead person' keep you guessing until the final episode."
  }
];

export const TECH_ESSAYS = [
  {
    id: "intuitive-rag-architecture",
    title: "Understanding Hybrid RAG: Keyword Layers, Vector Embeddings & Self-Correction",
    category: "AI Engineering",
    readTime: "8 min read",
    date: "Aug 2026",
    videoUrl: "https://www.youtube.com/embed/XvKiTfd6Xvo",
    excerpt: "Drawing from my work at CyberPoint building hybrid RAG search engines: why a deterministic keyword-trigger layer paired with FAISS vector search guarantees 100% database accuracy before falling back to LLM semantic search.",
    codeSnippet: `// Hybrid RAG Search Pipeline (Deterministic + Semantic)
async function queryHybridRAG(userQuery) {
  // Step 1: Deterministic Keyword Trigger Layer
  const exactMatch = await database.keywordSearch(userQuery);
  if (exactMatch && exactMatch.confidence === 1.0) {
    return { source: 'database_exact', data: exactMatch };
  }

  // Step 2: Vector Semantic Search with FAISS
  const vector = await generateEmbedding(userQuery);
  const semanticDocs = await faissIndex.search(vector, { topK: 5 });

  // Step 3: Hallucination & Confidence Grading
  const relevance = await evaluateRelevance(userQuery, semanticDocs);
  if (relevance.score < 0.7) {
    const webFallback = await webSearch(userQuery);
    return synthesizeAnswer(userQuery, [...semanticDocs, ...webFallback]);
  }

  return synthesizeAnswer(userQuery, semanticDocs);
}`,
    keyTakeaways: [
      "Deterministic keyword layers eliminate unnecessary LLM calls for structured DB data",
      "FAISS + Elasticsearch hybrid retrieval improved document accuracy by 40%",
      "Redis task queues keep long LLM generation non-blocking for background async tasks"
    ]
  }
];

export const SPORTS_TAKES = [
  {
    id: "champions-league-tactics-2026",
    sport: "Football",
    title: "Fluid Positional Rotations & Dual Pivot Overloads",
    date: "Aug 04, 2026",
    hypeScore: 94,
    opinion: "Modern football tactics are moving away from rigid wing positions toward fluid central rotations. When fullbacks tuck inside as central pivots under pressure, it creates numerical overloads that static 4-3-3 setups struggle to contain.",
    keyTakeaway: "Fluid spatial recognition beats static structure—a principle that applies equally to dynamic routing in distributed software systems."
  },
  {
    id: "f1-regulations-hype",
    sport: "Formula 1",
    title: "Telemetry Optimization Under Active Aero Regulations",
    date: "Jul 28, 2026",
    hypeScore: 91,
    opinion: "Active aerodynamics and energy harvesting splits force drivers to manage battery deployment continuously on straights. Success is as much about real-time telemetry optimization as apex speed.",
    keyTakeaway: "Managing finite system resources under tight constraints requires continuous monitoring and micro-adjustments."
  },
  {
    id: "nba-spacing-evolution",
    sport: "Basketball",
    title: "Five-Out Geometry & Offensive Gravity",
    date: "Jul 15, 2026",
    hypeScore: 88,
    opinion: "When centers can shoot and make quick high-IQ passes from the perimeter, it stretches defense geometry and opens up driving lanes.",
    keyTakeaway: "Every node in a system operates better when components are multi-functional threats."
  }
];
