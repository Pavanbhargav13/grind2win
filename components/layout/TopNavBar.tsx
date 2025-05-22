'use client';

import React from 'react';
import styled from 'styled-components';
import { FiSearch, FiUser } from 'react-icons/fi';
import { theme } from '../../styles/theme';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: ${theme.colors.primary};
  border-bottom: 1px solid ${theme.colors.gray[800]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.spacing.lg};
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.accent};
  cursor: pointer;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 ${theme.spacing.xl};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.xl};
  background-color: ${theme.colors.gray[800]};
  border: 1px solid ${theme.colors.gray[700]};
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.md};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.accent};
  }

  &::placeholder {
    color: ${theme.colors.gray[500]};
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: ${theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${theme.colors.gray[500]};
  width: 20px;
  height: 20px;
`;

const ProfileIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${theme.borderRadius.full};
  background-color: ${theme.colors.gray[700]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color ${theme.transitions.fast};

  &:hover {
    background-color: ${theme.colors.gray[600]};
  }
`;

export const TopNavBar: React.FC = () => {
  return (
    <Nav>
      <Logo>Grind2Win</Logo>
      <SearchContainer>
        <SearchIcon />
        <SearchInput placeholder="Search for learning resources, users, or topics..." />
      </SearchContainer>
      <ProfileIcon>
        <FiUser size={24} color={theme.colors.white} />
      </ProfileIcon>
    </Nav>
  );
};
