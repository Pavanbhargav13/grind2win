import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
      gray: {
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      accent: string;
      white: string;
    },
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    },
    typography: {
      fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      },
      fontWeight: {
        medium: number;
        semibold: number;
        bold: number;
      }
    },
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    },
    transitions: {
      fast: string;
    }
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#4A90E2',    // A friendly blue color
    secondary: '#50E3C2',  // A mint green color
    text: '#333333',       // Dark gray for text
    background: '#FFFFFF', // White background
    gray: {
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937'
    },
    accent: '#FF6B6B',    // Accent color
    white: '#FFFFFF'      // Pure white
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '3rem'
  },
  typography: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem'
    },
    fontWeight: {
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px'
  },
  transitions: {
    fast: '0.2s'
  }
};
