'use client';

import React from 'react';
import styled from 'styled-components';
import { TopNavBar } from '../components/layout/TopNavBar';
import { BottomNavBar } from '../components/layout/BottomNavBar';
import { theme } from '../styles/theme';
import StyledComponentsRegistry from './registry';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const LayoutContainer = styled.div`
  min-height: 100vh;
  padding-top: 64px;
  padding-bottom: 60px;
  background-color: ${theme.colors.primary};
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LayoutContainer>
              <TopNavBar />
              <Main>{children}</Main>
              <BottomNavBar />
            </LayoutContainer>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
