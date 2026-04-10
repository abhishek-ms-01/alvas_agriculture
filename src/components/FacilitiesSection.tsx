import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FacilitiesSection.css';

interface Spore {
  id: number;
  left: string;
  top: string;
  duration: string;
  delay: string;
  size: string;
  background: string;
}

const FacilitiesSection: React.FC = () => {
  const [spores, setSpores] = useState<Spore[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const newSpores: Spore[] = [];
    const colors = ['var(--wheat)', 'var(--leaf)', 'var(--amber)', 'var(--sage)'];
    
    // Initial spores from HTML
    const initialSporesPosition = [
      { left: '8%', top: '30%', size: '4px', duration: '5s', delay: '0s', background: 'var(--wheat)' },
      { left: '22%', top: '60%', size: '3px', duration: '7s', delay: '1.5s', background: 'var(--leaf)' },
      { left: '45%', top: '20%', size: '5px', duration: '6s', delay: '3s', background: 'var(--wheat)' },
      { left: '68%', top: '50%', size: '3px', duration: '8s', delay: '0.8s', background: 'var(--sage)' },
      { left: '85%', top: '35%', size: '4px', duration: '5.5s', delay: '2s', background: 'var(--wheat)' },
      { left: '92%', top: '70%', size: '3px', duration: '6.5s', delay: '4s', background: 'var(--amber)' },
    ];

    initialSporesPosition.forEach((pos, i) => {
      newSpores.push({
        id: i,
        ...pos
      });
    });

    // Dynamic spores from script
    for (let i = 0; i < 6; i++) {
      newSpores.push({
        id: i + 10,
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        duration: (4 + Math.random() * 6) + 's',
        delay: (Math.random() * 7) + 's',
        size: (Math.random() * 4 + 2) + 'px',
        background: colors[Math.floor(Math.random() * 4)]
      });
    }
    setSpores(newSpores);
  }, []);

  return (
    <div className="facilities-section">
      {spores.map(spore => (
        <div 
          key={spore.id} 
          className="spore" 
          style={{
            left: spore.left,
            top: spore.top,
            width: spore.size,
            height: spore.size,
            animationDuration: spore.duration,
            animationDelay: spore.delay,
            background: spore.background
          }}
        />
      ))}

      <div className="section-content">
        <div className="header-wrap">
          <span className="eyebrow">— Infrastructure & Resources —</span>
          <h2 className="main-title">
            World-Class
            <strong>Facilities</strong>
          </h2>
          <div className="ground-line"></div>
        </div>

        <div className="hex-grid">
          {/* 1: Smart Classrooms */}
          <div className="hex-item">
            <div className="hex-head">
              <div 
                className="hex-bg" 
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80')",
                  backgroundColor: "#5a7a3a"
                }} 
              />
              <div className="hex-overlay"></div>
              <div className="hex-icon">📚</div>
            </div>
            <div className="stem"></div>
            <div className="hex-label">
              <span className="hex-name">Smart<br />Classrooms</span>
              <span className="hex-sub">Digital Learning</span>
            </div>
          </div>

          {/* 2: Modern Laboratories */}
          <div className="hex-item" onClick={() => navigate('/campus-life/skill-labs')}>
            <div className="hex-head">
              <div 
                className="hex-bg" 
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80')",
                  backgroundColor: "#8b5e3c"
                }} 
              />
              <div className="hex-overlay"></div>
              <div className="hex-icon">🔬</div>
            </div>
            <div className="stem"></div>
            <div className="hex-label">
              <span className="hex-name">Modern<br />Laboratories</span>
              <span className="hex-sub">Research Grade</span>
            </div>
          </div>

          {/* 3: Research Farms (FEATURED) */}
          <div className="hex-item featured" style={{ zIndex: 5 }}>
            <div className="hex-head">
              <div 
                className="hex-bg" 
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&q=80')",
                  backgroundColor: "#3d6b2e"
                }} 
              />
              <div className="hex-overlay"></div>
              <div className="hex-icon" style={{ fontSize: '38px' }}>🐄</div>
            </div>
            <div className="stem" style={{ height: '150px', width: '4px', background: 'linear-gradient(to top,var(--bark),var(--grass))' }}></div>
            <div className="hex-label">
              <span className="hex-name" style={{ fontSize: '21px', color: 'var(--grass)' }}>Research<br />Farms</span>
              <span className="hex-sub" style={{ color: 'var(--gold)', opacity: 1 }}>Live Agriculture</span>
            </div>
          </div>

          {/* 4: Library */}
          <div className="hex-item" onClick={() => navigate('/campus-life/library')}>
            <div className="hex-head">
              <div 
                className="hex-bg" 
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80')",
                  backgroundColor: "#6b4226"
                }} 
              />
              <div className="hex-overlay"></div>
              <div className="hex-icon">📖</div>
            </div>
            <div className="stem"></div>
            <div className="hex-label">
              <span className="hex-name">Library</span>
              <span className="hex-sub">Knowledge Hub</span>
            </div>
          </div>

          {/* 5: Hostel */}
          <div className="hex-item" onClick={() => navigate('/campus-life/hostel')}>
            <div className="hex-head">
              <div 
                className="hex-bg" 
                style={{ 
                  backgroundImage: "url('https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&q=80')",
                  backgroundColor: "#5a7a3a"
                }} 
              />
              <div className="hex-overlay"></div>
              <div className="hex-icon">🏡</div>
            </div>
            <div className="stem"></div>
            <div className="hex-label">
              <span className="hex-name">Hostel</span>
              <span className="hex-sub">Green Campus</span>
            </div>
          </div>
        </div>

        <div className="soil-strip"></div>
        <div className="grass-row">
          <div className="grass-tuft">
            <div className="grass-blade" style={{ height: '14px' }}></div>
            <div className="grass-blade" style={{ height: '20px' }}></div>
            <div className="grass-blade" style={{ height: '12px' }}></div>
          </div>
          <div className="grass-tuft">
            <div className="grass-blade" style={{ height: '18px' }}></div>
            <div className="grass-blade" style={{ height: '24px' }}></div>
            <div className="grass-blade" style={{ height: '16px' }}></div>
            <div className="grass-blade" style={{ height: '22px' }}></div>
          </div>
          <div className="grass-tuft">
            <div className="grass-blade" style={{ height: '12px' }}></div>
            <div className="grass-blade" style={{ height: '18px' }}></div>
            <div className="grass-blade" style={{ height: '10px' }}></div>
          </div>
        </div>

        <div className="bottom-row">
          <div className="dot-nav">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <button className="view-all">View All Facilities</button>
          <div className="dot-nav">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot active"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
