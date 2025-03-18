
import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const About = () => {
  const [missionRef, missionInView] = useInView({ triggerOnce: true });
  const [teamRef, teamInView] = useInView({ triggerOnce: true });
  const [techRef, techInView] = useInView({ triggerOnce: true });
  
  const teamMembers = [
    {
      name: "Aanya Sharma",
      role: "Lead AI Researcher",
      image: "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?q=80&w=2574&auto=format&fit=crop",
      bio: "Specializing in computer vision and machine learning, Aanya leads the development of our sign language detection algorithms."
    },
    {
      name: "Rahul Patel",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop",
      bio: "With expertise in React and Python, Rahul builds the frontend and backend systems that power our platform."
    },
    {
      name: "Priya Malhotra",
      role: "ISL Specialist",
      image: "https://images.unsplash.com/photo-1605405748313-a416a1b84491?q=80&w=2574&auto=format&fit=crop",
      bio: "As a certified Indian Sign Language interpreter, Priya ensures our system accurately represents authentic ISL."
    },
    {
      name: "Vikram Singh",
      role: "Project Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
      bio: "With a background in accessibility technologies, Vikram oversees the strategic direction of the SignLingo project."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <span>About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-semibold tracking-tight mb-6">
              Making Indian Sign Language Accessible
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
              We're a team of researchers, developers, and sign language experts dedicated to bridging communication gaps through technology.
            </p>
          </div>
        </div>
      </section>
      
      <section 
        ref={missionRef}
        className={cn(
          "py-16 relative transition-all duration-700",
          missionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <span>Our Mission</span>
                </div>
                <h2 className="text-3xl font-display font-semibold md:text-4xl">
                  We believe in technology that connects people
                </h2>
                <p className="text-muted-foreground">
                  SignLingo was born from a simple yet powerful idea: that technology should bridge gaps, not create them. For millions of Indians who use sign language, digital communication tools have often been designed without their needs in mind.
                </p>
                <p className="text-muted-foreground">
                  Our mission is to change that by creating technology that recognizes, understands, and translates Indian Sign Language, making digital communication truly accessible for everyone.
                </p>
                <p className="text-muted-foreground">
                  We envision a world where language barriers are eliminated, and everyone can communicate freely, regardless of how they express themselves.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] bg-muted shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      
      <section 
        ref={teamRef}
        className={cn(
          "py-16 bg-secondary/30 transition-all duration-700",
          teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <span>Our Team</span>
            </div>
            <h2 className="text-3xl font-display font-semibold md:text-4xl mb-4">
              Meet the people behind SignLingo
            </h2>
            <p className="text-lg text-muted-foreground">
              Our diverse team combines expertise in AI, sign language, accessibility, and software development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={cn(
                  "glass border border-white/20 rounded-xl overflow-hidden shadow-subtle transition-all duration-500",
                  teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-medium text-lg">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section 
        ref={techRef}
        className={cn(
          "py-16 relative transition-all duration-700",
          techInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] bg-muted shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22219cce67?q=80&w=2574&auto=format&fit=crop"
                  alt="AI technology visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-30" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
            
            <div>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <span>Our Technology</span>
                </div>
                <h2 className="text-3xl font-display font-semibold md:text-4xl">
                  Advanced AI for Sign Language
                </h2>
                <p className="text-muted-foreground">
                  Our technology leverages cutting-edge computer vision and machine learning to recognize and interpret Indian Sign Language gestures with high accuracy.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                        <line x1="7" y1="2" x2="7" y2="22"></line>
                        <line x1="17" y1="2" x2="17" y2="22"></line>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <line x1="2" y1="7" x2="7" y2="7"></line>
                        <line x1="2" y1="17" x2="7" y2="17"></line>
                        <line x1="17" y1="17" x2="22" y2="17"></line>
                        <line x1="17" y1="7" x2="22" y2="7"></line>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Computer Vision</h3>
                      <p className="text-sm text-muted-foreground">Our system uses advanced computer vision to track hand movements, facial expressions, and body posture in real-time.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"></path>
                        <path d="M12 6v6l4 4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Real-time Processing</h3>
                      <p className="text-sm text-muted-foreground">Our algorithms process video frames in milliseconds, providing instant feedback and translations.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m5 3 4 2v12l-4-2V3Z"></path>
                        <path d="m9 5 4 2v12l-4-2V5Z"></path>
                        <path d="m13 7 4 2v12l-4-2V7Z"></path>
                        <path d="m17 9 4 2v7l-4-2V9Z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Machine Learning</h3>
                      <p className="text-sm text-muted-foreground">Our models are trained on extensive datasets of Indian Sign Language to ensure accurate recognition across dialects and variations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="glass border border-white/20 rounded-2xl overflow-hidden shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-display font-semibold md:text-4xl mb-4">
              Join Us in Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're interested in using our technology, contributing to our research, or partnering with us, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/demo"
                className="px-6 py-3 bg-primary text-white rounded-full font-medium shadow-button transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] focus-ring"
              >
                Try the Demo
              </Link>
              <a
                href="mailto:contact@signlingo.org"
                className="px-6 py-3 bg-secondary text-foreground rounded-full font-medium shadow-button transition-all duration-300 hover:bg-secondary/80 active:scale-[0.98] focus-ring"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
