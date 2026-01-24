/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React, { useState } from 'react';
import Footer from '../components/layout/Footer';
import { hexToRgb, rgbToHsl, rgbToCmyk } from '../utils/colorConversion';

const Converter: React.FC = () => {
    const [hex, setHex] = useState('0B1F33');

    // Derived values
    const rgb = hexToRgb(hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);

    const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        if (val.startsWith('#')) val = val.slice(1);
        if (val.length <= 6) setHex(val); 
    };

    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className="container" style={{paddingTop: '100px', flex: 1}}>
                <header style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h1 className="heading-lg">Format Converter</h1>
                    <p style={{color: 'var(--text-muted)'}}>Universal color syntax translator.</p>
                </header>

                <div className="glass-panel" style={{padding: '3rem', maxWidth: '800px', margin: '0 auto'}}>
                    {/* Primary Input */}
                    <div style={{marginBottom: '2rem'}}>
                        <label className="stat-label">HEX Input</label>
                        <div className="input-wrapper" style={{margin: '0.5rem 0', maxWidth: '100%'}}>
                            <div className="color-preview-square" style={{backgroundColor: `#${hex}`}}></div>
                            <input 
                                type="text" 
                                value={`#${hex.toUpperCase()}`} 
                                onChange={handleHexChange}
                                id="color-input"
                                style={{width: '100%'}}
                            />
                        </div>
                    </div>

                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem'}}>
                        <div className="stat-card">
                            <span className="stat-label">RGB</span>
                            <div style={{fontWeight: 'bold', fontSize: '1.1rem', margin: '1rem 0'}}>
                                {`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`}
                            </div>
                        </div>
                        <div className="stat-card">
                            <span className="stat-label">HSL</span>
                             <div style={{fontWeight: 'bold', fontSize: '1.1rem', margin: '1rem 0'}}>
                                {`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`}
                            </div>
                        </div>
                        <div className="stat-card">
                            <span className="stat-label">CMYK</span>
                             <div style={{fontWeight: 'bold', fontSize: '1.1rem', margin: '1rem 0'}}>
                                {`cmyk(${cmyk.c}, ${cmyk.m}, ${cmyk.y}, ${cmyk.k})`}
                            </div>
                        </div>
                    </div>

                    <div style={{marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
                        <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem'}}>JSON Output</p>
                        <code style={{display: 'block', color: 'var(--gold)', fontFamily: 'monospace'}}>
                            {JSON.stringify({ hex: `#${hex}`, rgb, hsl, cmyk }, null, 2)}
                        </code>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Converter;
