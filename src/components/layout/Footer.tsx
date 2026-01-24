/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="premium-footer">
        <div className="footer-grid">
            <div className="footer-column">
                <div className="logo" style={{ marginBottom: '1.5rem' }}>
                    <div className="logo-icon">
                        <div className="logo-square primary"></div>
                        <div className="logo-square accent"></div>
                    </div>
                    <div className="brand-name">Chroma<span className="brand-suffix">Pro</span></div>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem', maxWidth: '300px' }}>
                    The industry standard for color management and palette generation. Designed for enterprise design systems.
                </p>
            </div>
            
            <div className="footer-column">
                <h4>Product</h4>
                <Link to="/picker">Advanced Picker</Link>
                <Link to="/wheel">Color Wheel</Link>
                <Link to="/vision">Vision Simulator</Link>
                <Link to="/export">Enterprise Export</Link>
            </div>

            <div className="footer-column">
                <h4>Resources</h4>
                <Link to="/docs">Documentation</Link>
                <Link to="/api">API Reference</Link>
                <Link to="/status">System Status</Link>
            </div>

            <div className="footer-column">
                <h4>Legal</h4>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/security">Security</Link>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2026 Chroma Corp. All rights reserved. Enterprise V2.0</p>
        </div>
    </footer>
  );
};

export default Footer;
