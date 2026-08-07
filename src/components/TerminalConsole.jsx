import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { PROJECTS_DATA, MEDIA_DATA, TECH_ESSAYS, PHYSICS_MATH_NOTES, SPORTS_TAKES } from '../data/portfolioData';

export default function TerminalConsole({ onNavigate }) {
  const [history, setHistory] = useState([
    { type: 'output', text: 'UJJWAL_ARCHIVE_OS v2.4 (x86_64-pc-linux-gnu)' },
    { type: 'output', text: 'Type "help" or "ls" to explore the digital brain. Try "cat manifesto" or "grep vector".' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

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
  cd <dir>     - Navigate to section (projects, physics, essays, culture, links)
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
  /culture           [7 Culture & Sports Notes]
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
        if (['projects', 'physics', 'math', 'media', 'essays', 'teaching', 'sports', 'culture', 'links', 'home'].includes(dir)) {
          onNavigate(dir === 'math' ? 'physics' : dir);
          newHistory.push({ type: 'output', text: `Navigated to /${dir}` });
        } else {
          newHistory.push({ type: 'output', text: `Directory not found: ${dir}. Try: cd projects, cd physics, cd essays, cd culture` });
        }
      } else if (lower.startsWith('grep ')) {
        const query = lower.replace('grep ', '').trim();
        const results = [];
        PROJECTS_DATA.forEach(p => p.title.toLowerCase().includes(query) && results.push(`[PROJECT] ${p.title} -> ${p.tagline}`));
        PHYSICS_MATH_NOTES.forEach(pm => pm.title.toLowerCase().includes(query) && results.push(`[PHYSICS/MATH] ${pm.title}`));
        TECH_ESSAYS.forEach(b => b.title.toLowerCase().includes(query) && results.push(`[ESSAY] ${b.title}`));
        MEDIA_DATA.forEach(m => m.title.toLowerCase().includes(query) && results.push(`[MEDIA] ${m.title} (${m.type}) -> ${m.summary.substring(0, 40)}...`));
        SPORTS_TAKES.forEach(s => s.title.toLowerCase().includes(query) && results.push(`[SPORTS] ${s.title}`));

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
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-muted)', borderRadius: 'var(--radius-md)', padding: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', marginBottom: '1rem', boxShadow: 'var(--shadow-subtle)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-muted)', paddingBottom: '0.6rem', marginBottom: '0.8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-indigo)', fontWeight: 700 }}>
          <TerminalIcon size={16} />
          <span>UJJWAL_CLI_SHELL</span>
        </div>
        <span style={{ color: 'var(--text-dim)', fontSize: '0.72rem' }}>Interactive Terminal • Type "help"</span>
      </div>

      <div style={{ maxHeight: '180px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.4rem', color: 'var(--text-muted)' }}>
        {history.map((item, idx) => (
          <div key={idx} style={{ color: item.type === 'command' ? 'var(--accent-indigo)' : 'var(--text-main)', fontWeight: item.type === 'command' ? 600 : 400, whiteSpace: 'pre-wrap' }}>
            {item.text}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.8rem', borderTop: '1px solid var(--border-muted)', paddingTop: '0.6rem' }}>
        <span style={{ color: 'var(--accent-indigo)', fontWeight: 700 }}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="Type command e.g. 'help', 'ls', 'cat manifesto'..."
          style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'var(--text-main)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}
        />
        <CornerDownLeft size={14} style={{ color: 'var(--text-dim)' }} />
      </div>
    </div>
  );
}
