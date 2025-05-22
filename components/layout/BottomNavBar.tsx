"use client";

import React from 'react';
import styled from 'styled-components';
import { FiUsers, FiPlay, FiCheckSquare, FiTrendingUp } from 'react-icons/fi';
import { theme } from '../../styles/theme';

interface NavItemProps {
  active?: boolean;
}

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${theme.colors.primary};
  border-top: 1px solid ${theme.colors.gray[800]};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${theme.spacing.xs} 0;
  z-index: 1000;
`;

const NavItem = styled.button<NavItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${({ active }) => (active ? theme.colors.accent : theme.colors.gray[400])};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${({ active }) =>
    active ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.medium};
  transition: color ${theme.transitions.fast};
  padding: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.md};

  &:hover {
    color: ${theme.colors.accent};
    background-color: ${theme.colors.gray[800]};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

interface BottomNavBarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({
  activeTab = 'community',
  onTabChange = () => {},
}) => {
  const tabs = [
    { id: 'community', label: 'Community', icon: FiUsers },
    { id: 'reels', label: 'Reels', icon: FiPlay },
    { id: 'tasks', label: 'Tasks', icon: FiCheckSquare },
    { id: 'streaks', label: 'Streaks', icon: FiTrendingUp },
  ];

  return (
    <Nav>
      {tabs.map(({ id, label, icon: Icon }) => (
        <NavItem
          key={id}
          active={activeTab === id}
          onClick={() => onTabChange(id)}
        >
          <IconWrapper>
            <Icon size={24} />
          </IconWrapper>
          {label}
        </NavItem>
      ))}
    </Nav>
  );
};
