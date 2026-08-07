import React from 'react';

export default function ActivityHeatmap() {
  // Generate pseudo-random contribution intensity grid (52 weeks x 7 days = 364 days)
  const weeks = Array.from({ length: 36 }); // 36 columns for clean UI space
  const days = [0, 1, 2, 3, 4, 5, 6];

  const getIntensityColor = (weekIdx, dayIdx) => {
    const val = (weekIdx * 7 + dayIdx * 13) % 10;
    if (val > 7) return 'rgba(52, 211, 153, 0.85)'; // Emerald high activity
    if (val > 4) return 'rgba(251, 191, 36, 0.65)'; // Amber medium activity
    if (val > 2) return 'rgba(56, 189, 248, 0.45)'; // Cyan low activity
    return 'rgba(255, 255, 255, 0.05)';
  };

  return (
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)', padding: '1.2rem', marginBottom: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div>
          <span className="meta-tag meta-emerald" style={{ fontFamily: 'var(--font-mono)' }}>OBSESSION_MATRIX</span>
          <h3 style={{ fontSize: '1.1rem', marginTop: '0.2rem' }}>Digital Brain Activity & Research Matrix</h3>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          1,482 Commits, Notes & Reviews Logged in 2026
        </div>
      </div>

      {/* Heatmap Grid */}
      <div style={{ display: 'flex', gap: '3px', overflowX: 'auto', paddingBottom: '0.4rem' }}>
        {weeks.map((_, wIdx) => (
          <div key={wIdx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {days.map((_, dIdx) => (
              <div
                key={dIdx}
                title={`Week ${wIdx + 1}, Day ${dIdx + 1}: Activity logged`}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '2px',
                  background: getIntensityColor(wIdx, dIdx)
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.6rem', fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
        <span>Jan 2026</span>
        <span>Apr 2026</span>
        <span>Jul 2026</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>Less</span>
          <span style={{ width: '8px', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }} />
          <span style={{ width: '8px', height: '8px', background: 'rgba(56, 189, 248, 0.45)', borderRadius: '2px' }} />
          <span style={{ width: '8px', height: '8px', background: 'rgba(251, 191, 36, 0.65)', borderRadius: '2px' }} />
          <span style={{ width: '8px', height: '8px', background: 'rgba(52, 211, 153, 0.85)', borderRadius: '2px' }} />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
