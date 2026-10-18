import { Droplets, Zap, Wind, WashingMachine, Wrench } from 'lucide-react';

const ICONS = { Droplets, Zap, Wind, WashingMachine };

export default function ServiceIcon({ name, className = 'h-6 w-6' }) {
  const Icon = ICONS[name] || Wrench;
  return <Icon className={className} aria-hidden="true" />;
}
