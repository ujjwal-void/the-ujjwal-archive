import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, User, Sparkles, MessageSquare, Briefcase, Cpu, Award, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export default function AIDigitalTwinModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hi! I'm Ujjwal's AI Assistant. Ask me about his work at ZFunds & Advor.ai, tech stack (Python, FastAPI, Redis, RabbitMQ, FAISS), hackathon awards, or education at VIT Chennai!`
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
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

      if (lower.includes('experience') || lower.includes('job') || lower.includes('zfunds') || lower.includes('advor') || lower.includes('work')) {
        reply = `💼 Work History Highlights:
• Software Engineer at ZFunds (April 2026 – Present): Architected core financial engines & Portfolio Analysis for ZIVA V2 WealthTech AI.
• Founding Engineer at Advor.ai (Jan 2025 – April 2026): Scaled RabbitMQ event microservices to <150ms P99 latency and built FAISS hybrid RAG search engines (+40% accuracy).
• DevOps Intern at DRDO: Built real-time LAN packet inspection tools with Docker & Kubernetes.`;
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('python')) {
        reply = `⚡ Tech Stack & Architecture Skills:
• Backend & Systems: Python, TypeScript, JavaScript, Java, FastAPI, Node.js, Express, Nest.js, RESTful APIs, Microservices.
• AI & LLMs: LangChain, LlamaIndex, ChromaDB, Vector Embeddings, Hybrid RAG, Prompt Engineering.
• Databases & Infrastructure: Redis (Clustering/Caching), RabbitMQ, PostgreSQL, MongoDB, MySQL, AWS (EC2, S3), Docker, Kubernetes, Grafana.`;
      } else if (lower.includes('project') || lower.includes('nexus') || lower.includes('adcraft') || lower.includes('rag')) {
        reply = `🚀 Key Projects:
1. ZIVA V2 WealthTech AI (ZFunds) — End-to-end Portfolio Analysis & Fund Recommendation.
2. Advor.ai Hybrid RAG Engine — Multi-layer FAISS + Redis search engine (+40% retrieval precision).
3. AdCraft AI Platform — Osmos Hackathon 1st Runner-Up out of 131 teams (INR 30,000 Prize).
4. Nexus PM — Collaborative Project Management REST API with 30+ endpoints & 3-tier RBAC.
5. DRDO Network Observability Tool — Real-time packet sniffing & device discovery.`;
      } else if (lower.includes('education') || lower.includes('college') || lower.includes('vit')) {
        reply = `🎓 Academic Credentials:
• Degree: B.Tech in Computer Science Engineering (AI & ML Specialization)
• Institution: Vellore Institute of Technology (VIT Chennai, 2021–2025)
• CGPA: 7.23 / 10.0
• Schooling: Lucknow Public College (Class XII: 83.25%)`;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('reach')) {
        reply = `📫 Contact Channels:
• Email: ujjwal.02023@gmail.com
• Phone: +91 7380679251
• Location: Gurugram, India
• GitHub: github.com/ujjwal-void
• LinkedIn: linkedin.com/in/ujjwal-ujjwal-dev
• LeetCode: leetcode.com/u/ujjwal92`;
      } else if (lower.includes('hackathon') || lower.includes('award') || lower.includes('achievement')) {
        reply = `🏆 Awards & Achievements:
• 1st Runner-Up at Osmos Hackathon by OnlineSales.ai (Out of 131 teams, INR 30,000 Prize).
• Finalist at CryptoGuard Hackathon at VIT Chennai (Web3 identity verification tool).`;
      } else {
        reply = `I am grounded in Ujjwal's background as a Software Engineer. Feel free to ask about his ZFunds & Advor.ai experience, Python/FastAPI/RAG stack, projects, or email him directly at ujjwal.02023@gmail.com!`;
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
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>Ujjwal's AI Assistant</h3>
                <span className="online-dot" title="Active AI Engine"></span>
              </div>
              <p style={{ fontSize: '0.73rem', color: 'var(--text-muted)', margin: 0 }}>Grounded in Real Experience & Resume</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close Chat">
            <X size={18} />
          </button>
        </div>

        {/* Messages Scroll Area */}
        <div className="ai-chat-body">
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
          <button onClick={() => handleSendQuery('Tell me about your work experience')}>
            <Briefcase size={12} /> Experience
          </button>
          <button onClick={() => handleSendQuery('What is your tech stack?')}>
            <Cpu size={12} /> Tech Stack
          </button>
          <button onClick={() => handleSendQuery('Tell me about your hackathon awards')}>
            <Award size={12} /> Awards
          </button>
          <button onClick={() => handleSendQuery('How can I contact Ujjwal?')}>
            <Mail size={12} /> Contact
          </button>
        </div>

        {/* Input Bar */}
        <div className="ai-chat-input-area">
          <input
            type="text"
            className="ai-input"
            placeholder="Ask AI anything about Ujjwal..."
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
