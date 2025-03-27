// src/components/ClientLayout.tsx
"use client";

import dynamic from "next/dynamic";
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

// Dynamically import ClientComponentsWrapper with SSR disabled
const ClientComponentsWrapper = dynamic(
  () => import('./ClientComponentsWrapper'),
  { ssr: false }
);

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClientComponentsWrapper>
      {children}
    </ClientComponentsWrapper>
  );
};

export default ClientLayout;