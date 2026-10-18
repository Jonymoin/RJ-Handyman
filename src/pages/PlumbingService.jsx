import ServicePageLayout from '../components/services/ServicePageLayout.jsx';
import { getServiceByPath } from '../lib/services.js';

export default function PlumbingService() {
  return <ServicePageLayout service={getServiceByPath('/plumbing-service')} />;
}
