/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/layout/Footer';

const Enterprise: React.FC = () => {
    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className="hero-section" style={{paddingBottom: '60px'}}>
                <div className="hero-bg-accent" style={{background: 'radial-gradient(circle, rgba(11, 31, 51, 0.6) 0%, transparent 70%)'}}></div>
                <div className="container" style={{textAlign: 'center'}}>
                    <h1 className="hero-title">
                        Enterprise Grade<br />
                        <span className="text-gradient">Security & Control</span>
                    </h1>
                    <p className="hero-subtitle" style={{maxWidth: '700px'}}>
                        Chroma Enterprise V2.0 provides military-grade security simulations, audit logging, and role-based access control for large-scale design systems.
                    </p>
                    <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                        <Link to="/login" className="primary-btn">
                            <i className="fa-solid fa-lock"></i> Access Secure Portal
                        </Link>
                        <Link to="/docs" className="primary-btn" style={{background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-main)'}}>
                            View Documentation
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container" style={{marginBottom: '5rem'}}>
                <div className="stats-grid" style={{marginTop: '0'}}>
                    <div className="stat-card" style={{textAlign: 'left', padding: '2rem'}}>
                        <div style={{width: '50px', height: '50px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--gold)', fontSize: '1.5rem'}}>
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3 className="heading-md" style={{fontSize: '1.25rem', marginBottom: '1rem'}}>Zero-Trust Security</h3>
                        <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>
                            Simulated AES-256 encryption for local session storage. Multi-Factor Authentication (MFA) enforcement for all admin accounts.
                        </p>
                    </div>

                    <div className="stat-card" style={{textAlign: 'left', padding: '2rem'}}>
                         <div style={{width: '50px', height: '50px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#10B981', fontSize: '1.5rem'}}>
                            <i className="fa-solid fa-file-contract"></i>
                        </div>
                        <h3 className="heading-md" style={{fontSize: '1.25rem', marginBottom: '1rem'}}>Audit Logging</h3>
                        <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>
                            Complete traceability of user actions. The Security Command Center logs every login attempt, export, and configuration change.
                        </p>
                    </div>

                    <div className="stat-card" style={{textAlign: 'left', padding: '2rem'}}>
                         <div style={{width: '50px', height: '50px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#38BDF8', fontSize: '1.5rem'}}>
                            <i className="fa-solid fa-sitemap"></i>
                        </div>
                        <h3 className="heading-md" style={{fontSize: '1.25rem', marginBottom: '1rem'}}>SSO Integration</h3>
                        <p style={{color: 'var(--text-secondary)', lineHeight: '1.6'}}>
                             Seamless integration with your existing Identity Provider (IdP). Support for SAML 2.0 and OIDC (Simulated).
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Enterprise;
