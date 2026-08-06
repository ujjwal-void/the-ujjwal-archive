// Core Dataset for Ujjwal's React Personal OS & Digital Sanctuary

export const PROFILE_DATA = {
  name: "Ujjwal",
  title: "AI Craftsman • Tech Educator • Media & Sports Analyst",
  tagline: "Building intelligent systems & sharing the passion for tech, storytelling, and sports — purely for the love of the game.",
  location: "Global / Remote",
  status: "🟢 Architecting Adaptive RAG & AI Companions",
  bio: "Software engineer and educator driven by curiosity. I spend my time building AI agents, dissecting narrative masterpieces in anime/cinema/literature, writing about how to teach tech intuitively, and passionately debating sports hot takes.",
  socials: [
    { name: "GitHub", url: "https://github.com", icon: "Github", label: "Open Source Code" },
    { name: "Twitter / X", url: "https://twitter.com", icon: "Twitter", label: "Raw Takes & Threads" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin", label: "Professional Network" },
    { name: "YouTube", url: "https://youtube.com", icon: "Youtube", label: "Teaching & Code Walks" }
  ]
};

export const LINKTREE_LINKS = [
  {
    id: "portfolio-main",
    title: "⚡ Full Interactive Sanctuary & OS",
    description: "Explore projects, media essays, teaching blogs & sports feed",
    url: "#home",
    icon: "Sparkles",
    badge: "Featured",
    highlight: true
  },
  {
    id: "adaptive-rag",
    title: "🧠 Adaptive RAG Search System",
    description: "Self-correcting retrieval augmented generation engine",
    url: "#projects",
    icon: "Cpu",
    badge: "AI Architecture"
  },
  {
    id: "teaching-blog",
    title: "📚 How I Teach: Intuitive Tech Blogs",
    description: "Breaking down complex CS & AI concepts step-by-step",
    url: "#teaching",
    icon: "BookOpen",
    badge: "Articles"
  },
  {
    id: "media-vault",
    title: "🍿 Media Vault: Anime, Movies & Books",
    description: "Personal reviews + Spoiler Shield & Relatability Scores",
    url: "#media",
    icon: "Film",
    badge: "Curation"
  },
  {
    id: "sports-feed",
    title: "⚽ Sports News & Unfiltered Takes",
    description: "Tactical analysis, F1 telemetry & game reactions",
    url: "#sports",
    icon: "Trophy",
    badge: "Live Takes"
  },
  {
    id: "ai-twin",
    title: "🤖 Chat with My AI Digital Companion",
    description: "Ask my AI assistant about my code, recommendations & opinions",
    url: "#ai-twin",
    icon: "Bot",
    badge: "Interactive"
  }
];

export const PROJECTS_DATA = [
  {
    id: "adaptive-rag-search",
    title: "Adaptive RAG Search System",
    category: "AI Engineering & Graph RAG",
    tagline: "Dynamic self-correcting RAG pipeline using LangGraph & Qdrant.",
    description: "An advanced Retrieval-Augmented Generation system that dynamically evaluates retrieval precision, executes web search fallbacks when confidence is low, and maintains long-term conversational memory.",
    tags: ["Python", "LangChain", "Qdrant", "MongoDB", "FastAPI"],
    githubUrl: "https://github.com",
    demoUrl: "#",
    metrics: { accuracy: "94.2%", latency: "180ms", testCoverage: "98%" },
    keyFeatures: [
      "Dynamic Router & Query Rewriter",
      "Vector + Graph hybrid retrieval",
      "Hallucination grading & automatic self-correction",
      "Streamlit UI & REST API suite"
    ]
  },
  {
    id: "ai-spoiler-shield",
    title: "AI Narrative Spoiler Guard",
    category: "NLP & Front-End Security",
    tagline: "Intelligent contextual spoiler masking for media reviews.",
    description: "Real-time AI model interface that analyzes text sentiment and narrative climax points to shield readers from story twists based on their desired spoiler tolerance level.",
    tags: ["JavaScript", "React", "Transformers.js", "CSS Modules"],
    githubUrl: "https://github.com",
    demoUrl: "#",
    metrics: { precision: "99.1%", zeroServerLag: "Client-side" },
    keyFeatures: [
      "Multi-tiered spoiler blur (Mild / Moderate / Deep)",
      "Zero-latency client-side NLP execution",
      "Dynamic hover reveal with warning previews"
    ]
  },
  {
    id: "sports-hype-pulse",
    title: "Sports Hype Pulse & Tactical Analyzer",
    category: "Data Analytics & WebSockets",
    tagline: "Real-time sports sentiment aggregation & tactical commentary engine.",
    description: "Pulls live match statistics, fan sentiment feeds, and tactical metrics to produce instant visual breakdown dashboards for major sporting events.",
    tags: ["TypeScript", "React", "Next.js", "D3.js", "WebSockets"],
    githubUrl: "https://github.com",
    demoUrl: "#",
    metrics: { updateInterval: "500ms", activeUsers: "1,200+" },
    keyFeatures: [
      "Live momentum & pressure graphs",
      "Tactical heatmaps & player impact rating",
      "Interactive commentary timeline"
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
    impactRating: "Life Changing",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    summary: "A self-proclaimed mad scientist inadvertently discovers time travel via a modified microwave, triggering a perilous struggle against secret organizations and world timeline convergence.",
    personalImpact: "Steins;Gate profoundly shaped how I view perseverance, cause-and-effect in software architecture, and the emotional weight of choices. Okabe's relentless drive to save those he cares about resonates deeply with the spirit of never giving up on solving a complex problem.",
    spoilerContent: {
      hasSpoilers: true,
      twistSummary: "Okabe must traverse endless time loops in World Line Beta and Alpha, ultimately sacrificing Kurisu's initial timeline to reach the elusive 'Steins Gate' timeline where both Kurisu and Mayuri survive.",
      keyThemes: ["Timeline Divergence", "Sacrifice", "Determinism vs Free Will"],
      aiOpinion: "Ujjwal rates Episode 22 and Episode 23 as peak storytelling. The execution of deceiving one's past self to save the future is a masterclass in narrative engineering."
    }
  },
  {
    id: "interstellar",
    type: "movie",
    title: "Interstellar",
    creator: "Christopher Nolan",
    year: "2014",
    relatabilityScore: 95,
    impactRating: "Profound Inspiration",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    summary: "When Earth becomes uninhabitable, a team of ex-NASA astronauts travels through a wormhole near Saturn in search of a new home for humanity.",
    personalImpact: "Hans Zimmer's score paired with Nolan's depiction of time dilation on Miller's Planet reminds me of how precious time is. The idea that 'love is the one thing we're capable of perceiving that transcends dimensions of time and space' inspires both my creative work and code.",
    spoilerContent: {
      hasSpoilers: true,
      twistSummary: "Cooper drops into the Tesseract inside Gargantua, created by future 5th-dimensional humans, allowing him to manipulate gravity in Murph's bedroom in the past to transmit quantum data via Morse code on her watch.",
      keyThemes: ["Gravitational Time Dilation", "Parental Devotion", "Relativity"],
      aiOpinion: "Interstellar is Ujjwal's go-to film when designing complex async algorithms—reminding him that time and execution flow are non-linear."
    }
  },
  {
    id: "atomic-habits",
    type: "book",
    title: "Atomic Habits",
    creator: "James Clear",
    year: "2018",
    relatabilityScore: 99,
    impactRating: "Daily Blueprint",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&auto=format&fit=crop&q=80",
    summary: "A practical framework for improving every day by focusing on tiny 1% systems, identity-based habits, and environment design rather than willpower alone.",
    personalImpact: "This book changed my approach to mastering new frameworks and engineering disciplines. Instead of trying to learn an entire stack overnight, focusing on continuous daily iteration yields compound interest in technical mastery.",
    spoilerContent: {
      hasSpoilers: false,
      twistSummary: "No narrative spoilers—key insight is focusing on system design rather than arbitrary goal setting.",
      keyThemes: ["1% Compound Improvement", "Identity-Based Habits", "Environment Design"],
      aiOpinion: "Ujjwal applies the 4 Laws of Behavior Change to code refactoring: Make it obvious, attractive, easy, and satisfying."
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
    summary: "Humanity lives inside cities surrounded by enormous walls that protect them from gigantic man-eating humanoids called Titans, until a colossal titan breaches the outer wall.",
    personalImpact: "Isayama's storytelling showcases how perspectives shift when context is revealed. It taught me empathy in problem solving: every system behavior makes sense once you understand its underlying environment and historical constraints.",
    spoilerContent: {
      hasSpoilers: true,
      twistSummary: "The Titans are actually transformed humans of the Eldian race, and Paradise Island is an isolated fragment of a broader technological world (Marley) holding Eldians in ghettos.",
      keyThemes: ["Freedom", "Cycle of Hatred", "Perspective & Morality"],
      aiOpinion: "Ujjwal admires the unbelievable foreshadowing from Chapter 1 to the end, using it as an ideal example of system architecture foresight."
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
    excerpt: "Why explaining vector embeddings as multi-dimensional fruit maps helps students grasp semantic search instantly, without drowning in matrix math.",
    codeSnippet: `// Intuitive RAG Pipeline Concept
async function queryAdaptiveRAG(userQuery) {
  const embedding = await generateVector(userQuery);
  const documents = await vectorDb.similaritySearch(embedding, { topK: 5 });
  
  const relevance = await evaluateRelevance(userQuery, documents);
  if (relevance.score < 0.7) {
    // Self-Correction Fallback!
    const webResults = await webSearchFallback(userQuery);
    return synthesizeAnswer(userQuery, [...documents, ...webResults]);
  }
  
  return synthesizeAnswer(userQuery, documents);
}`,
    teachingMethodology: [
      "1. Analogy First: Compare vectors to spatial coordinates in a giant library.",
      "2. Visual Diagrams: Trace data flow from User Query -> Router -> Retrieval -> Evaluation.",
      "3. Fail-Safe Thinking: Teach students *why* RAG breaks before showing how to fix it.",
      "4. Hands-on Refactoring: Build a 20-line baseline first, then layer graph routing."
    ]
  },
  {
    id: "for-the-love-of-the-game",
    title: "For the Love of the Game: Why Craftsman Mindset Beats Hype Driven Dev",
    category: "Philosophy & Growth",
    readTime: "6 min read",
    date: "Jul 2026",
    videoUrl: null,
    excerpt: "In a world of shiny tools and AI auto-generators, true joy comes from deep technical mastery, understanding fundamentals, and building stuff just because it's beautiful.",
    codeSnippet: `// The Craftsman Loop
while (coding) {
  understandUnderlyingMechanisms();
  writeCleanCode();
  refactorWithCare();
  enjoyTheProcess(); // Pure passion
}`,
    teachingMethodology: [
      "Focus on 'Why' over 'How': Tools change every year, but fundamental principles remain constant.",
      "Encourage tinkering: Build small toy compilers or custom algorithms to remove black-box magic.",
      "Celebrate small wins: Debugging a tricky memory leak is just as rewarding as launching a product."
    ]
  }
];

export const SPORTS_TAKES = [
  {
    id: "champions-league-tactics-2026",
    sport: "Football / Soccer",
    title: "The Death of Static Positional Play & The Rise of Fluid Inversion",
    date: "Aug 04, 2026",
    hypeScore: 94,
    opinion: "We are witnessing the complete evolution of modern tactical setups. Teams relying on rigid wing-hugging systems are getting dismantled by dynamic positional rotations. When fullbacks centralize as dual-pivots under high pressing, it creates an overload that traditional 4-3-3 defenses can't resolve.",
    keyTakeaway: "Flexibility and rapid spatial recognition conquer static structure—in sports tactics and in distributed computing systems."
  },
  {
    id: "f1-regulations-hype",
    sport: "Formula 1",
    title: "Active Aerodynamics & Power Unit Battery Management Breakdown",
    date: "Jul 28, 2026",
    hypeScore: 91,
    opinion: "The new active aero rules and 50/50 electrical-to-ICE power split are forcing drivers to become energy strategists on every single straight. It's no longer just about raw apex speed; it's about telemetry optimization in real time.",
    keyTakeaway: "Resource allocation under strict constraints brings out absolute engineering brilliance."
  },
  {
    id: "nba-spacing-evolution",
    sport: "Basketball",
    title: "Five-Out Offense & The Death of Non-Shooting Bigs",
    date: "Jul 15, 2026",
    hypeScore: 88,
    opinion: "If your center cannot shoot or make high-IQ passes from the top of the key, your offensive rating drops by 12 points in crunch time. Defensive gravity dictates modern geometry.",
    keyTakeaway: "Every player on the court must be a multi-modal threat."
  }
];
