// src/components/ClientLayout.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import ClientComponentsWrapper with SSR disabled
const ClientComponentsWrapper = dynamic(
  () => import("@/components/ClientComponentsWrapper"),
  { ssr: false } // Disable SSR for this component
);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientComponentsWrapper>{children}</ClientComponentsWrapper>;
}