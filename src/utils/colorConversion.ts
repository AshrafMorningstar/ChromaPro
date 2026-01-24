/*
 * Copyright (c) 2026 Ashraf Morningstar
 * These are personal recreations of existing projects, developed by Ashraf Morningstar
 * for learning and skill development.
 * Original project concepts remain the intellectual property of their respective creators.
 * Repository: https://github.com/AshrafMorningstar
 */

// Utility to clean HEX code
export const cleanHex = (hex: string) => {
    const cleaned = hex.replace('#', '');
    return cleaned.length === 6 ? cleaned : '000000'; // Fallback
};

// HEX to RGB
export const hexToRgb = (hex: string) => {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
};

// RGB to HEX
export const rgbToHex = (r: number, g: number, b: number) => {
    const toHex = (c: number) => {
        const hex = Math.round(c).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return '#' + toHex(r) + toHex(g) + toHex(b);
};

// RGB to HSL
export const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { 
        h: Math.round(h * 360), 
        s: Math.round(s * 100), 
        l: Math.round(l * 100) 
    };
};

// RGB to CMYK
export const rgbToCmyk = (r: number, g: number, b: number) => {
    let c = 1 - (r / 255);
    let m = 1 - (g / 255);
    let y = 1 - (b / 255);
    let k = Math.min(c, Math.min(m, y));

    c = (c - k) / (1 - k) || 0;
    m = (m - k) / (1 - k) || 0;
    y = (y - k) / (1 - k) || 0;

    return {
        c: Math.round(c * 100),
        m: Math.round(m * 100),
        y: Math.round(y * 100),
        k: Math.round(k * 100)
    };
};

// Get Luminance (for Contrast)
export const getLuminance = (r: number, g: number, b: number) => {
    const a = [r, g, b].map(v => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

// Get Contrast Ratio
export const getContrastRatio = (hex1: string, hex2: string) => {
    const rgb1 = hexToRgb(cleanHex(hex1));
    const rgb2 = hexToRgb(cleanHex(hex2));
    const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
    const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
};

// Generate Shades
export const generateShades = (hex: string, steps: number = 10) => {
    const { r, g, b } = hexToRgb(cleanHex(hex));
    const shades = [];
    for (let i = 0; i < steps; i++) {
        const factor = i / steps;
        // Darken
        shades.push(rgbToHex(r * (1 - factor), g * (1 - factor), b * (1 - factor)));
    }
    return shades;
};

// Generate Tints
export const generateTints = (hex: string, steps: number = 10) => {
    const { r, g, b } = hexToRgb(cleanHex(hex));
    const tints = [];
    for (let i = 0; i < steps; i++) {
        const factor = i / steps;
        // Lighten
        tints.push(rgbToHex(
            r + (255 - r) * factor,
            g + (255 - g) * factor,
            b + (255 - b) * factor
        ));
    }
    return tints;
};
