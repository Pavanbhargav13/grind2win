import styled, { css } from 'styled-components';
import { theme } from '@/styles/theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const getVariantStyles = (variant: ButtonVariant = 'primary') => {
  const variants = {
    primary: css`
      background-color: ${theme.colors.accent};
      color: ${theme.colors.primary};
      &:hover {
        filter: brightness(1.1);
      }
    `,
    secondary: css`
      background-color: ${theme.colors.gray[700]};
      color: ${theme.colors.white};
      &:hover {
        background-color: ${theme.colors.gray[600]};
      }
    `,
    outline: css`
      background-color: transparent;
      border: 2px solid ${theme.colors.accent};
      color: ${theme.colors.accent};
      &:hover {
        background-color: ${theme.colors.accent}20;
      }
    `,
    ghost: css`
      background-color: transparent;
      color: ${theme.colors.white};
      &:hover {
        background-color: ${theme.colors.gray[800]};
      }
    `,
  };
  return variants[variant];
};

const getSizeStyles = (size: ButtonSize = 'md') => {
  const sizes = {
    sm: css`
      padding: ${theme.spacing.xs} ${theme.spacing.sm};
      font-size: ${theme.typography.fontSize.sm};
    `,
    md: css`
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      font-size: ${theme.typography.fontSize.md};
    `,
    lg: css`
      padding: ${theme.spacing.md} ${theme.spacing.lg};
      font-size: ${theme.typography.fontSize.lg};
    `,
  };
  return sizes[size];
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all ${theme.transitions.fast};
  gap: ${theme.spacing.sm};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  
  ${({ variant }) => getVariantStyles(variant)}
  ${({ size }) => getSizeStyles(size)}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`; 
