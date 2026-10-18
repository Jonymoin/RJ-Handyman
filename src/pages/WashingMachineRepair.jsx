import ServicePageLayout from '../components/services/ServicePageLayout.jsx';
import { getServiceByPath } from '../lib/services.js';

export default function WashingMachineRepair() {
  return <ServicePageLayout service={getServiceByPath('/washing-machine-repair')} />;
}
