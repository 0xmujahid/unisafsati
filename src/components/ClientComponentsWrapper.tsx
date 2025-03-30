"use client";

"use client";

import { useState, useEffect } from "react";
import { initEmailJS } from '@/utils/emailjs-init';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Sidebar from './Sidebar';

interface ClientComponentsWrapperProps {
  children: React.ReactNode;
}

const ClientComponentsWrapper = ({ children }: ClientComponentsWrapperProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true after mounting (client-side)
    initEmailJS();
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
      <Sidebar />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ClientComponentsWrapper;