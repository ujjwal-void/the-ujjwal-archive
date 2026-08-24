// Core Dataset for Ujjwal's Portfolio & Engineering Showcase
// Grounded 100% in Ujjwal's Official Resume

export const PROFILE_DATA = {
  name: "Ujjwal Ujjwal",
  title: "Software Development Engineer",
  tagline: "Software Engineer at ZFunds & former Founding Engineer at Advor.ai. Experienced across Python, TypeScript, JavaScript, NodeJS, FastAPI, Flask, React, React Native, Express, AWS, Redis, RabbitMQ & AI Pipelines.",
  email: "ujjwal.02023@gmail.com",
  phone: "+91 7380679251",
  location: "Gurugram, India",
  leetcode: "https://leetcode.com/u/ujjwal92/",
  status: "SDE @ ZFunds (AI & Backend)",
  bio: "Software Development Engineer at ZFunds contributing across backend, frontend, AI pipelines, and financial workflows for ZIVA V2. Former Founding Engineer at Advor.ai, where I scaled event-driven microservices to <150ms P99 latency with RabbitMQ and built hybrid RAG search engines.",
  education: {
    degree: "B.Tech in Computer Science Engineering (AI & ML Specialization)",
    institution: "Vellore Institute of Technology, Vellore",
    period: "2021 - 2025",
    gpa: "7.23 / 10.0",
    schooling: "Intermediate (Class XII) - ISC Board, Lucknow Public College (83.25%)"
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
    techStack: ["Python", "TypeScript", "JavaScript", "NodeJS", "FastAPI", "Flask", "React", "React Native", "Express", "AWS"],
    highlights: [
      "Core engineer for ZIVA V2, India’s First WealthTech AI platform, contributing across backend, frontend, AI pipelines, and financial workflows for production-grade wealth management experiences.",
      "Architected and integrated the end-to-end Portfolio Analysis module across web, mobile, and backend APIs; refactored API and data-processing workflows to reduce response time from 40+ seconds to ~900ms, achieving a 97%+ latency reduction.",
      "Engineered ZIVA V2’s Goal Proposal, Personalized Fund Proposal, and Fund Recommendation workflows, integrating recommended ZFunds with structured AI-generated investment proposals and personalized financial journeys.",
      "Designed production-grade AI guardrails and artifact pipelines to constrain model behavior, mitigate prompt injection risks, improve response reliability, and support structured financial outputs including dynamic table rendering.",
      "Built the paperless FastTrack KYC in ZIVA and e-Mandate/AutoPay workflows, integrating digital onboarding, verification, recurring investment mandates, and automated fund collection into the investment journey.",
      "Engineered automated Email, RCS, and WhatsApp advisor onboarding, orchestrating a 7-step communication journey over 11 days for fund advisor activation.",
      "Developed the GIFT City platform across backend, web, and mobile, implementing database-controlled configurations and dynamic integrations that enabled multiple offerings such as SIF GIFT through a single deployment.",
      "Refactored fund-data ingestion and migration from static JSON-driven reads to database-backed workflows, enabling dynamic fund updates without code-level changes; also delivered the ZFunds Elite backend and production database migration.",
      "Delivered additional production features including ZLearn Resources, expert-to-expert cart/transaction flows, and a dynamic Advisor Visiting Card system with automated profile and address rendering."
    ]
  },
  {
    id: "cyberpoint",
    company: "CyberPoint Private Limited (Advor.ai)",
    role: "Software Developer (Founding Engineer)",
    period: "Jan 2025 – April 2026",
    location: "Gurugram, India",
    techStack: ["Python", "TypeScript", "JavaScript", "FastAPI", "Nest.js", "Express", "NodeJS", "React.js"],
    highlights: [
      "Scaled the backend to handle peak traffic surges by implementing Redis clustering and multi-layer caching; utilized prefetch pipelines to maintain high availability during high-concurrency events.",
      "Migrated the Profile Ranking service to an event-driven architecture using RabbitMQ; combined with a schema redesign, this slashed P99 response times from 700ms to less than 150ms.",
      "Engineered a hybrid RAG pipeline with a deterministic keyword-trigger layer to pull 100% accurate data from the DB before falling back to LLM semantic search.",
      "Built an automated technical screening engine and an asynchronous bio-generator using LangChain and Redis task queues to process slow LLM API calls without blocking the main request thread.",
      "Built RAG-based AI search engine using Llama, FAISS, and Elasticsearch, improving document retrieval accuracy by 40%.",
      "Architected and deployed core platform microservices (Profile Ranking, Rating, Feeds) from scratch, ensuring modularity and scalability.",
      "Implemented zero-downtime deployments on AWS (EC2, S3) using Coolify and established system observability with Grafana, Prometheus, and Sentry for real-time monitoring and incident tracking."
    ]
  },
  {
    id: "drdo",
    company: "Defence Research and Development Organisation (DRDO)",
    role: "DevOps and Networking Intern",
    period: "June 2024 – July 2024",
    location: "Hyderabad, India",
    techStack: ["Python", "Flask", "Docker", "Kubernetes", "Cyber Security"],
    highlights: [
      "Developed real-time LAN monitoring tool using Flask with responsive frontend for bandwidth tracking, device discovery, and network activity analysis.",
      "Integrated packet sniffing capabilities for traffic inspection.",
      "Containerized services with Docker and deployed via Kubernetes, integrating secure CI/CD pipelines and IP-restricted admin dashboards for internal network observability."
    ]
  },
  {
    id: "iamneo",
    company: "Iamneo",
    role: "Java Fullstack Intern",
    period: "Aug 2023 – Dec 2023",
    location: "Remote",
    techStack: ["Java", "Springboot", "React.js", "JUnit", "Kafka", "SonarQube"],
    highlights: [
      "Built and documented RESTful endpoints using Spring Boot for the platform’s core content module; implemented custom DTOs and Input Validation logic.",
      "Integrated SonarQube into the CI pipeline to automate the detection of security vulnerabilities.",
      "Built a React administrative dashboard for the editorial team to handle bulk CRUD operations, eliminating the need for manual SQL updates in production.",
      "Assisted in configuring Kafka consumer groups to handle background data synchronization, ensuring the frontend stayed responsive during heavy write operations."
    ]
  }
];

