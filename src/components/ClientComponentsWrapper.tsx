"use client";

"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ClientComponentsWrapperProps {
  children: React.ReactNode;
}

const ClientComponentsWrapper = ({ children }: ClientComponentsWrapperProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true after mounting (client-side)
  }, []);

  // Render nothing on the server
  if (!mounted) {
    return null;
  }

  // Render the full layout on the client
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ClientComponentsWrapper;