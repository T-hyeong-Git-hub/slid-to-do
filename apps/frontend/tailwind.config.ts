import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["'Pretendard Variable'", "Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        sans: ["'Pretendard Variable'", "Pretendard", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px', fontWeight: '300' }],    // Light
        sm: ['14px', { lineHeight: '20px', fontWeight: '400' }],    // Regular
        base: ['16px', { lineHeight: '24px', fontWeight: '400' }],  // Regular
        lg: ['18px', { lineHeight: '28px', fontWeight: '400' }],    // Regular
        xl: ['20px', { lineHeight: '28px', fontWeight: '400' }],    // Regular
        '2xl': ['24px', { lineHeight: '32px', fontWeight: '400' }], // Regular
        '3xl': ['30px', { lineHeight: '36px', fontWeight: '400' }], // Regular
      },
      fontWeight: {
        light: '300',      // Pretendard Light
        normal: '400',     // Pretendard Regular
        medium: '500',     // Pretendard Medium
        semibold: '600',   // Pretendard SemiBold
        bold: '700',       // Pretendard Bold
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        destructive: '#EF4444',
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        red: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;