/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React, { useState } from 'react';
import Footer from '../components/layout/Footer';
import { getContrastRatio } from '../utils/colorConversion';

const Contrast: React.FC = () => {
    const [color1, setColor1] = useState('#FFFFFF');
    const [color2, setColor2] = useState('#0B1F33');

    const ratio = getContrastRatio(color1, color2);
    const score = ratio.toFixed(2);

    const checkWCAG = (level: 'AA' | 'AAA', type: 'normal' | 'large') => {
        const threshold = type === 'large' ? 3 : 4.5;
        const aaaThreshold = type === 'large' ? 4.5 : 7;
        const limit = level === 'AA' ? threshold : aaaThreshold;
        return ratio >= limit;
    };

    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className="container" style={{paddingTop: '100px', flex: 1}}>
                <header style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h1 className="heading-lg">Contrast Checker</h1>
                    <p style={{color: 'var(--text-muted)'}}>WCAG Accessibility Compliance</p>
                </header>

                <div className="glass-panel" style={{padding: '3rem', maxWidth: '900px', margin: '0 auto'}}>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                        {/* Foreground */}
                        <div>
                            <label className="stat-label">Foreground (Text)</label>
                            <div className="input-wrapper" style={{margin: '0.5rem 0'}}>
                                <div className="color-preview-square" style={{backgroundColor: color1}}></div>
                                <input type="text" value={color1} onChange={(e) => setColor1(e.target.value)} id="color-input" />
                            </div>
                        </div>
                        {/* Background */}
                         <div>
                            <label className="stat-label">Background</label>
                            <div className="input-wrapper" style={{margin: '0.5rem 0'}}>
                                <div className="color-preview-square" style={{backgroundColor: color2}}></div>
                                <input type="text" value={color2} onChange={(e) => setColor2(e.target.value)} id="color-input" />
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: '3rem', textAlign: 'center'}}>
                        <div style={{fontSize: '4rem', fontWeight: 'bold', fontFamily: 'Outfit', color: 'var(--text-main)'}}>
                            {score}
                        </div>
                        <span className="stat-label">Contrast Ratio</span>
                    </div>

                    {/* Preview */}
                    <div style={{marginTop: '3rem', background: color2, color: color1, padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)'}}>
                        <h2 className="heading-md" style={{margin: 0}}>The quick brown fox jumps over the lazy dog.</h2>
                        <p style={{marginTop: '0.5rem'}}>This is how your text looks on the background.</p>
                    </div>

                    {/* Scores */}
                    <div className="stats-grid" style={{marginTop: '2rem', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                        <div className="stat-card">
                            <span className="stat-label">AA Standard (Normal Text)</span>
                            <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginTop: '0.5rem', color: checkWCAG('AA', 'normal') ? '#10B981' : '#ff6b6b'}}>
                                {checkWCAG('AA', 'normal') ? 'PASS' : 'FAIL'}
                            </div>
                        </div>
                        <div className="stat-card">
                            <span className="stat-label">AAA Standard (Normal Text)</span>
                             <div style={{fontSize: '1.2rem', fontWeight: 'bold', marginTop: '0.5rem', color: checkWCAG('AAA', 'normal') ? '#10B981' : '#ff6b6b'}}>
                                {checkWCAG('AAA', 'normal') ? 'PASS' : 'FAIL'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contrast;
