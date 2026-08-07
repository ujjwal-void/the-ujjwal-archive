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
    title: "High-Dimensional Vector Geometry & Cosine Distance",
    category: "Linear Algebra & AI Math",
    date: "Aug 2026",
    formula: "cos(θ) = (A · B) / (||A|| ||B||) = Σ(A_i * B_i) / (sqrt(Σ A_i^2) * sqrt(Σ B_i^2))",
    summary: "Why angle-based cosine similarity outperforms Euclidean distance in high-dimensional embedding spaces, and how HNSW graph indexing turns exponential search into O(log N) lookup.",
    csConnection: "Direct mathematical foundation for vector search databases (FAISS, Qdrant, ChromaDB) used in LLM Retrieval-Augmented Generation.",
    keyTakeaway: "In 1536-dimensional OpenAI vector space, magnitude matters less than directional alignment—making dot products on normalized vectors equivalent to cosine similarity."
  },
  {
    id: "general-relativity-dilation",
    title: "Schwarzschild Metric & Gravitational Time Dilation",
    category: "Astrophysics & Relativity",
    date: "Jul 2026",
    formula: "dτ^2 = (1 - 2GM / r c^2) dt^2 - (1 - 2GM / r c^2)^(-1) dr^2 - r^2 dΩ^2",
    summary: "Deriving time dilation near massive celestial bodies (like Miller's Planet near Gargantua in Interstellar). As radial distance r approaches the event horizon (r_s = 2GM/c^2), proper time dτ slows dramatically relative to distant observer coordinate time dt.",
    csConnection: "A physical reminder of non-linear state progression and distributed clock synchronization challenges in global computer networks.",
    keyTakeaway: "1 hour on Miller's planet = 7 years Earth time. In system design, latency bottlenecks compound exponentially when processing queues stall near saturation."
  },
  {
    id: "shannon-entropy-information",
    title: "Shannon Information Entropy & Cross-Entropy Loss",
    category: "Information Theory & ML",
    date: "Jun 2026",
    formula: "H(X) = - Σ P(x_i) log2 P(x_i)  |  L_CE = - Σ y_i log(p_i)",
    summary: "Measuring uncertainty and information content in probability distributions. How cross-entropy quantifies the difference between predicted token probability distributions p and true target labels y.",
    csConnection: "Core loss metric used in backpropagation to train Next-Token Prediction in Transformer Large Language Models (LLMs).",
    keyTakeaway: "Minimizing cross-entropy loss is mathematically equivalent to maximizing the likelihood of predicted text."
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
    title: "🧩 LeetCode (@ujjwal92)",
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
  {
    id: "steins-gate",
    type: "anime",
    title: "Steins;Gate",
    creator: "White Fox / Chiyomaru Shikura",
    year: "2011",
    relatabilityScore: 98,
    impactRating: "Essential",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    summary: "A self-proclaimed scientist accidentally discovers timeline manipulation, leading to a desperate attempt to undo unintended consequences across converging world lines.",
    personalImpact: "Steins;Gate shaped how I think about cause-and-effect in software architecture. Okabe's persistent iterations to find a viable path resonate with how complex engineering problems get solved.",
    spoilerContent: {
      hasSpoilers: true,
      twistSummary: "Okabe traverses Beta and Alpha world lines, ultimately deceiving his past self to reach the 'Steins Gate' line where both Kurisu and Mayuri survive.",
      keyThemes: ["Timeline Divergence", "Consequence", "Determinism vs Choice"],
      aiOpinion: "Episode 22 & 23 demonstrate masterclass narrative structure—deceiving past observations to change the future without altering established history."
    }
  },
  {
    id: "interstellar",
    type: "movie",
    title: "Interstellar",
    creator: "Christopher Nolan",
    year: "2014",
    relatabilityScore: 95,
    impactRating: "Favorite",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    summary: "Faced with global crop blight, a team of pilots travels through a wormhole near Saturn to find a habitational alternative for humanity.",
    personalImpact: "The depiction of gravitational time dilation on Miller's Planet is a striking reminder of time's non-linear value. It inspires a thoughtful approach to both life priorities and async programming.",
    spoilerContent: {
      hasSpoilers: true,
      twistSummary: "Cooper enters the 5-dimensional Tesseract inside Gargantua, using gravity to send quantum data back to Murph in Morse code on her childhood watch.",
      keyThemes: ["Time Dilation", "Devotion", "Relativity"],
      aiOpinion: "A visually and musically grounded story about human connection transcending physical constraints."
    }
  },
  {
    id: "atomic-habits",
    type: "book",
    title: "Atomic Habits",
    creator: "James Clear",
    year: "2018",
    relatabilityScore: 99,
    impactRating: "Practical",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    summary: "A practical framework for small, 1% daily improvements, identity-driven habits, and thoughtful environment design.",
    personalImpact: "Shifted my approach from trying to master an entire stack in a weekend to small, consistent daily engineering habits that compound over time.",
    spoilerContent: {
      hasSpoilers: false,
      twistSummary: "Key takeaway: Focus on system architecture rather than arbitrary end targets.",
      keyThemes: ["Compounding", "Systems vs Goals", "Environment Design"],
      aiOpinion: "Clear's framework maps naturally to code refactoring: make good patterns easy and friction-free."
    }
  },
  {
    id: "attack-on-titan",
    type: "anime",
    title: "Attack on Titan",
    creator: "Hajime Isayama",
    year: "2013-2023",
    relatabilityScore: 96,
    impactRating: "Masterpiece",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    summary: "Humanity lives inside walled cities to stay safe from Titans, until a breach exposes centuries of hidden world history.",
    personalImpact: "Isayama's narrative demonstrates how perspective shifts when context is revealed. A reminder that in software debugging, behavior makes sense once environment history is understood.",
    spoilerContent: {
      hasSpoilers: true,
      twistSummary: "The Titans are Eldians, and Paradise Island is an isolated fragment of a technologically advanced world beyond the walls.",
      keyThemes: ["Perspective", "Cycle of Conflict", "Freedom"],
      aiOpinion: "An incredible study in long-term structural planning and narrative foreshadowing."
    }
  }
];

export const TECH_ESSAYS = [
  {
    id: "intuitive-rag-architecture",
    title: "Understanding Hybrid RAG: Keyword Layers, Vector Embeddings & Self-Correction",
    category: "AI Engineering",
    readTime: "8 min read",
    date: "Aug 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
  },
  {
    id: "event-driven-microservices",
    title: "Slashing P99 Latency from 700ms to <150ms with RabbitMQ & Redis",
    category: "Backend Systems",
    readTime: "6 min read",
    date: "Jul 2026",
    videoUrl: null,
    excerpt: "How migrating our Profile Ranking service to an event-driven queue with RabbitMQ and Redis multi-layer caching handled massive traffic spikes smoothly.",
    codeSnippet: `// Event-Driven RabbitMQ Publisher Pattern
async function publishProfileRankingEvent(userId, scorePayload) {
  const channel = await getRabbitMQChannel();
  const queue = 'profile_ranking_queue';
  
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify({ userId, scorePayload, timestamp: Date.now() })), {
    persistent: true
  });
}`,
    keyTakeaways: [
      "Decoupled synchronous web requests from heavy calculation pipelines using RabbitMQ queues",
      "Redis multi-layer caching with prefetch pipelines prevented database connection pool exhaustion",
      "Schema redesign + indexing dropped query times by over 78%"
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
