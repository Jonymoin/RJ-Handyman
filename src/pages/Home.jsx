import SEO from '../components/common/SEO.jsx';
import Hero from '../components/home/Hero.jsx';
import ServicesSection from '../components/home/ServicesSection.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';
import HowItWorks from '../components/home/HowItWorks.jsx';
import ServiceAreas from '../components/home/ServiceAreas.jsx';
import FAQ from '../components/home/FAQ.jsx';
import FinalCTA from '../components/home/FinalCTA.jsx';
import { HOME_FAQS } from '../lib/faqs.js';
import { PAGE_SEO, faqSchema, localBusinessSchema } from '../lib/seoConfig.js';

export default function Home() {
  const { title, description, path } = PAGE_SEO.home;
  return (
    <>
      <SEO title={title} description={description} path={path} schema={[localBusinessSchema(), faqSchema(HOME_FAQS)]} />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <ServiceAreas />
      <FAQ items={HOME_FAQS} />
      <FinalCTA />
    </>
  );
}
