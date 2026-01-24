/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React from 'react';

const StatsGrid: React.FC = () => {
  return (
    <div className="stats-grid">
        <div className="stat-card">
            <span className="stat-label">System Status</span>
            <span className="stat-value" style={{ color: '#10B981' }}>● Operational</span>
        </div>
        <div className="stat-card">
            <span className="stat-label">Active Palettes</span>
            <span className="stat-value">12.4M+</span>
        </div>
        <div className="stat-card">
            <span className="stat-label">Enterprise Users</span>
            <span className="stat-value">850k+</span>
        </div>
    </div>
  );
};

export default StatsGrid;
