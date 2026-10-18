import ServicePageLayout from '../components/services/ServicePageLayout.jsx';
import { getServiceByPath } from '../lib/services.js';

export default function DuctingService() {
  return <ServicePageLayout service={getServiceByPath('/ducting-service')} />;
}
