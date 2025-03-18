
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  cta?: {
    primary?: {
      text: string;
      link: string;
    };
    secondary?: {
      text: string;
      link: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
  backgroundAccent?: boolean;
}

const Hero = ({ 
  title, 
  subtitle, 
  cta, 
  image,
  backgroundAccent = true
}: HeroProps) => {
  const [containerRef, isInView] = useInView({ triggerOnce: true });
  
  return (
    <section 
      ref={containerRef} 
      className="relative overflow-hidden py-16 sm:py-24 lg:py-32"
    >
      {backgroundAccent && (
        <>
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        </>
      )}
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className={cn(
            "space-y-6 max-w-2xl transition-all duration-700 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="animate-pulse-subtle">Indian Sign Language Detection</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight">
              {title}
            </h1>
            
            <p className="text-xl text-foreground/80 leading-relaxed">
              {subtitle}
            </p>
            
            {cta && (
              <div className="flex flex-wrap gap-4 pt-4">
                {cta.primary && (
                  <Link
                    to={cta.primary.link}
                    className="px-6 py-3 bg-primary text-white rounded-full font-medium shadow-button transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] focus-ring"
                  >
                    {cta.primary.text}
                  </Link>
                )}
                
                {cta.secondary && (
                  <Link
                    to={cta.secondary.link}
                    className="px-6 py-3 bg-secondary text-foreground rounded-full font-medium shadow-button transition-all duration-300 hover:bg-secondary/80 active:scale-[0.98] focus-ring"
                  >
                    {cta.secondary.text}
                  </Link>
                )}
              </div>
            )}
          </div>
          
          {image && (
            <div className={cn(
              "relative transition-all duration-700 delay-300",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}>
              <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] bg-muted shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
