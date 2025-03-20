
import React from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  index
}) => {
  const [ref, isInView] = useInView<HTMLDivElement>({ triggerOnce: true });
  
  return (
    <div 
      ref={ref}
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-500 shadow-subtle",
        "hover:shadow-glass-hover hover:scale-[1.02] active:scale-[0.98]",
        "group p-6 glass border border-white/20",
        isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-16"
      )}
      style={{ 
        transitionDelay: `${100 + index * 100}ms`
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/70 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0 relative flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
          {icon}
          <div className="absolute inset-0 rounded-lg bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-semibold leading-tight text-foreground">{title}</h3>
          <p className="text-foreground/75 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
