
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const Learn = () => {
  const [resourcesRef, resourcesInView] = useInView({ triggerOnce: true });
  
  const learningResources = [
    {
      title: "Introduction to Indian Sign Language",
      description: "Learn the basics of Indian Sign Language, its history, and importance in the deaf community.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2670&auto=format&fit=crop",
      link: "#introduction"
    },
    {
      title: "Alphabets and Numbers",
      description: "Master the ISL alphabets and numbers with our interactive tutorials and practice exercises.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop",
      link: "#alphabets"
    },
    {
      title: "Common Phrases",
      description: "Learn everyday phrases in Indian Sign Language to start basic conversations.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop",
      link: "#phrases"
    },
    {
      title: "Grammar and Structure",
      description: "Understand the grammar rules and sentence structures in Indian Sign Language.",
      image: "https://images.unsplash.com/photo-1531498860502-7c67cf02f657?q=80&w=2670&auto=format&fit=crop",
      link: "#grammar"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title={
          <>
            Learn Indian Sign Language with <span className="text-primary">Interactive Resources</span>
          </>
        }
        subtitle="Explore our comprehensive learning materials designed to help you understand and practice Indian Sign Language effectively."
        cta={{
          primary: {
            text: "Get Started",
            link: "#resources"
          }
        }}
        backgroundAccent={false}
      />
      
      <section id="about-isl" className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                <span>About Indian Sign Language</span>
              </div>
              <h2 className="text-3xl font-display font-semibold md:text-4xl mb-4">
                Understanding Indian Sign Language
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Indian Sign Language (ISL) is a complex visual-gestural language used by the deaf community in India. Unlike spoken languages, ISL uses hand shapes, facial expressions, and body movements to convey meaning.
                </p>
                <p>
                  With over 10 million deaf and hard of hearing individuals in India, ISL serves as a primary means of communication for a significant portion of the population.
                </p>
                <p>
                  ISL has its own grammar, syntax, and vocabulary distinct from spoken Indian languages like Hindi, Tamil, or Bengali. It is not a direct translation of any spoken language but a language in its own right.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-video bg-muted shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                  alt="People learning sign language"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-40" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      
      <section 
        id="resources" 
        ref={resourcesRef}
        className="py-16 bg-secondary/30"
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <span>Learning Resources</span>
            </div>
            <h2 className="text-3xl font-display font-semibold md:text-4xl mb-4">
              Comprehensive Learning Materials
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our curated resources designed to help you learn Indian Sign Language at your own pace.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {learningResources.map((resource, index) => (
              <a
                key={resource.title}
                href={resource.link}
                className={cn(
                  "group relative overflow-hidden rounded-xl glass border border-white/20 shadow-subtle",
                  "hover:shadow-glass-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
                  "h-full flex flex-col transition-all duration-700",
                  resourcesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>
                
                <div className="flex-grow p-6">
                  <h3 className="text-xl font-medium mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <div className="text-primary font-medium flex items-center mt-auto group-hover:translate-x-1 transition-transform duration-300">
                    <span>Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold mb-4">
              Learning Pathways
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a learning path based on your goals and experience level
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                title: "Beginner's Path",
                description: "Start with the basics of Indian Sign Language, including alphabets, numbers, and simple greetings.",
                duration: "4 weeks",
                difficulty: "Easy"
              },
              {
                title: "Conversational Path",
                description: "Build your vocabulary and learn to hold basic conversations in Indian Sign Language.",
                duration: "8 weeks",
                difficulty: "Intermediate"
              },
              {
                title: "Advanced Path",
                description: "Master complex grammar, expressions, and cultural nuances of Indian Sign Language.",
                duration: "12 weeks",
                difficulty: "Advanced"
              }
            ].map((path, index) => (
              <div key={index} className="glass border border-white/20 rounded-lg p-6 shadow-subtle">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{path.title}</h3>
                    <p className="text-muted-foreground mb-3">{path.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                        {path.duration}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium">
                        {path.difficulty}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="#"
                    className="shrink-0 px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-button transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] focus-ring"
                  >
                    Start Path
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container max-w-4xl">
          <div className="glass border border-white/20 rounded-2xl overflow-hidden shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-display font-semibold md:text-4xl mb-4">
              Ready to Put Your Skills to the Test?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Try our interactive demo to practice your Indian Sign Language recognition and see how our technology can help you learn.
            </p>
            <Link
              to="/demo"
              className="px-6 py-3 bg-primary text-white rounded-full font-medium shadow-button transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] focus-ring"
            >
              Try the Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
