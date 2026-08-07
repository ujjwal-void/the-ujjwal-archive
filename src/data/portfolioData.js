// Core Dataset for Ujjwal's Personal Digital Garden & Notes

export const PROFILE_DATA = {
  name: "Ujjwal",
  title: "Software Engineer & Educator",
  tagline: "Building software, breaking down AI concepts, and sharing thoughts on cinema, literature, and sports.",
  location: "Global / Remote",
  status: "Working on Adaptive RAG & AI Systems",
  bio: "Software engineer and teacher driven by curiosity. I spend my time building retrieval systems, dissecting story structures in anime and films, writing visual tutorials for students, and following tactical strategy in sports.",
  socials: [
    { name: "GitHub", url: "https://github.com/ujjwal-void", icon: "Github", label: "Repositories" },
    { name: "Twitter / X", url: "https://twitter.com", icon: "Twitter", label: "Thoughts" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin", label: "Professional" },
    { name: "YouTube", url: "https://youtube.com", icon: "Youtube", label: "Tutorials" }
  ]
};

export const LINKTREE_LINKS = [
  {
    id: "portfolio-main",
    title: "⚡ Digital Garden & Notes",
    description: "Projects, media reviews, teaching articles & sports notes",
    url: "#home",
    icon: "Sparkles",
    badge: "Main",
    highlight: true
  },
  {
    id: "adaptive-rag",
    title: "🧠 Adaptive RAG Search System",
    description: "Self-correcting retrieval augmented generation engine",
    url: "#projects",
    icon: "Cpu",
    badge: "Project"
  },
  {
    id: "teaching-blog",
    title: "📚 Teaching & Tech Articles",
    description: "Breaking down complex CS & AI concepts step-by-step",
    url: "#teaching",
    icon: "BookOpen",
    badge: "Writing"
  },
  {
    id: "media-vault",
    title: "🍿 Media Notes: Anime, Movies & Books",
    description: "Personal reflections with spoiler toggles",
    url: "#media",
    icon: "Film",
    badge: "Curated"
  },
  {
    id: "sports-feed",
    title: "⚽ Sports Commentary & Tactics",
    description: "Tactical analysis on football, F1 & basketball",
    url: "#sports",
    icon: "Trophy",
    badge: "Notes"
  },
  {
    id: "ai-twin",
    title: "🤖 Ask My AI Assistant",
    description: "Inquire about my code, reading list, or recommendations",
    url: "#ai-twin",
    icon: "Bot",
    badge: "Interactive"
  }
];

export const PROJECTS_DATA = [
  {
    id: "adaptive-rag-search",
    title: "Adaptive RAG Search System",
    category: "AI & Graph RAG",
    tagline: "Self-correcting retrieval pipeline with dynamic routing.",
    description: "A retrieval-augmented generation engine that evaluates retrieval confidence in real time, rewrites ambiguous queries, and falls back to targeted web searches when local knowledge is insufficient.",
    tags: ["Python", "LangChain", "Qdrant", "MongoDB", "FastAPI"],
    githubUrl: "https://github.com/ujjwal-void",
    demoUrl: "#",
    metrics: { accuracy: "94.2%", latency: "180ms" },
    keyFeatures: [
      "Dynamic Router & Query Rewriter",
      "Vector + Graph hybrid retrieval",
      "Hallucination grading & automatic self-correction",
      "REST API & interactive UI"
    ]
  },
  {
    id: "ai-spoiler-shield",
    title: "Contextual Spoiler Shield",
    category: "NLP & Front-End UI",
    tagline: "Client-side narrative twist masking for reviews.",
    description: "An interface pattern that parses review text for plot climaxes and key narrative turns, blurring sensitive sections until un-redacted by the reader.",
    tags: ["JavaScript", "React", "Transformers.js", "CSS"],
    githubUrl: "https://github.com/ujjwal-void",
    demoUrl: "#",
    metrics: { latency: "<10ms" },
    keyFeatures: [
      "Tiered spoiler blur (Mild / Deep)",
      "Client-side text parsing",
      "Interactive click-to-reveal toggle"
    ]
  },
  {
    id: "sports-hype-pulse",
    title: "Sports Tactical Pulse",
    category: "Data Analytics",
    tagline: "Real-time match sentiment & tactical momentum dashboard.",
    description: "Aggregates live match statistics, tactical metrics, and fan sentiment to visualize pressure swings during major sporting events.",
    tags: ["TypeScript", "React", "Next.js", "D3.js", "WebSockets"],
    githubUrl: "https://github.com/ujjwal-void",
    demoUrl: "#",
    metrics: { interval: "500ms" },
    keyFeatures: [
      "Live momentum & pressure graphs",
      "Tactical positioning heatmaps",
      "Match timeline commentary"
    ]
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

export const TEACHING_BLOGS = [
  {
    id: "intuitive-rag-architecture",
    title: "How I Teach RAG: Building Intuition Before Writing Code",
    category: "AI Engineering",
    readTime: "8 min read",
    date: "Aug 2026",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    excerpt: "Explaining vector embeddings using physical room spatial maps helps students grasp semantic search instantly, without drowning in matrix formulas.",
    codeSnippet: `// Intuitive RAG Retrieval & Evaluation Flow
async function queryAdaptiveRAG(userQuery) {
  const embedding = await generateVector(userQuery);
  const documents = await vectorDb.similaritySearch(embedding, { topK: 5 });
  
  const relevance = await evaluateRelevance(userQuery, documents);
  if (relevance.score < 0.7) {
    // Dynamic Fallback
    const webResults = await webSearchFallback(userQuery);
    return synthesizeAnswer(userQuery, [...documents, ...webResults]);
  }
  
  return synthesizeAnswer(userQuery, documents);
}`,
    teachingMethodology: [
      "Start with physical analogies before code",
      "Demystify framework black-boxes step-by-step",
      "Analyze why systems fail before writing solutions",
      "Build a minimalist 20-line baseline first"
    ]
  },
  {
    id: "for-the-love-of-the-game",
    title: "Craftsmanship in Software: Understanding Fundamentals",
    category: "Engineering Philosophy",
    readTime: "6 min read",
    date: "Jul 2026",
    videoUrl: null,
    excerpt: "Tools and frameworks change constantly, but building lasting confidence comes from understanding fundamental mechanisms under the hood.",
    codeSnippet: `// Continuous Learning Loop
while (engineering) {
  understandCoreMechanisms();
  writeCleanCode();
  refactorWithCare();
}`,
    teachingMethodology: [
      "Prioritize understanding 'Why' over just 'How'",
      "Build small toy implementations to understand core concepts",
      "Value clean structure and readability"
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
