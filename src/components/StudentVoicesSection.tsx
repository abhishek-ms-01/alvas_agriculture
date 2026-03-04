import React, { useEffect, useState } from 'react';
import './StudentVoicesSection.css';

interface Particle {
  id: number;
  emoji: string;
  left: string;
  top: string;
  duration: string;
  delay: string;
  fontSize: string;
}

const StudentVoicesSection: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    // Initial and dynamic leaf particles
    const emojis = ['🍃', '🌿', '🌾', '🍀'];
    const newParticles: Particle[] = [
      { id: 1, emoji: '🍃', left: '8%', top: '70%', duration: '9s', delay: '0s', fontSize: '16px' },
      { id: 2, emoji: '🌿', left: '20%', top: '60%', duration: '12s', delay: '2s', fontSize: '16px' },
      { id: 3, emoji: '🍃', left: '75%', top: '75%', duration: '10s', delay: '4s', fontSize: '16px' },
      { id: 4, emoji: '🌾', left: '88%', top: '65%', duration: '8s', delay: '1s', fontSize: '16px' },
      { id: 5, emoji: '🍃', left: '50%', top: '80%', duration: '11s', delay: '3s', fontSize: '16px' },
    ];

    for (let i = 0; i < 6; i++) {
      newParticles.push({
        id: i + 10,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100 + '%',
        top: (50 + Math.random() * 40) + '%',
        duration: (7 + Math.random() * 8) + 's',
        delay: (Math.random() * 8) + 's',
        fontSize: (12 + Math.random() * 10) + 'px',
      });
    }
    setParticles(newParticles);

    // Dot cycling logic
    const interval = setInterval(() => {
      setActiveDot(prev => (prev + 1) % 5);
    }, 4400);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Sneha Reddy",
      role: "Alumni, MBA",
      quote: "It's not just about books. The cultural fest 'Varnothsava' and the sports facilities helped me grow into a well-rounded leader.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&q=80",
      gold: false
    },
    {
      name: "David John",
      role: "Parent",
      quote: "Sending my son here was the best decision. The discipline, agricultural exposure and academic focus are exactly what we were looking for.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&q=80",
      gold: true
    },
    {
      name: "Aarav Sharma",
      role: "Alumni, Batch 2023",
      quote: "This college provided me the technical foundation and soft skills I needed to crack the interview at a top agri-firm. The campus vibe is unmatched!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&q=80",
      gold: false
    },
    {
      name: "Priya Nair",
      role: "Parent",
      quote: "The farm-to-table learning approach here is revolutionary. My daughter now understands sustainable agriculture from the ground up. Truly inspiring!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&q=80",
      gold: true
    },
    {
      name: "Rohit Verma",
      role: "Alumni, B.Sc Agri",
      quote: "The research farm experience changed my perspective entirely. Working with real crops and livestock gave me the confidence no classroom alone ever could.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&q=80",
      gold: false
    }
  ];

  const StarIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#e8b020" /></svg>
  );

  const QuoteIcon = () => (
    <svg viewBox="0 0 24 24"><path d="M11.3 7.7C10.1 8.4 9.3 9.3 9 10.5c.3-.1.6-.1.9-.1 1.7 0 3 1.4 3 3.1s-1.3 3-3 3-3-1.5-3-3.5c0-2.9 1.9-5.4 4.9-7.1l.5 1.8zm8 0C18.1 8.4 17.3 9.3 17 10.5c.3-.1.6-.1.9-.1 1.7 0 3 1.4 3 3.1s-1.3 3-3 3-3-1.5-3-3.5c0-2.9 1.9-5.4 4.9-7.1l.5 1.8z" /></svg>
  );

  return (
    <div className="student-voices-section">
      {/* vine bg */}
      <svg className="vine-bg" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" fill="none">
        <path d="M0 350 Q200 200 400 350 Q600 500 800 350 Q1000 200 1200 350" stroke="#4a7c2f" strokeWidth="2" />
        <path d="M0 200 Q300 100 600 200 Q900 300 1200 200" stroke="#6fa840" strokeWidth="1.5" />
        <path d="M100 600 Q400 500 700 600 Q1000 700 1200 580" stroke="#c8900a" strokeWidth="1" />
        <circle cx="200" cy="278" r="5" fill="#6fa840" />
        <ellipse cx="200" cy="265" rx="10" ry="5" fill="#6fa840" opacity=".6" transform="rotate(-30 200 265)" />
        <circle cx="600" cy="422" r="5" fill="#6fa840" />
        <ellipse cx="600" cy="409" rx="10" ry="5" fill="#6fa840" opacity=".6" transform="rotate(30 600 409)" />
        <circle cx="1000" cy="278" r="5" fill="#6fa840" />
        <circle cx="150" cy="120" r="3" fill="#c8900a" opacity=".5" />
        <circle cx="900" cy="150" r="3" fill="#c8900a" opacity=".4" />
        <circle cx="80" cy="500" r="3" fill="#6fa840" opacity=".4" />
        <circle cx="1150" cy="480" r="3" fill="#c8900a" opacity=".5" />
      </svg>

      {/* floating leaves */}
      {particles.map(p => (
        <div 
          key={p.id} 
          className="leaf-particle" 
          style={{
            left: p.left,
            top: p.top,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.fontSize
          }}
        >
          {p.emoji}
        </div>
      ))}

      <div className="section-content">
        <div className="eyebrow">Student Voices</div>
        <h2 className="main-title">What People <span>Say About Us</span></h2>
        <div className="title-underline">
          <div className="line line-short"></div>
          <div className="line line-long"></div>
          <div className="dot"></div>
          <div className="line line-long"></div>
          <div className="line line-short"></div>
        </div>

        {/* ══ SLIDER ══ */}
        <div className="slider-outer">
          <div className="slider-track">
            {/* Real testimonials + Clone for seamless scroll */}
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div key={idx} className={`tcard ${t.gold ? 'gold' : ''}`}>
                <div className="quote-icon"><QuoteIcon /></div>
                <p className="quote-text">"{t.quote}"</p>
                <div className="card-sep"></div>
                <div className="author-row">
                  <div className="author-left">
                    <img className="avatar" src={t.avatar} alt={t.name} />
                    <div>
                      <span className="author-name">{t.name}</span>
                      <span className="author-role">{t.role}</span>
                    </div>
                  </div>
                  <div className="stars">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </div>
                </div>
                <div className="field-bar"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-row">
          {[0, 1, 2, 3, 4].map(i => (
            <div 
              key={i} 
              className={`bottom-dot ${activeDot === i ? 'active' : ''}`}
              onClick={() => setActiveDot(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentVoicesSection;