export const ACHIEVEMENTS = [
  {
    id: "osmos-hackathon",
    title: "1st Runner-Up, Osmos Hackathon by OnlineSales.ai",
    award: "1st Runner-Up among 131 teams",
    prize: "Prize: INR 30,000",
    description: "Built AdCraft, an AI-powered advertisement generation platform. Led team of 4 through 3 elimination rounds emphasizing user-centric design and AI collaboration.",
    demoLink: "#"
  },
  {
    id: "cryptoguard-hackathon",
    title: "Finalist, CryptoGuard Hackathon at VIT Vellore",
    award: "Hackathon Finalist",
    description: "Developed identity verification tool using Face Detection and Web3 decentralized architecture for secure credential storage, collaborating with team of 3 to implement blockchain-based digital asset protection."
  }
];

export const TECHNICAL_SKILLS = {
  languages: ["Python", "JavaScript", "TypeScript", "Java"],
  frontend: ["Next.js", "React.js", "React Native", "Redux Toolkit", "Tailwind CSS"],
  backend: ["FastAPI", "Node.js", "Express.js", "Flask", "WebSocket", "RESTful APIs", "Microservices"],
  ai_llm: ["LangChain", "LlamaIndex", "ChromaDB", "Embeddings", "Retrieval-Augmented Generation (RAG) Pipelines", "Hugging Face Transformers", "Prompt Engineering"],
  ml_dl: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV", "CNNs", "NLP"],
  databases: ["MongoDB", "MySQL", "Redis (Clustering/Caching)", "PostgreSQL"],
  devops_cloud: ["AWS (EC2, S3, Lambda, RDS, DynamoDB, CloudWatch)", "Docker", "Kubernetes", "CI/CD"],
  messaging_observability: ["Kafka", "RabbitMQ", "Sentry", "Grafana", "Prometheus"]
};

