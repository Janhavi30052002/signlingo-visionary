
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const Index = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true });
  
  const features = [
    {
      title: "Real-time Detection",
      description: "Advanced AI algorithms detect and interpret Indian Sign Language gestures in real-time through your webcam.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 2v2"></path>
          <path d="M11 2v2"></path>
          <path d="M15 2v2"></path>
          <path d="M17 8c-.4 2.4-2.2 4.4-5 4.4S5.6 10.4 5.2 8"></path>
          <circle cx="9" cy="18" r="2"></circle>
          <circle cx="15" cy="18" r="2"></circle>
          <path d="M15 13v3"></path>
          <path d="M9 13v3"></path>
        </svg>
      )
    },
    {
      title: "Accurate Translation",
      description: "Our system provides accurate translations from Indian Sign Language to text, making communication seamless.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m5 8 6 6"></path>
          <path d="m4 14 10-10 6 6-10 10-6-6z"></path>
          <path d="M14 4v4h4"></path>
          <path d="M10 14v-4h-4"></path>
        </svg>
      )
    },
    {
      title: "Interactive Learning",
      description: "Learn Indian Sign Language through our interactive tutorials and practice with real-time feedback.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
          <path d="M12 8a2 2 0 0 0 2-2c0-.5-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6s-1 .2-1.4.6c-.4.4-.6.9-.6 1.4a2 2 0 0 0 2 2Z"></path>
        </svg>
      )
    },
    {
      title: "Accessibility Focus",
      description: "Built with accessibility in mind, our platform bridges communication gaps for the deaf and hard of hearing community.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m7 9 2 6h6l2-6"></path>
          <path d="M8 3a4 4 0 0 1 8 0"></path>
        </svg>
      )
    }
  ];

  const stats = [
    { value: "10M+", label: "Sign Language Users in India" },
    { value: "98%", label: "Detection Accuracy" },
    { value: "5000+", label: "Sign Vocabulary" },
    { value: "24/7", label: "Accessibility" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title={
          <>
            Bridging Communication Through <span className="text-primary">Indian Sign Language</span> Technology
          </>
        }
        subtitle="Our AI-powered platform detects and translates Indian Sign Language in real-time, making communication accessible for everyone."
        cta={{
          primary: {
            text: "Try the Demo",
            link: "/demo"
          },
          secondary: {
            text: "Learn More",
            link: "/learn"
          }
        }}
        image={{
          src: "https://images.unsplash.com/photo-1564527053362-4834a4948e22?q=80&w=2574&auto=format&fit=crop",
          alt: "Person using sign language"
        }}
      />
      
      <section className="py-20 relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <span>Features</span>
            </div>
            <h2 className="text-3xl font-display font-semibold md:text-4xl mb-4">
              Advanced Technology for Sign Language Detection
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform uses cutting-edge AI to detect and interpret Indian Sign Language, making communication seamless and accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section 
        ref={statsRef}
        className="py-20 relative bg-primary/5 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={cn(
                  "text-center transition-all duration-700",
                  statsInView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section 
        ref={ctaRef}
        className={cn(
          "py-20 relative overflow-hidden transition-all duration-700",
          ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container max-w-4xl">
          <div className="glass border border-white/20 rounded-2xl overflow-hidden shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-display font-semibold md:text-4xl mb-4">
              Ready to Experience Indian Sign Language Detection?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try our interactive demo to see how our technology can detect and translate Indian Sign Language in real-time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/demo"
                className="px-6 py-3 bg-primary text-white rounded-full font-medium shadow-button transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] focus-ring"
              >
                Try the Demo
              </Link>
              <Link
                to="/learn"
                className="px-6 py-3 bg-secondary text-foreground rounded-full font-medium shadow-button transition-all duration-300 hover:bg-secondary/80 active:scale-[0.98] focus-ring"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
