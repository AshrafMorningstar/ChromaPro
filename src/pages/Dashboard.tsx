/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import StatsGrid from '../components/core/StatsGrid';
import Footer from '../components/layout/Footer';

const Dashboard: React.FC = () => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className="container" style={{paddingTop: '100px', flex: 1}}>
                <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem'}}>
                    <div>
                        <h1 className="heading-lg">Security Command Center</h1>
                        <p style={{color: 'var(--text-muted)'}}>Welcome back, <span style={{color: 'var(--gold)'}}>{user?.username}</span></p>
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <div className="badge" style={{marginBottom: '0.5rem', display: 'inline-block'}}>
                            <i className="fa-solid fa-shield-halved"></i> SECURE MODE
                        </div>
                        <div style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                            Last Login: {new Date().toLocaleTimeString()}
                        </div>
                    </div>
                </header>

                <StatsGrid />

                <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginTop: '3rem'}}>
                    {/* Main Panel */}
                    <div className="glass-panel" style={{padding: '2rem'}}>
                        <h3 className="heading-md" style={{marginBottom: '1.5rem'}}>Live Threat Intelligence</h3>
                        <div style={{height: '300px', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--glass-border)'}}>
                            <p style={{color: 'var(--text-muted)'}}>[Mock Chart: Real-time Traffic Analysis]</p>
                        </div>
                        <div style={{marginTop: '1.5rem', display: 'flex', gap: '1rem'}}>
                            <button className="primary-btn" style={{fontSize: '0.8rem', padding: '0.6rem 1.2rem'}}>Run Audit</button>
                            <button className="primary-btn" style={{background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--text-main)', fontSize: '0.8rem'}}>Export Logs</button>
                        </div>
                    </div>

                    {/* Side Panel */}
                    <div className="glass-panel" style={{padding: '2rem'}}>
                         <h3 className="heading-md" style={{marginBottom: '1.5rem'}}>System Health</h3>
                         <ul style={{listStyle: 'none'}}>
                             {['API Gateway', 'Auth Service', 'Database Shard 01', 'CDN Edge'].map((item, i) => (
                                 <li key={i} style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.8rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px'}}>
                                     <span>{item}</span>
                                     <span style={{color: '#10B981', fontWeight: 'bold'}}>ONLINE</span>
                                 </li>
                             ))}
                         </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
