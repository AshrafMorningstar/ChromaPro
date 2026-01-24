/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React, { useState } from 'react';
import Footer from '../components/layout/Footer';
import { cleanHex, hexToRgb, rgbToHex } from '../utils/colorConversion';

const Mixer: React.FC = () => {
    const [color1, setColor1] = useState('#FF0000');
    const [color2, setColor2] = useState('#0000FF');
    const [steps] = useState(10);

    const mixColors = () => {
        const c1 = hexToRgb(cleanHex(color1));
        const c2 = hexToRgb(cleanHex(color2));
        const mixes = [];

        for (let i = 0; i <= steps; i++) {
            const factor = i / steps;
            const r = Math.round(c1.r + (c2.r - c1.r) * factor);
            const g = Math.round(c1.g + (c2.g - c1.g) * factor);
            const b = Math.round(c1.b + (c2.b - c1.b) * factor);
            mixes.push(rgbToHex(r, g, b));
        }
        return mixes;
    };

    const mixedPalette = mixColors();

    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
             <div className="container" style={{paddingTop: '100px', flex: 1}}>
                <header style={{textAlign: 'center', marginBottom: '3rem'}}>
                    <h1 className="heading-lg">Color Mixer</h1>
                    <p style={{color: 'var(--text-muted)'}}>Blend two colors to create a perfect gradient.</p>
                </header>

                <div className="glass-panel" style={{padding: '3rem', maxWidth: '800px', margin: '0 auto'}}>
                    <div style={{display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem'}}>
                         <div className="input-wrapper" style={{margin: 0, width: '200px'}}>
                            <div className="color-preview-square" style={{backgroundColor: color1}}></div>
                            <input type="text" value={color1} onChange={(e) => setColor1(e.target.value)} id="color-input" />
                        </div>
                        <i className="fa-solid fa-plus" style={{color: 'var(--text-muted)'}}></i>
                        <div className="input-wrapper" style={{margin: 0, width: '200px'}}>
                            <div className="color-preview-square" style={{backgroundColor: color2}}></div>
                            <input type="text" value={color2} onChange={(e) => setColor2(e.target.value)} id="color-input" />
                        </div>
                    </div>

                    <div style={{display: 'flex', height: '100px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.2)'}}>
                        {mixedPalette.map((c, i) => (
                            <div key={i} title={c} style={{flex: 1, background: c, display: 'flex', alignItems: 'end', justifyContent: 'center', paddingBottom: '10px'}}>
                            </div>
                        ))}
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem'}}>
                         {mixedPalette.map((c, i) => (
                            <div key={i} style={{fontSize: '0.75rem', fontFamily: 'monospace', transform: 'rotate(-45deg)', transformOrigin: 'top left', marginTop: '10px'}}>{c}</div>
                        ))}
                    </div>
                </div>
             </div>
             <Footer />
        </div>
    );
};

export default Mixer;
