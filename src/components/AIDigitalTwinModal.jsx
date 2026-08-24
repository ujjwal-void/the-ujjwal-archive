import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, User, Sparkles, MessageSquare, Briefcase, Cpu, Award, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function AIDigitalTwinModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [messages, isOpen, isTyping]);

  if (!isOpen) return null;

  const handleSendQuery = (userText) => {
    const textToSend = userText || input.trim();
    if (!textToSend) return;

    const newMessages = [...messages, { sender: 'user', text: textToSend }];
    setInput('');
    setMessages(newMessages);
    setIsTyping(true);

    // Simulated intelligent response grounded in Ujjwal's real resume data
    setTimeout(() => {
      let reply = "";
      const lower = textToSend.toLowerCase();

      if (lower.includes('recruiter') || lower.includes('hire') || lower.includes('interview') || lower.includes('salary') || lower.includes('role')) {
        reply = `Hey recruiter! Skip this chatbot gimmick—there is no actual AI or LLM API involved here; it's just smart deterministic keyword mapping and regex rules pretending to be a chatbot because running real LLM APIs is expensive! I honestly don't give a single shit if this bot breaks! Here's my actual engineering summary:
• Work Experience: Software Development Engineer at ZFunds & Founding Engineer at Advor.ai.
• Core Impact: I cut portfolio analysis latency by 97%+ (~40s to ~900ms) & scaled RabbitMQ queues to <150ms P99.
• Direct Email: ujjwal.02023@gmail.com
• Phone: +91 7380679251`;
      } else if (lower.includes('experience') || lower.includes('job') || lower.includes('zfunds') || lower.includes('advor') || lower.includes('work')) {
        reply = `My Work History Highlights:
• Software Development Engineer at ZFunds (April 2026 – Present): Core engineer for ZIVA V2 (backend, frontend, AI pipelines). I cut Portfolio Analysis latency from 40s+ to ~900ms (97%+ reduction).
• Founding Engineer at Advor.ai (Jan 2025 – April 2026): I scaled RabbitMQ event microservices to <150ms P99 latency & built FAISS hybrid RAG search engines.
• DevOps Intern at DRDO: I built real-time LAN monitoring & packet sniffing tools with Flask, Docker & Kubernetes.`;
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('python')) {
        reply = `My Core Tech Stack:
• Languages & Frontend: Python, TypeScript, JavaScript, Java, React, React Native, Next.js, Redux Toolkit, Tailwind CSS.
• Backend & Microservices: FastAPI, Flask, Node.js, Express.js, Spring Boot, REST APIs, Microservices.
• AI/LLM & ML: LangChain, LlamaIndex, ChromaDB, Embeddings, RAG Pipelines, PyTorch, Scikit-Learn.
• Databases & Cloud: Redis, MongoDB, MySQL, PostgreSQL, AWS (EC2, S3, RDS), RabbitMQ, Kafka, Docker, Kubernetes.`;
      } else if (lower.includes('project') || lower.includes('nexus') || lower.includes('adcraft') || lower.includes('rag')) {
        reply = `Key Projects I've Built:
1. ZIVA V2 WealthTech AI (ZFunds) — Portfolio Analysis, FastTrack KYC, e-Mandate, GIFT City platform.
2. Advor.ai Hybrid RAG Engine — RabbitMQ event microservices (<150ms P99) & FAISS vector search.
3. Adaptive RAG Search — Agentic RAG system built with LangGraph, LangChain, Qdrant & FastAPI.
4. AdCraft — Osmos Hackathon 1st Runner-Up out of 131 teams (INR 30,000 Prize).
5. Nexus PM — Project Management REST API with 30+ endpoints & 3-tier RBAC.`;
      } else if (lower.includes('education') || lower.includes('college') || lower.includes('vit')) {
        reply = `My Academic Background:
• Degree: B.Tech in Computer Science Engineering (AI & ML Specialization)
• Institution: Vellore Institute of Technology (VIT Vellore, 2021–2025)
• CGPA: 7.23 / 10.0
• Schooling: Lucknow Public College (Class XII: 83.25%)`;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach')) {
        reply = `Reach Me Directly:
• Email: ujjwal.02023@gmail.com
• Phone: +91 7380679251
• Location: Gurugram, India
• GitHub: github.com/ujjwal-void
• LinkedIn: linkedin.com/in/ujjwal-ujjwal-dev
• LeetCode: leetcode.com/u/ujjwal92`;
      } else if (lower.includes('hackathon') || lower.includes('award') || lower.includes('achievement')) {
        reply = `My Hackathon Awards:
• 1st Runner-Up at Osmos Hackathon by OnlineSales.ai (Out of 131 teams, INR 30,000 Prize).
• Finalist at CryptoGuard Hackathon at VIT Vellore (Web3 identity verification tool).`;
      } else if (lower.includes('screen') || lower.includes('spine') || lower.includes('movie') || lower.includes('anime') || lower.includes('book') || lower.includes('culture')) {
        reply = `My Personal Screen & Spine Logs:
• Obito Uchiha (Naruto Shippuden): Deep character study on his tragic idealist worldview.
• Books: "Metamorphosis" by Franz Kafka, "The Picture of Dorian Gray" by Oscar Wilde, "I Hear You" by Michael S. Sorensen, and "The Rosie Project" by Graeme Simsion.
• Anime/Movies: "Another" (Class 3-3 horror) and "Kishkindha Kaandam" (Malayalam thriller).`;
      } else {
        reply = `If you're a recruiter looking to hire me, skip this chatbot gimmick—there is no actual AI or LLM model running here; it's just smart keyword matching & regex rules. I don't give a single shit if this bot breaks. Check out my real Work Experience section or email me directly at ujjwal.02023@gmail.com!`;
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 450);
  };

  return (
    <div className="ai-modal-overlay" onClick={onClose}>
      <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="ai-chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div className="ai-avatar-badge">
              <Bot size={20} style={{ color: '#ffffff' }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>Ujjwal (Digital Twin)</h3>
                <span className="online-dot" title="Active AI Engine"></span>
              </div>
              <p style={{ fontSize: '0.73rem', color: 'var(--text-muted)', margin: 0 }}>Grounded in My Background & Experience</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close Chat">
            <X size={18} />
          </button>
        </div>

        {/* Messages Scroll Area */}
        <div className="ai-chat-body">
          {messages.length === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textTransform: 'none', color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 1rem', gap: '0.6rem' }}>
              <Sparkles size={28} style={{ color: 'var(--accent-indigo)' }} />
              <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-main)', margin: 0 }}>Ask me anything or click a shortcut below:</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: 0 }}>Ask about my work experience, tech stack, projects, or contact info.</p>
            </div>
          )}
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message-row ${msg.sender}`}>
              {msg.sender === 'bot' && (
                <div className="bot-chat-icon">
                  <Bot size={15} />
                </div>
              )}
              <div className={`chat-bubble ${msg.sender}`}>
                <p style={{ whiteSpace: 'pre-line', margin: 0, lineHeight: '1.55' }}>{msg.text}</p>
              </div>
              {msg.sender === 'user' && (
                <div className="user-chat-icon">
                  <User size={15} />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="chat-message-row bot">
              <div className="bot-chat-icon">
                <Bot size={15} />
              </div>
              <div className="chat-bubble bot typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="ai-suggestion-chips">
          <button onClick={() => handleSendQuery('How can I contact Ujjwal?')}>
            <Mail size={12} /> Contact Me
          </button>
          <button onClick={() => handleSendQuery('Tell me about your work experience')}>
            <Briefcase size={12} /> My Experience
          </button>
          <button onClick={() => handleSendQuery('What is your tech stack?')}>
            <Cpu size={12} /> My Tech Stack
          </button>
          <button onClick={() => handleSendQuery('Tell me about your hackathon awards')}>
            <Award size={12} /> My Awards
          </button>
        </div>

        {/* Input Bar */}
        <div className="ai-chat-input-area">
          <input
            type="text"
            className="ai-input"
            placeholder="Ask me anything about my work, stack, or background..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendQuery()}
          />
          <button className="btn-primary ai-send-btn" onClick={() => handleSendQuery()} disabled={!input.trim()}>
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

