# Profile & Salome Website

This is the official website for Profile & Salome, a UK & International Student Consultancy.

## Email Form Configuration

This website uses EmailJS for form submissions. Follow these steps to set up your EmailJS account:

### Setting up EmailJS

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service by connecting your email account (Gmail, Outlook, etc.)
3. Create two email templates:
   - **Application Template**: For the main application form
   - **Complaint Template**: For the complaint form

### Application Template

Create a template with the following variables:
- `from_name`: Applicant's full name
- `reply_to`: Applicant's email address
- `phone`: Applicant's phone number
- `course`: Course of interest
- `message`: Application message

Example template:
```
Subject: New Application from {{from_name}} - {{course}}

Name: {{from_name}}
Email: {{reply_to}}
Phone: {{phone}}
Course: {{course}}
Message: {{message}}
```

### Complaint Template

Create a template with the following variables:
- `from_name`: Complainant's full name
- `reply_to`: Complainant's email address
- `complaint_type`: Type of complaint
- `message`: Complaint details

Example template:
```
Subject: Complaint: {{complaint_type}} - {{from_name}}

Name: {{from_name}}
Email: {{reply_to}}
Complaint Type: {{complaint_type}}
Message: {{message}}
```

### Environment Variables Setup

1. Rename `.env.example` to `.env.local`
2. Fill in your EmailJS credentials:

```
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_APPLICATION_TEMPLATE_ID=your_application_template_id_here
NEXT_PUBLIC_EMAILJS_COMPLAINT_TEMPLATE_ID=your_complaint_template_id_here
```

3. Restart your development server to apply the changes

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Features

- SEO optimized
- Responsive design
- Contact forms with EmailJS integration
- University course information
- Job placement services

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
