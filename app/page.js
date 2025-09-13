import AdditionalInfoSection from "@/components/AdditionalInfoSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";
import PromotionSection from "@/components/PromotionSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection></HeroSection>
    <MainSection></MainSection>
    <AdditionalInfoSection></AdditionalInfoSection>
    <PromotionSection></PromotionSection>
    <Footer></Footer>
    </>
  );
}
