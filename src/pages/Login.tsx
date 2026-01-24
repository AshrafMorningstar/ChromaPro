/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/layout/Footer';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const result = await login(username, password);
            if (result.success) {
                // For V2 demo, we skip MFA page and just go to Dashboard (or simulated MFA)
                // In a real app we'd redirect to /mfa
                navigate('/dashboard'); 
            } else {
                setError(result.error || 'Authentication failed');
            }
        } catch (err) {
            setError('System error. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <div className="container" style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div className="glass-panel" style={{maxWidth: '400px', width: '100%', padding: '2.5rem', marginTop: '4rem'}}>
                    <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                        <h2 className="heading-lg" style={{fontSize: '1.8rem', marginBottom: '0.5rem'}}>Enterprise Login</h2>
                        <p style={{color: 'var(--text-muted)'}}>Secure Access Portal V2.0</p>
                    </div>

                    {error && (
                        <div style={{
                            background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.3)',
                            color: '#ff6b6b', padding: '0.8rem', borderRadius: '8px', marginBottom: '1.5rem',
                            fontSize: '0.9rem', textAlign: 'center'
                        }}>
                            <i className="fa-solid fa-circle-exclamation"></i> {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin}>
                        <div style={{marginBottom: '1.5rem'}}>
                            <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Username</label>
                            <input 
                                type="text" 
                                className="modern-input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="e.g. admin"
                            />
                        </div>
                        <div style={{marginBottom: '2rem'}}>
                            <label style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>Password</label>
                            <input 
                                type="password" 
                                className="modern-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                            />
                        </div>
                        <button 
                            type="submit" 
                            id="action-btn" 
                            style={{width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '8px'}}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <><i className="fa-solid fa-circle-notch fa-spin"></i> Authenticating...</>
                            ) : (
                                <><i className="fa-solid fa-lock"></i> Secure Login</>
                            )}
                        </button>
                    </form>

                    <div style={{marginTop: '2rem', textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)'}}>
                        <p>Restricted Area. Unauthorized access is monitored.</p>
                        <p style={{marginTop: '0.5rem'}}>Session ID: <code style={{color: 'var(--gold)'}}>SEC_{Math.floor(Math.random()*10000)}</code></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
