// import VideoHero from "@/components/VideoHero";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Courses from "@/components/Courses";
import ApplyHere from "@/components/ApplyHere";
import WhyUnisef from "@/components/WhyUnisef";
import JobPlacement from '@/components/JobPlacement';
import StudentFinance from '@/components/StudentFinance';
import SuccessGuide from '@/components/SuccessGuide';
import EducationalServices from '@/components/EducationalServices';
import PromotionalBanner from '@/components/PromotionalBanner';
import Remote from '@/components/Remote';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Profile & Salome - National & International Student Consultancy',
  description: 'Expert national and international educational consultancy helping students apply inside and outside uk. We offer comprehensive support including visa guidance, student finance, and guaranteed job placement after graduation.'
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'Profile & Salome',
            description: 'national & International Student Consultancy',
            url: 'https://www.profilesalome.co.uk',
            logo: 'https://www.profilesalome.co.uk/images/logo.png',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'UK'
            },
            telephone: '+442039835819',
            email: 'info@profileandsalome.com',
            sameAs: [
              'https://www.facebook.com/profileandsalome',
              'https://www.instagram.com/profileandsalome',
              'https://www.linkedin.com/company/profileandsalome'
            ],
            offers: {
              '@type': 'Offer',
              name: 'University Application Support',
              description: 'Comprehensive support for UK university applications including UCAS guidance.',
              category: 'Educational Service'
            }
          })
        }}
      />
      <PromotionalBanner />
      {/* <VideoHero /> */}
      <Hero />
      <div id="learn-more">
        <Stats />
        <Courses />
        <ApplyHere />
        <WhyUnisef />
        <JobPlacement />
        <StudentFinance />
        <SuccessGuide />
        <Remote />
        <EducationalServices />
      </div>
    </>
  );
}