export const PHYSICS_MATH_NOTES = [
  {
    id: "vector-spaces-geometry",
    title: "High-Dimensional Vector Geometry & Cosine Similarity",
    category: "Linear Algebra & Vectors",
    date: "Aug 2026",
    videoUrl: "https://www.youtube.com/embed/FGBgZAJL-mM",
    formula: "cos(θ) = (u · v) / (||u|| ||v||) = Σ(u_i * v_i) / (sqrt(Σ u_i^2) * sqrt(Σ v_i^2))",
    summary: "Mathematical mechanics of high-dimensional vector spaces, dot products, and spatial projections in embedding space.",
    csConnection: "Direct foundation for vector databases (Qdrant, FAISS, ChromaDB) used in similarity search and Retrieval-Augmented Generation (RAG).",
    keyTakeaway: "On unit-normalized embedding vectors, Euclidean distance and Cosine similarity yield identical top-k rankings, enabling optimized dot product matrix search."
  },
  {
    id: "activation-functions-gelu-relu",
    title: "Neural Network Activation Functions (ReLU & GELU)",
    category: "Neural Network Math",
    date: "Jul 2026",
    videoUrl: null,
    formula: "ReLU(x) = max(0, x)  |  GELU(x) = x * Φ(x) ≈ 0.5x * (1 + tanh(sqrt(2/π) * (x + 0.044715 x^3)))",
    summary: "Role of non-linear activation functions in neural networks and mathematical derivation of GELU used in Transformer models.",
    csConnection: "Activation functions introduce non-linearity, enabling deep neural networks to approximate complex continuous functions.",
    keyTakeaway: "GELU scales inputs by their percentile in a Gaussian distribution, preventing gradient vanishing issues during backpropagation."
  },
  {
    id: "activation-softmax-cross-entropy",
    title: "Softmax Probability Normalization & Cross-Entropy Loss",
    category: "Optimization & Loss Math",
    date: "Jun 2026",
    videoUrl: null,
    formula: "Softmax(z_i) = e^(z_i) / Σ e^(z_j)  |  L_CE = - Σ y_i log(Softmax(z_i))",
    summary: "Converting unnormalized logit outputs into probability distributions and calculating loss gradients for backpropagation.",
    csConnection: "Standard classification and next-token prediction output layer in PyTorch and Transformer implementations.",
    keyTakeaway: "Max-subtraction normalization (Softmax numerical stability trick) prevents floating-point overflow during CUDA GPU operations."
  }
];

