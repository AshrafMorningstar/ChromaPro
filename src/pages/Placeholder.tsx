/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const Placeholder: React.FC = () => {
    const location = useLocation();
    const pageName = location.pathname.replace('/', '').charAt(0).toUpperCase() + location.pathname.slice(2);

    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className="container" style={{flex: 1, paddingTop: '150px', textAlign: 'center'}}>
                <div className="glass-panel" style={{padding: '4rem', maxWidth: '600px', margin: '0 auto'}}>
                    <h1 className="heading-xl" style={{marginBottom: '1rem', color: 'var(--gold)'}}>
                        {pageName} 
                    </h1>
                    <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem'}}>
                        This advanced module is currently being ported to the React V2.0 Engine.
                    </p>
                    <div style={{display: 'inline-block', padding: '1rem 2rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '8px', border: '1px solid var(--gold)'}}>
                        <i className="fa-solid fa-code-commit"></i> Status: <strong>In Development</strong>
                    </div>
                    <div style={{marginTop: '3rem'}}>
                        <Link to="/" className="primary-btn" style={{textDecoration: 'none'}}>
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Placeholder;
