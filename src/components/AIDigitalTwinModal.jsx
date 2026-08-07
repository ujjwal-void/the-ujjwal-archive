import React, { useState } from 'react';
import { Bot, Send, X, User } from 'lucide-react';
import { PROFILE_DATA, WORK_EXPERIENCE, ACHIEVEMENTS, PROJECTS_DATA } from '../data/portfolioData';

export default function AIDigitalTwinModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hi! I'm Ujjwal's AI Assistant. You can ask me about his work experience at ZFunds & Advor.ai, tech stack (FastAPI, Python, Node.js, Redis, LangChain, FAISS), hackathon wins, or education at VIT Chennai!`
    }
  ]);
  const [input, setInput] = useState('');

  if (!isOpen) return null;

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const newMessages = [...messages, { sender: 'user', text: userText }];
    setInput('');
    setMessages(newMessages);

    // AI Response generation grounded in Ujjwal's real resume
    setTimeout(() => {
      let reply = "";
      const lower = userText.toLowerCase();

      if (lower.includes('experience') || lower.includes('job') || lower.includes('zfunds') || lower.includes('advor') || lower.includes('work')) {
        reply = `Ujjwal is a Software Development Engineer at ZFunds (April 2026-Present) building the ZIVA V2 WealthTech AI platform. Previously, he was Founding Engineer at Advor.ai / CyberPoint (Jan 2025-April 2026) where he scaled event-driven microservices to <150ms P99 latency using RabbitMQ/Redis and built hybrid RAG search engines (+40% accuracy). He also interned at DRDO and Iamneo.`;
      } else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('python')) {
        reply = `Ujjwal's core stack includes Python, TypeScript, JavaScript, Java, FastAPI, Node.js, Express, Nest.js, Redis, RabbitMQ, LangChain, FAISS, LlamaIndex, Qdrant, MongoDB, PostgreSQL, AWS (EC2/S3/Lambda), Docker, Kubernetes, and React.js.`;
      } else if (lower.includes('project') || lower.includes('nexus') || lower.includes('write medium') || lower.includes('adcraft') || lower.includes('rag')) {
        reply = `Ujjwal's verified projects include:
1. ZIVA V2 WealthTech AI (Portfolio Analysis & Proposal engines)
2. Advor.ai Hybrid RAG Engine (FAISS + Redis + RabbitMQ)
3. Nexus PM (Project Management REST API with 30+ endpoints & 3-tier RBAC)
4. Write Medium (Full-stack blogging platform)
5. AdCraft (AI Ad generator - Osmos Hackathon 1st Runner Up out of 131 teams)
6. DRDO Real-Time LAN & Packet Inspection Tool`;
      } else if (lower.includes('education') || lower.includes('college') || lower.includes('vit')) {
        reply = `Ujjwal graduated with a B.Tech in Computer Science Engineering (AI & ML Specialization) from Vellore Institute of Technology (VIT Chennai), class of 2021-2025 (CGPA: 7.23/10.0).`;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('linkedin')) {
        reply = `You can reach Ujjwal directly at:
• Email: ujjwal.02023@gmail.com
• Phone: +91 7380679251
• LinkedIn: linkedin.com/in/ujjwal-ujjwal-dev
• GitHub: github.com/ujjwal-void`;
      } else if (lower.includes('hackathon') || lower.includes('award') || lower.includes('achievement')) {
        reply = `Ujjwal won 1st Runner-Up at the Osmos Hackathon by OnlineSales.ai (out of 131 teams, INR 30,000 prize) by building AdCraft, and was a Finalist at the CryptoGuard Hackathon at VIT Chennai!`;
      } else {
        reply = `Ujjwal is a Software Development Engineer with deep expertise in Python, Node.js, FastAPI, event-driven RabbitMQ microservices, Redis caching, and hybrid RAG pipelines. Feel free to ask about his ZFunds/Advor.ai experience or email him at ujjwal.02023@gmail.com!`;
      }

      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 400);
  };

  return (
    <div className="ai-modal-overlay" onClick={onClose}>
      <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="ai-chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Bot size={22} style={{ color: 'var(--accent-indigo)' }} />
            <div>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--text-main)' }}>Ujjwal's AI Assistant</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Grounded in Ujjwal's Real Resume & Verified Experience</p>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="ai-chat-body">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-bubble ${msg.sender}`}>
              <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="ai-chat-input-area">
          <input
            type="text"
            className="ai-input"
            placeholder="Ask about Ujjwal's experience, skills, projects..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="btn-primary" onClick={handleSend} style={{ padding: '0.6rem 0.9rem' }}>
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
