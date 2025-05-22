import './globals.css';
import type { Metadata } from 'next';
import TopNav from '@/components/navigation/TopNav';
import BottomNav from '@/components/navigation/BottomNav';

export const metadata: Metadata = {
  title: 'Grind2Win - Motivational Learning Platform',
  description: 'A futuristic platform for habit-building and consistent learning',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        <main>{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