export const PROJECTS_DATA = [
  {
    id: "ziva-v2-wealthtech",
    title: "ZIVA V2 — Wealth Management AI Platform",
    category: "AI & Distributed Backend",
    companyTag: "ZFunds",
    tagline: "Portfolio analysis engine, fund recommendation algorithms, and guardrailed AI pipelines.",
    description: "Core backend engineer on ZIVA V2. Built the Portfolio Analysis service across FastAPI microservices, implemented goal/fund recommendation algorithms, and integrated response guardrails.",
    tags: ["Python", "FastAPI", "TypeScript", "Node.js", "AWS", "AI Guardrails"],
    githubUrl: null,
    demoUrl: null,
    metrics: { deployment: "Production System", domain: "FinTech / Wealth Management" },
    keyFeatures: [
      "Portfolio Analysis & Fund Recommendation services",
      "Goal Proposal algorithms and multi-turn state management",
      "Context-aware session continuity across dynamic conversations",
      "Structured output validation and prompt guardrails"
    ]
  },
  {
    id: "advor-hybrid-rag",
    title: "Advor.ai — Event-Driven Microservices & Hybrid RAG Engine",
    category: "Distributed Backend & AI",
    companyTag: "CyberPoint / Advor.ai",
    tagline: "High-concurrency backend with RabbitMQ, Redis clustering, and FAISS vector retrieval.",
    description: "Architected microservices handling high traffic throughput. Reduced P99 response latency from 700ms to <150ms using RabbitMQ and Redis caching, and built a hybrid RAG pipeline combining structured DB queries with vector retrieval.",
    tags: ["Python", "FastAPI", "Nest.js", "RabbitMQ", "Kafka", "Redis", "FAISS", "LangChain"],
    githubUrl: null,
    demoUrl: "https://advor.ai/",
    metrics: { latency: "<150ms P99", throughput: "Event-Driven Queue" },
    keyFeatures: [
      "Event-driven microservices architecture using RabbitMQ",
      "Hybrid DB query + FAISS vector search retrieval pipeline",
      "Asynchronous processing pipeline with Redis queues and LangChain",
      "Production AWS deployment with Prometheus & Grafana monitoring"
    ]
  },
  {
    id: "adaptive-rag-search",
    title: "Adaptive RAG Search — Agentic AI Engine",
    category: "Agentic AI & Vector Search",
    companyTag: "Open Source Project",
    tagline: "Agentic search engine built with LangGraph, LangChain, Qdrant, and FastAPI.",
    description: "End-to-end agentic AI search system featuring dynamic query routing, ReAct vector/keyword retrieval, automated hallucination verification, and a Streamlit analytics dashboard.",
    tags: ["Python", "LangGraph", "LangChain", "FastAPI", "Qdrant", "Streamlit"],
    githubUrl: "https://github.com/ujjwal-void/adaptive-rag-search",
    demoUrl: null,
    metrics: { framework: "LangGraph / ReAct", vectorDB: "Qdrant" },
    keyFeatures: [
      "Dynamic query classification & routing graph built with LangGraph",
      "Hybrid Qdrant vector retrieval with web search fallback",
      "Automated answer verification and hallucination grading loop",
      "Real-time analytics & pipeline monitoring dashboard"
    ]
  },
  {
    id: "nexus-pm",
    title: "Nexus PM — Project Management Backend Service",
    category: "Backend Microservices",
    companyTag: "Open Source Project",
    tagline: "RESTful API service with 30+ endpoints and Role-Based Access Control (RBAC).",
    description: "Backend REST API service built with Node.js and Express, supporting multi-tier RBAC authentication, hierarchical task structures, and file attachment handling.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
    githubUrl: "https://github.com/ujjwal-void/Nexus-PM",
    demoUrl: null,
    metrics: { endpoints: "30+ REST APIs", security: "JWT & RBAC" },
    keyFeatures: [
      "Role-Based Access Control (Admin, Manager, Member)",
      "Hierarchical task management with subtasks & attachments",
      "JWT authentication with email verification flows"
    ]
  },
  {
    id: "write-medium",
    title: "Write Medium — Full-Stack Publishing Platform",
    category: "Full-Stack Web System",
    companyTag: "Open Source Project",
    tagline: "Full-stack publishing application with optimized database queries and search.",
    description: "Full-stack web application featuring JWT authentication, MongoDB indexing for fast article querying, and responsive UI interfaces.",
    tags: ["React.js", "Express.js", "MongoDB", "JWT", "Node.js"],
    githubUrl: "https://github.com/ujjwal-void/Write-Medium",
    demoUrl: null,
    metrics: { stack: "MERN Stack", database: "Indexed MongoDB" },
    keyFeatures: [
      "JWT user authentication and publishing dashboard",
      "Optimized database indexing for article search",
      "RESTful API architecture with React frontend"
    ]
  },
  {
    id: "adcraft-ai",
    title: "AdCraft — AI Creative Generation Platform",
    category: "AI Systems",
    companyTag: "Osmos Hackathon 1st Runner-Up",
    tagline: "AI ad generation application. 1st Runner-Up out of 131 teams (Prize: INR 30k).",
    description: "Built an AI-assisted advertisement generation system. Awarded 1st Runner-Up at the Osmos Hackathon by OnlineSales.ai.",

    tags: ["Python", "AI/LLM", "React.js", "FastAPI"],
    githubUrl: null,
    demoUrl: "https://drive.google.com/file/d/1K3kRSGO3IraRCINaCPoCrAEGKnChIzjd/view",
    demoLabel: "Demo Video",
    metrics: { award: "1st Runner-Up / 131 Teams", prize: "INR 30,000" },
    keyFeatures: [
      "AI creative generation pipeline",
      "Collaborative human-AI iteration workflow",
      "Award-winning hackathon architecture"
    ]
  },
  {
    id: "drdo-lan-monitor",
    title: "Network Monitoring — Real-Time LAN & Packet Inspection Tool",
    category: "DevOps & Cybersecurity",
    companyTag: "DRDO Internship",
    tagline: "Real-time network bandwidth tracking, device discovery, & packet sniffing.",
    description: "Flask network observability application built during DRDO internship featuring packet sniffing, device discovery, bandwidth monitoring, Docker containerization, and Kubernetes IP-restricted dashboards.",
    tags: ["Python", "Flask", "Docker", "Kubernetes", "Packet Sniffing", "Cyber Security"],
    githubUrl: "https://github.com/ujjwal-void/Network-Monitoring",
    demoUrl: null,
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
    title: "Ujjwal's Main Archive",
    description: "Work Experience, Real Projects, Physics/Math & Screen & Spine Notes",
    url: "#home",
    icon: "Sparkles",
    badge: "Main",
    highlight: true
  },
  {
    id: "resume-pdf",
    title: "Official Resume & Work Experience",
    description: "View Software Engineer Experience at ZFunds, Advor.ai & DRDO",
    url: "#experience",
    icon: "FileText",
    badge: "Recruiter"
  },
  {
    id: "physics-math",
    title: "Physics & Mathematics Notes",
    description: "Vector spaces, general relativity metrics & Shannon entropy math",
    url: "#physics",
    icon: "Atom",
    badge: "Science"
  },
  {
    id: "leetcode-profile",
    title: "LeetCode Competitive Coding",
    description: "Algorithmic Problem Solving & Data Structures Profile",
    url: "https://leetcode.com/u/ujjwal92/",
    icon: "Code2",
    badge: "Algorithms"
  },
  {
    id: "github-profile",
    title: "GitHub (@ujjwal-void)",
    description: "Check out repositories, codebases & open-source projects",
    url: "https://github.com/ujjwal-void",
    icon: "Github",
    badge: "Code"
  },
  {
    id: "linkedin-profile",
    title: "LinkedIn Profile",
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
    image: "./media/i-hear-you.png",
    review: "Picked this up because I kept getting into silly arguments where people just wanted to vent and I kept trying to fix their problems.",
    characterArc: "Realizing my 'solver mode' was actually super annoying to people.",
    emotionalImpact: "Made me a much less argumentative listener.",
    detailedReview: `As an engineer, my instinct is always to debug. When someone came to me complaining about their day or a bad code review, I’d immediately lay out a 3-step action plan. And then I'd get genuinely confused when they seemed annoyed.

Sorensen’s argument is simple: when people are stressed, they don't want a lecture—they just want to know they aren't crazy for feeling the way they do. Saying 'Damn, that really sucks' is 100x more effective than giving unsolicited advice. I tried it at work during a tense sprint retrospective, and the change in room dynamics was immediate. It's a quick read, but the habit change is real.`
  },
  {
    id: "metamorphosis",
    type: "book",
    title: "Metamorphosis",
    creator: "Franz Kafka",
    image: "./media/metamorphosis.jpg",
    review: "Gregor Samsa wakes up as a giant beetle, and his first thought isn't terror—it's anxiety over missing his morning train.",
    characterArc: "Gregor giving his whole life for his family, only to be tossed out like trash the moment he stops earning.",
    emotionalImpact: "Deeply uncomfortable reality check.",
    detailedReview: `Kafka's novella opens with one of the most famous lines in literature, but the real nightmare starts after Gregor looks at his clock. He's been transformed into a hideous insect, yet he's panicking about his demanding boss showing up to fire him. He’d already internalized his worth as nothing more than a worker long before his body physically changed.

What makes Metamorphosis so painful to read is watching his family's affection erode. Gregor spent years working a soul-crushing job as a traveling salesman to pay off his father's debts and fund his sister’s violin lessons. But the moment he becomes an invalid who can't bring home money, the household turns cold. His father hurls apples at him—one lodges in his back and rots—and his beloved sister Grete eventually insists they must get rid of 'it'.

He dies alone in his dark room, still harboring quiet affection for the people who abandoned him. It's a brutal look at how quickly human warmth vanishes when utility stops, and it stays with you long after you put the book down.`
  },
  {
    id: "dorian-gray",
    type: "book",
    title: "The Picture of Dorian Gray",
    creator: "Oscar Wilde",
    image: "./media/dorian-gray.jpg",
    review: "A young man wishes his portrait would age while he stays young forever. Wilde turns that premise into pure dark academia gothic magic.",
    characterArc: "Dorian going from innocent golden boy to pure unhinged villain under Lord Henry's toxic influence.",
    emotionalImpact: "Creepy, stylish, and deeply memorable.",
    detailedReview: `Oscar Wilde’s writing in this novel is unmatched. Lord Henry Wotton is one of the most toxic, charismatic characters ever written—almost every sentence out of his mouth is a razor-sharp paradox about youth, art, and pleasure.

When Dorian makes his wish, he gains absolute physical immunity. He can indulge in every cruel act, ruin lives, and commit crimes, while remaining a pristine 20-year-old angelic figure in Victorian society. But hidden in his locked attic, the canvas painted by Basil Hallward morphs into a grotesque, bleeding demon reflecting his real soul. 

The tension of Dorian creeping up the stairs at night, unlocking the room, and pulling off the purple cloth just to stare in terror at his own rotting reflection is unmatched. Wilde creates a brilliant contrast between curated external elegance and internal corruption. The ending is sheer gothic perfection.`
  },
  {
    id: "rosie-project",
    type: "book",
    title: "The Rosie Project",
    creator: "Graeme Simsion",
    image: "./media/rosie-project.jpg",
    review: "Genetics professor Don Tillman decides to find a wife using a 16-page questionnaire. Then he meets Rosie.",
    characterArc: "Don Tillman abandoning his rigid 16-page survey for Rosie.",
    emotionalImpact: "Fun, easy entertainment.",
    detailedReview: `A fun, light-hearted rom-com read about Don Tillman, a hyper-logical academic who approaches dating like a data optimization problem. He creates 'The Wife Project'—a strict survey filtering out smokers, late-arrivers, and non-analytical thinkers.

Rosie Jarman enters his life needing help finding her biological father, and she violates every single rule on his list. Watching Don’s rigid routines get completely derailed as he tries to rationalize why he enjoys her chaotic company is genuinely funny. It’s an easy, comfort read for a flight or a quiet weekend.`
  },

  // MOVIES SECTION
  {
    id: "kishkindha-kaandam",
    type: "movie",
    title: "Kishkindha Kaandam",
    creator: "Dinjith Ayyathan / Asif Ali",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80",
    review: "Set in a dense forest reserve where monkeys roam and a licensed gun goes missing, surrounding an aging ex-military father with memory loss.",
    characterArc: "Appu silently carrying devastating grief every single day so his father's failing memory never has to relive the horror.",
    emotionalImpact: "Silent heartbreak. Left me sitting in tears as the credits rolled.",
    detailedReview: `Malayalam cinema has been on an incredible run, but Kishkindha Kaandam stands out for how quiet and emotionally heavy it is. Dinjith Ayyathan doesn't use loud background scores or jump scares to create tension; he lets the dense atmosphere of the forest reserve and the characters' eyes do all the work.

Asif Ali’s performance as Appu is brilliant because it's so understated. He plays a man carrying immense weight, but he never explodes or gives dramatic speeches. His father, played by Vijayaraghavan, is suffering from memory loss and keeps obsessing over a missing firearm. As Appu's new wife Aparna starts piecing together family secrets, you expect a standard detective plot—until the movie reveals what’s actually happening.

The climax shifts the film from a mystery into a tragic exploration of grief and sacrifice. Appu isn't keeping a secret for selfish reasons; he's enduring a crushing truth every single day to shield his father from a realization that would shatter his sanity. The final scenes left me sitting in complete silence. Masterpiece storytelling.`
  },

  // ANIME SECTION
  {
    id: "another",
    type: "anime",
    title: "Another",
    creator: "Yukito Ayatsuji / P.A. Works",
    image: "./media/another-anime.png",
    review: "Koichi transfers to Class 3-3, where an enigmatic girl with an eyepatch sits ignored by everyone, hiding a 26-year-old classroom curse.",
    characterArc: "Class 3-3 going completely nuts while terrible miscommunication keeps the plot dragging.",
    emotionalImpact: "Accidental comedy.",
    detailedReview: `The setup for Another is great. Yomiyama North Middle School has an eerie vibe, the sound design is creepy, and Mei Misaki's character design is iconic. For the first few episodes, the mystery of Class 3-3's 'non-existent person' rule keeps you hooked.

However, as the series progresses, the tone shifts from psychological horror into over-the-top splatter gore. The death scenes become laughably absurd—the infamous umbrella scene on the stairs is memorable for sheer shock value, but after a while, the show feels more like a Final Destination clone than an atmospheric thriller.

The characters make baffling decisions and refuse to communicate basic facts just to keep the plot moving. It's fun to watch for the chaos and the aesthetic, but as a horror mystery, it lands in the middle.`
  },
  {
    id: "obito-uchiha",
    type: "anime",
    title: "Obito Uchiha: The Broken Idealist",
    creator: "Masashi Kishimoto / Pierrot",
    image: "./media/obito-uchiha.jpg",
    review: "Obito and Naruto were two sides of the exact same coin. The only difference was that Naruto had people to pull him back from the dark, while Obito was left alone in the hell of losing Rin.",
    characterArc: "From a goofy, wide-eyed Konoha kid dreaming of becoming Hokage, to the masked ghost who decided reality itself was a mistake worth erasing, and finally finding his way back.",
    emotionalImpact: "Pure empathy and heartbreak. I could never hate Obito because every time I looked at him, I saw Naruto without a safety net.",
    detailedReview: `I’ve always had a massive soft corner for Obito Uchiha, because at his core, he is the single most tragic mirror Kishimoto ever created in Naruto. When you look at young Obito, you aren't looking at a cold Uchiha prodigy like Sasuke or Itachi—you're looking at Naruto. He was the loud, clumsy kid who was always late because he was helping elderly villagers, wearing orange goggles, desperately seeking validation, and declaring to anyone who would listen that he was going to become Hokage to prove he mattered. He loved Rin with the same pure, unrequited devotion that Naruto had for Sakura, and he felt constantly overshadowed by Kakashi’s effortless genius.

The tragic turn of his life wasn't just physical—it was psychological slaughter. When he pushed Kakashi out of the way of that falling boulder and gave his Sharingan as a final gift, Obito died a hero. But fate didn't let him rest. Madara didn't just rebuild his body; he orchestrated the absolute nightmare of Obito waking up just in time to watch Kakashi’s Chidori pierce through Rin’s chest. 

That single moment shattered Obito’s entire concept of existence. Awakening the Mangekyo Sharingan in a blood-soaked field, standing over Rin's body as blood rained from the sky, Obito didn't just grieve—he rejected reality itself. His famous line, "I'm in hell," wasn't edginess; it was a profound, soul-crushing realization.

What makes Obito's worldview so damn interesting is that he didn't become Tobi or "Madara" out of petty revenge against Konoha or hatred for Kakashi. He genuinely believed that the entire shinobi world was a fundamentally broken, irredeemable nightmare loop where children are forced to murder each other. In his eyes, the Infinite Tsukuyomi wasn't a weapon of conquest—it was an act of ultimate mercy. He wanted to cast a dream over the moon where nobody ever has to mourn, where Rin is alive, where Kakashi is happy, and where pain is erased forever.

When Naruto finally breaks Obito’s mask during the War Arc, it’s not just a physical unmasking—it’s a confrontation between who Naruto is and who Obito could have been if nobody had reached out to him. Watching Obito see his old self in Naruto, realizing that he had spent decades trying to convince himself that his past self was dead, broke me. When he finally uses his body to block Kaguya's All-Killing Ash Bones to save Kakashi and Naruto, saying "You'd better become Hokage," it completes one of the most heartbreaking, beautifully written redemption arcs in anime history. Obito wasn't a monster; he was a broken idealist who loved too deeply.`
  }
];

export const TECH_STORIES = [
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

export const TECH_ESSAYS = TECH_STORIES;
