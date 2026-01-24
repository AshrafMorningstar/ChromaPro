/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import ColorInput from '../components/core/ColorInput';
import StatsGrid from '../components/core/StatsGrid';
import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleAnalyze = (color: string) => {
    // Navigate to Picker with clean HEX
    const clean = color.replace('#', '');
    navigate(`/picker?color=${clean}`);
  };

  return (
    <>
        <div className="hero-section">
            <div className="hero-bg-accent"></div>
            <div className="hero-bg-glow"></div>
            
            <div className="container">
                <span className="pro-badge" style={{ marginBottom: '1.5rem', display: 'inline-block' }}>ENTERPRISE DESIGN SYSTEM</span>
                <h1 className="hero-title">
                    Master the Art of<br />
                    <span className="text-gradient">Digital Color</span>
                </h1>
                <p className="hero-subtitle">
                    The world's most advanced color palette generator for professional designers and engineers.
                </p>

                <ColorInput onAnalyze={handleAnalyze} />
                
                <div className="quick-chips">
                    <span className="chip-label">TRENDING:</span>
                    <button className="color-chip" style={{ '--chip-color': '#05111D' } as React.CSSProperties}>Midnight Navy</button>
                    <button className="color-chip" style={{ '--chip-color': '#D4AF37' } as React.CSSProperties}>Authentic Gold</button>
                    <button className="color-chip" style={{ '--chip-color': '#9AA0A6' } as React.CSSProperties}>Steel Silver</button>
                </div>

                <StatsGrid />
            </div>
        </div>
        <Footer />
    </>
  );
};

export default Home;
