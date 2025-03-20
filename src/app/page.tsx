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

export default function Home() {
  return (
    <>
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
        <EducationalServices />
      </div>
    </>
  );
}
