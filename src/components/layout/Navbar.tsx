/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faAngleDown, faGaugeHigh, faLock, faRightFromBracket, faHome, faEyeDropper, faCircleNotch, faTools, faRightLeft, faUniversalAccess, faFlask } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isLightMode, setIsLightMode] = useState(document.body.classList.contains('light-mode'));
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const toggleTheme = () => {
    document.body.classList.toggle('light-mode');
    setIsLightMode(!isLightMode);
  };

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <nav className="premium-nav">
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            <div className="logo-square primary"></div>
            <div className="logo-square accent"></div>
          </div>
          <div className="brand-name">
            Chroma<span className="brand-suffix">Pro</span>
            <span className="pro-badge">V2.0</span>
          </div>
        </Link>

        {/* Links */}
        <div className="nav-links">
          <Link to="/" className={`nav-item ${isActive('/')}`}>
            <FontAwesomeIcon icon={faHome} /> Home
          </Link>
          <Link to="/picker" className={`nav-item ${isActive('/picker')}`}>
            <FontAwesomeIcon icon={faEyeDropper} /> Picker
          </Link>
          <Link to="/wheel" className={`nav-item ${isActive('/wheel')}`}>
            <FontAwesomeIcon icon={faCircleNotch} /> Wheel
          </Link>

          {/* Wrapper for Dropdown */}
          <div className="nav-item-dropdown">
            <span className="nav-item" style={{cursor: 'default'}}>
              <FontAwesomeIcon icon={faTools} /> Tools <FontAwesomeIcon icon={faAngleDown} style={{fontSize: '0.7em', marginLeft: '4px'}} />
            </span>
            <div className="dropdown-menu">
              <Link to="/converter" className="dropdown-item">
                <FontAwesomeIcon icon={faRightLeft} /> Converter
              </Link>
              <Link to="/contrast" className="dropdown-item">
                <FontAwesomeIcon icon={faUniversalAccess} /> Contrast Check
              </Link>
              <Link to="/mixer" className="dropdown-item">
                <FontAwesomeIcon icon={faFlask} /> Color Mixer
              </Link>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} className="icon-btn" style={{ background: 'transparent', border: '1px solid var(--glass-border)', color: 'var(--gold)', width: '36px', height: '36px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <FontAwesomeIcon icon={isLightMode ? faMoon : faSun} />
          </button>

          {isAuthenticated ? (
            <div style={{display: 'flex', gap: '10px'}}>
                <Link to="/dashboard" className="primary-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
                    <FontAwesomeIcon icon={faGaugeHigh} /> Dashboard
                </Link>
                 <button onClick={logout} className="primary-btn" style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', background: 'rgba(255,50,50,0.2)', color: '#ff6b6b' }}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
            </div>
          ) : (
            <Link to="/login" className="primary-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', textDecoration: 'none' }}>
                <FontAwesomeIcon icon={faLock} /> Enterprise Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
