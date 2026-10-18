import SEO from '../common/SEO.jsx';
import FAQ from '../home/FAQ.jsx';
import ServiceAreas from '../home/ServiceAreas.jsx';
import ServiceHero from './ServiceHero.jsx';
import ServiceDetails from './ServiceDetails.jsx';
import ServiceCTA from './ServiceCTA.jsx';
import RelatedServices from './RelatedServices.jsx';
import { breadcrumbSchema, faqSchema } from '../../lib/seoConfig.js';

/**
 * One shared layout for all four service pages — the content differs per service
 * (see src/lib/services.js), the structure stays consistent:
 * breadcrumbs → hero → details → CTA → FAQ → service area → CTA → related services.
 */
export default function ServicePageLayout({ service }) {
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: service.name, to: service.path },
  ];

  return (
    <>
      <SEO
        title={service.seo.title}
        description={service.seo.description}
        path={service.path}
        image={service.images.hero}
        schema={[breadcrumbSchema(breadcrumbs), faqSchema(service.faqs)]}
      />
      <ServiceHero service={service} breadcrumbs={breadcrumbs} />
      <ServiceDetails service={service} />
      <ServiceCTA service={service} variant="brand" />
      <FAQ items={service.faqs} title={service.faqsHeading} tone="light" />
      <ServiceAreas
        heading={`${service.name} Across Singapore`}
        text={service.areaText}
        service={service.enquiryName}
      />
      <ServiceCTA service={service} variant="light" />
      <RelatedServices currentSlug={service.slug} />
    </>
  );
}
