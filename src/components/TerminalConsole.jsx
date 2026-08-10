import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { PROJECTS_DATA, MEDIA_DATA, TECH_ESSAYS, PHYSICS_MATH_NOTES, SPORTS_TAKES } from '../data/portfolioData';

export default function TerminalConsole({ onNavigate }) {
  const [history, setHistory] = useState([
    { type: 'output', text: 'UJJWAL_ARCHIVE_OS v2.4 (x86_64-pc-linux-gnu)' },
    { type: 'output', text: 'Type "help" or "ls" to explore. Try "cat manifesto", "cd physics", or "grep RAG".' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const consoleBodyRef = useRef(null);

  // Auto-scroll to bottom of terminal whenever history updates
  useEffect(() => {
    if (consoleBodyRef.current) {
      consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim();
      if (!cmd) return;

      const newHistory = [...history, { type: 'command', text: `$ ${cmd}` }];
      const lower = cmd.toLowerCase();

      if (lower === 'clear') {
        setHistory([]);
        setInput('');
        return;
      }

      if (lower === 'help') {
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  ls           - List all archive directories
  cd <dir>     - Navigate to section (projects, physics, essays, screen-spine, links)
  cat manifesto- Display Ujjwal's core engineering manifesto
  grep <term>  - Search the digital brain for a keyword
  clear        - Clear terminal screen`
        });
      } else if (lower === 'ls') {
        newHistory.push({
          type: 'output',
          text: `DIRECTORIES:
  /projects          [6 Verified Production Projects]
  /physics           [3 Physics & Math Derivations]
  /essays            [2 Tech Essays & Explanations]
  /screen-spine      [Screen & Spine: Cinema, Anime & Book Logs]
  /links             [Standalone Bio Linktree]`
        });
      } else if (lower === 'cat manifesto') {
        newHistory.push({
          type: 'output',
          text: `MANIFESTO:
"Software engineering, high-dimensional vector spaces, relativity time metrics, and fluid tactical rotations are all manifestations of pure human craft. I build, write, and analyze not for CV fluff, but because I am genuinely fascinated by how complex systems operate under the hood."`
        });
      } else if (lower.startsWith('cd ')) {
        const dir = lower.replace('cd ', '').trim();
        if (['projects', 'physics', 'math', 'media', 'essays', 'teaching', 'sports', 'screen-spine', 'screen', 'spine', 'culture', 'schema', 'db', 'db-schema', 'links', 'home'].includes(dir)) {
          const targetRoute = (['schema', 'db', 'db-schema'].includes(dir) ? 'db-schema' : (dir === 'math' ? 'physics' : (['screen-spine', 'screen', 'spine', 'media', 'sports', 'culture'].includes(dir) ? 'culture' : dir)));
          onNavigate(targetRoute);
          newHistory.push({ type: 'output', text: `Navigated to /${dir}` });
        } else {
          newHistory.push({ type: 'output', text: `Directory not found: ${dir}. Try: cd projects, cd physics, cd essays, cd db-schema` });
        }
      } else if (lower.startsWith('grep ')) {
        const query = lower.replace('grep ', '').trim();
        const results = [];
        PROJECTS_DATA.forEach(p => (p.title || '').toLowerCase().includes(query) && results.push(`[PROJECT] ${p.title} -> ${p.tagline}`));
        PHYSICS_MATH_NOTES.forEach(pm => (pm.title || '').toLowerCase().includes(query) && results.push(`[PHYSICS/MATH] ${pm.title}`));
        TECH_ESSAYS.forEach(b => (b.title || '').toLowerCase().includes(query) && results.push(`[ESSAY] ${b.title}`));
        MEDIA_DATA.forEach(m => (m.title || '').toLowerCase().includes(query) && results.push(`[SCREEN&SPINE] ${m.title} (${m.type}) -> ${(m.review || '').substring(0, 40)}...`));
        SPORTS_TAKES.forEach(s => (s.title || '').toLowerCase().includes(query) && results.push(`[SPORTS] ${s.title}`));

        if (results.length > 0) {
          newHistory.push({ type: 'output', text: `GREP RESULTS FOR "${query}":\n${results.join('\n')}` });
        } else {
          newHistory.push({ type: 'output', text: `No matches found for "${query}".` });
        }
      } else {
        newHistory.push({ type: 'output', text: `Command not recognized: "${cmd}". Type "help" for command list.` });
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{
        background: '#090d16',
        border: '2px solid #1e293b',
        borderRadius: 'var(--radius-md)',
        padding: '1rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.82rem',
        marginBottom: '1rem',
        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.15)',
        cursor: 'text',
      }}
    >
      {/* Terminal Top Window Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '0.6rem', marginBottom: '0.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ display: 'flex', gap: '5px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#38bdf8', fontWeight: 700, fontSize: '0.78rem' }}>
            <TerminalIcon size={14} />
            <span>UJJWAL_CLI_SHELL</span>
          </div>
        </div>
        <span style={{ color: '#64748b', fontSize: '0.72rem' }}>Type "help" • bash</span>
      </div>

      {/* Output Console Stream with Ref for Auto-Scrolling */}
      <div
        ref={consoleBodyRef}
        style={{
          maxHeight: '180px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          color: '#cbd5e1',
          scrollBehavior: 'smooth',
        }}
      >
        {history.map((item, idx) => (
          <div
            key={idx}
            style={{
              color: item.type === 'command' ? '#38bdf8' : '#e2e8f0',
              fontWeight: item.type === 'command' ? 600 : 400,
              whiteSpace: 'pre-wrap',
              lineHeight: '1.5'
            }}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* CLI Input Line */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.8rem', borderTop: '1px solid #1e293b', paddingTop: '0.6rem' }}>
        <span style={{ color: '#10b981', fontWeight: 700 }}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="Type command e.g. 'help', 'ls', 'cat manifesto'..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#f8fafc',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem'
          }}
        />
        <CornerDownLeft size={14} style={{ color: '#64748b' }} />
      </div>
    </div>
  );
}
