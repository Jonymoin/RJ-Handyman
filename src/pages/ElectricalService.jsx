import ServicePageLayout from '../components/services/ServicePageLayout.jsx';
import { getServiceByPath } from '../lib/services.js';

export default function ElectricalService() {
  return <ServicePageLayout service={getServiceByPath('/electrical-service')} />;
}
