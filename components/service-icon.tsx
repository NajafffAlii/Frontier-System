import {
  Bot,
  Cloud,
  Code2,
  Database,
  Globe2,
  Laptop,
  Layers,
  Lock,
  Monitor,
  Palette,
  RefreshCw,
  Settings2,
  Smartphone,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Bot,
  Cloud,
  Code2,
  Database,
  Globe2,
  Laptop,
  Layers,
  Lock,
  Monitor,
  Palette,
  RefreshCw,
  Settings2,
  Smartphone,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
};

export function ServiceIcon({
  name,
  className,
  ...props
}: {
  name: string;
  className?: string;
} & LucideProps) {
  const IconComponent = iconMap[name] || Globe2;
  return <IconComponent className={className} {...props} />;
}
