'use client';

import AboutSection from '@/components/organisms/About';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import InfoAccordionSection from '@/components/organisms/Info';
import Navbar from '@/components/organisms/Navbar';
import OurProcessSection from '@/components/organisms/OurProcess';
import ProductSection from '@/components/organisms/Products';
import ServicesSection from '@/components/organisms/Services';
import TestimonialCarousel from '@/components/organisms/Testimonials';
import WhyChooseUsSection from '@/components/organisms/Why';
import { dataSite } from '@/data';

export default function Home() {
  return (
    <main>
      <Navbar data={dataSite} />
      <Hero data={dataSite} />
      <ServicesSection data={dataSite} />
      <OurProcessSection companyName={dataSite.name} />
      <WhyChooseUsSection companyName={dataSite.name} />
      <ProductSection data={dataSite} />
      <InfoAccordionSection data={dataSite} />
      <AboutSection data={dataSite} />

      <TestimonialCarousel data={dataSite} />
      <Footer />
    </main>
  );
}
