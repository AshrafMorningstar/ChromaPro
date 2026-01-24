/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React, { useState } from 'react';
import { simulateColorBlindness } from '../utils/colorUtils';
import Footer from '../components/layout/Footer';

const VISION_TYPES = [
  { id: 'protanopia', label: 'Protanopia', desc: 'Red-Blind' },
  { id: 'deuteranopia', label: 'Deuteranopia', desc: 'Green-Blind' },
  { id: 'tritanopia', label: 'Tritanopia', desc: 'Blue-Blind' },
  { id: 'achromatopsia', label: 'Achromatopsia', desc: 'Monochromacy' }
];

const Vision: React.FC = () => {
    const [color, setColor] = useState('#D4AF37');

    return (
        <div style={{minHeight: '100vh', paddingTop: '100px'}}>
            <div className="container">
                <header style={{textAlign: 'center', marginBottom: '4rem'}}>
                    <h1 className="hero-title" style={{fontSize: '3rem'}}>Vision Simulator</h1>
                    <p className="hero-subtitle">Advanced accessibility testing for enterprise design.</p>
                </header>

                <div className="glass-panel" style={{padding: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '2rem', justifyContent: 'center'}}>
                    <div style={{textAlign: 'left'}}>
                        <label style={{display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)'}}>Base Color</label>
                        <div className="input-wrapper" style={{margin: 0, width: '300px'}}>
                            <div className="color-preview-square" style={{backgroundColor: color}}></div>
                            <input 
                                type="text" 
                                value={color} 
                                onChange={(e) => setColor(e.target.value)}
                                id="color-input"
                            />
                        </div>
                    </div>
                </div>

                <div className="stats-grid" style={{maxWidth: '1200px', gridTemplateColumns: 'repeat(4, 1fr)'}}>
                    {VISION_TYPES.map((type) => {
                        const simulated = simulateColorBlindness(color, type.id as any);
                        return (
                            <div key={type.id} className="stat-card" style={{padding: '2rem 1rem'}}>
                                <div style={{
                                    width: '80px', height: '80px', borderRadius: '50%', margin: '0 auto 1.5rem',
                                    background: simulated, boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                                }}></div>
                                <span className="stat-label">{type.label}</span>
                                <span className="stat-value" style={{fontSize: '1rem', marginBottom: '0.5rem'}}>{type.desc}</span>
                                <code style={{
                                    background: 'rgba(0,0,0,0.2)', padding: '4px 8px', borderRadius: '4px', 
                                    fontSize: '0.85rem', color: 'var(--gold)'
                                }}>{simulated}</code>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Vision;
