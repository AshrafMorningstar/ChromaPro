/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

interface ColorInputProps {
  onAnalyze: (color: string) => void;
  initialColor?: string;
}

const ColorInput: React.FC<ColorInputProps> = ({ onAnalyze, initialColor = '#0B1F33' }) => {
  const [color, setColor] = useState(initialColor);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnalyze(color);
  };

  return (
    <form onSubmit={handleSubmit} className="input-wrapper">
        <div className="color-preview-square" style={{ backgroundColor: color }}></div>
        <input 
            type="text" 
            id="color-input" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="Enter HEX code (e.g. #0B1F33)"
            spellCheck={false}
        />
        <button type="submit" id="action-btn">
            <FontAwesomeIcon icon={faWandMagicSparkles} style={{ marginRight: '8px' }} />
            Analyze
        </button>
    </form>
  );
};

export default ColorInput;
