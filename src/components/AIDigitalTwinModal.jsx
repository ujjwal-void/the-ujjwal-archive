import React, { useState } from 'react';
import { Bot, X, Send } from 'lucide-react';

export default function AIDigitalTwinModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "👋 Welcome to Ujjwal's Digital Sanctuary! I'm his AI companion. Ask me anything about his Adaptive RAG project, his favorite Steins;Gate anime episodes, how he teaches tech, or his F1/Football takes!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  if (!isOpen) return null;

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userText }]);
    setInput('');
    setIsThinking(true);

    setTimeout(() => {
      const reply = generateReply(userText);
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      setIsThinking(false);
    }, 500);
  };

  const generateReply = (query) => {
    const q = query.toLowerCase();

    if (q.includes('rag') || q.includes('project') || q.includes('code') || q.includes('python')) {
      return `🧠 Regarding projects: Ujjwal built an Adaptive RAG Search System combining Qdrant vector database, LangGraph routing, and self-correction fallbacks. It achieves 94% retrieval precision!`;
    }
    if (q.includes('anime') || q.includes('steins') || q.includes('attack on titan') || q.includes('movie')) {
      return `🍿 Narrative Taste: Ujjwal considers Steins;Gate a 10/10 masterpiece in timeline cohesion. Interstellar is his top sci-fi movie recommendation! Check out the Media Vault tab to see his spoiler-shielded reviews.`;
    }
    if (q.includes('teach') || q.includes('blog') || q.includes('learn') || q.includes('explain')) {
      return `📚 Teaching Philosophy: Ujjwal teaches 'Intuition First, Syntax Second'. He breaks down black-box abstractions with real-world analogies before touching code.`;
    }
    if (q.includes('sport') || q.includes('football') || q.includes('f1') || q.includes('nba')) {
      return `⚽ Sports Takes: Ujjwal loves analyzing fluid positional tactics in football and active aero telemetry in Formula 1. He views sports strategy as distributed systems in real life!`;
    }
    if (q.includes('hi') || q.includes('hello') || q.includes('who are you')) {
      return `👋 Hey there! I'm Ujjwal's AI Digital Companion. Ask me anything about his AI projects, anime/movie recommendations, sports takes, or teaching articles!`;
    }

    return `✨ Thanks for asking! Ujjwal builds software and writes content purely "for the love of the game"—striving for technical depth and visual craftsmanship. Feel free to explore the tabs or checkout the standalone /links page!`;
  };

  return (
    <div className="ai-modal-overlay" onClick={onClose}>
      <div className="ai-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="ai-chat-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <Bot size={24} style={{ color: 'var(--accent-cyan)' }} />
            <div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, fontFamily: 'var(--font-display)' }}>Ujjwal's AI Companion</h3>
              <span style={{ fontSize: '0.75rem', color: '#34d399' }}>🟢 Online • Trained on Ujjwal's digital brain</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="ai-chat-body">
          {messages.map((m, idx) => (
            <div key={idx} className={`chat-bubble ${m.sender}`}>
              {m.text}
            </div>
          ))}
          {isThinking && (
            <div className="chat-bubble bot" style={{ fontStyle: 'italic', opacity: 0.8 }}>
              🤖 Thinking...
            </div>
          )}
        </div>

        <div className="ai-chat-input-area">
          <input
            type="text"
            className="ai-input"
            placeholder="Ask e.g. 'What is Ujjwal's favorite anime?'..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="btn-primary" onClick={handleSend} style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem', gap: '0.3rem' }}>
            <Send size={16} /> Send
          </button>
        </div>
      </div>
    </div>
  );
}
