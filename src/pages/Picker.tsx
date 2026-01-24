/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import { cleanHex, hexToRgb, rgbToHsl, rgbToCmyk, generateShades, generateTints } from '../utils/colorConversion';

const Picker: React.FC = () => {
    const location = useLocation();
    const [hex, setHex] = useState('0B1F33');
    const [copied, setCopied] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const colorParam = params.get('color');
        if (colorParam) {
            setHex(cleanHex(colorParam).toUpperCase());
        }
    }, [location]);

    // Derived Values
    const rgb = hexToRgb(hex);
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const cmyk = rgbToCmyk(rgb.r, rgb.g, rgb.b);
    const shades = generateShades(hex, 9);
    const tints = generateTints(hex, 9);

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(''), 2000);
    };

    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className="container" style={{paddingTop: '100px', flex: 1}}>
                <header style={{marginBottom: '3rem', textAlign: 'center'}}>
                    <h1 className="heading-lg">Color Analysis</h1>
                    <p style={{color: 'var(--text-muted)'}}>Technical breakdown for <span style={{color: 'var(--gold)'}}>#{hex}</span></p>
                </header>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start'}}>
                    {/* Big Preview */}
                    <div className="glass-panel" style={{padding: '3rem', textAlign: 'center'}}>
                        <div style={{
                            width: '100%', aspectRatio: '1/1', background: `#${hex}`, 
                            borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                            marginBottom: '2rem'
                        }}></div>
                        <h2 className="heading-md" style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>#{hex}</h2>
                        <button 
                            className="primary-btn" 
                            style={{marginTop: '1rem', width: '100%'}}
                            onClick={() => copyToClipboard(`#${hex}`, 'HEX')}
                        >
                            {copied === 'HEX' ? <><i className="fa-solid fa-check"></i> Copied</> : <><i className="fa-regular fa-copy"></i> Copy HEX</>}
                        </button>
                    </div>

                    {/* Data Grid */}
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                        {/* RGB Card */}
                        <div className="stat-card" style={{textAlign: 'left'}}>
                            <span className="stat-label">RGB Model</span>
                            <div style={{fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'monospace', margin: '0.5rem 0'}}>
                                rgb({rgb.r}, {rgb.g}, {rgb.b})
                            </div>
                            <small style={{color: 'var(--text-muted)'}}>Red: {rgb.r} Green: {rgb.g} Blue: {rgb.b}</small>
                        </div>

                        {/* HSL Card */}
                        <div className="stat-card" style={{textAlign: 'left'}}>
                            <span className="stat-label">HSL Model</span>
                            <div style={{fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'monospace', margin: '0.5rem 0'}}>
                                hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
                            </div>
                            <small style={{color: 'var(--text-muted)'}}>Hue: {hsl.h}° Sat: {hsl.s}% Light: {hsl.l}%</small>
                        </div>

                        {/* CMYK Card */}
                        <div className="stat-card" style={{textAlign: 'left'}}>
                            <span className="stat-label">CMYK (Print)</span>
                            <div style={{fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'monospace', margin: '0.5rem 0'}}>
                                cmyk({cmyk.c}, {cmyk.m}, {cmyk.y}, {cmyk.k})
                            </div>
                            <small style={{color: 'var(--text-muted)'}}>Cyan: {cmyk.c}% Magenta: {cmyk.m}%</small>
                        </div>

                         {/* CSS Card */}
                         <div className="stat-card" style={{textAlign: 'left'}}>
                            <span className="stat-label">CSS Variable</span>
                            <div style={{fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'monospace', margin: '0.5rem 0', wordBreak: 'break-all'}}>
                                --color-main: #{hex};
                            </div>
                            <button 
                                style={{background: 'transparent', border: 'none', color: 'var(--gold)', cursor: 'pointer', padding: 0}}
                                onClick={() => copyToClipboard(`--color-main: #${hex};`, 'CSS')}
                            >
                                {copied === 'CSS' ? 'Copied!' : 'Copy Snippet'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Shades & Tints */}
                <div style={{marginTop: '4rem'}}>
                    <h3 className="heading-md" style={{marginBottom: '1.5rem'}}>Shades & Tints</h3>
                    
                    <div style={{marginBottom: '2rem'}}>
                        <span className="stat-label">Tints (Lighten)</span>
                        <div style={{display: 'flex', height: '60px', marginTop: '0.5rem', borderRadius: '12px', overflow: 'hidden'}}>
                            {tints.map((c, i) => (
                                <div key={i} title={c} style={{flex: 1, background: c, cursor: 'pointer'}} onClick={() => copyToClipboard(c, `TINT_${i}`)}></div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <span className="stat-label">Shades (Darken)</span>
                         <div style={{display: 'flex', height: '60px', marginTop: '0.5rem', borderRadius: '12px', overflow: 'hidden'}}>
                            {shades.map((c, i) => (
                                <div key={i} title={c} style={{flex: 1, background: c, cursor: 'pointer'}} onClick={() => copyToClipboard(c, `SHADE_${i}`)}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Picker;
