import emailjs from '@emailjs/browser';

// Get the public key - can be used both on the client and server
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

// Initialize EmailJS with the public key
export const initEmailJS = () => {
  try {
    emailjs.init(PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

// Helper function to send emails that includes the public key
export const sendEmailWithJS = (
  serviceId: string,
  templateId: string,
  form: HTMLFormElement
) => {
  return emailjs.sendForm(
    serviceId,
    templateId,
    form,
    PUBLIC_KEY
  );
};

// Configuration object with template and service IDs
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  APPLICATION_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_APPLICATION_TEMPLATE_ID || '',
  COMPLAINT_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_COMPLAINT_TEMPLATE_ID || '',
}; 