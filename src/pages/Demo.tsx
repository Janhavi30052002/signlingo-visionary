
import React from 'react';
import WebcamDetection from '@/components/WebcamDetection';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

const Demo = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  
  return (
    <div className="flex flex-col min-h-screen">
      <section
        ref={headerRef}
        className={cn(
          "py-16 transition-all duration-700",
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="container text-center max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <span>Interactive Demo</span>
          </div>
          <h1 className="text-4xl font-display font-semibold md:text-5xl mb-4">
            Experience Indian Sign Language Detection
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Try our real-time detection system by enabling your webcam. Our AI will recognize and translate Indian Sign Language gestures instantly.
          </p>
        </div>
      </section>
      
      <section className="flex-grow py-8">
        <WebcamDetection />
        
        <div className="container max-w-4xl mt-16">
          <div className="glass border border-white/20 rounded-xl p-6 shadow-subtle">
            <h2 className="text-xl font-semibold mb-4">How to Use the Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h3 className="font-medium text-center">Step 1</h3>
                <p className="text-sm text-center text-muted-foreground">
                  Click the "Start Camera" button to enable your webcam.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-4">
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
                </div>
                <h3 className="font-medium text-center">Step 2</h3>
                <p className="text-sm text-center text-muted-foreground">
                  Perform Indian Sign Language gestures within the camera view.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="12" width="12" height="8" rx="2"></rect>
                    <path d="m3 4 3 4h14l3-4"></path>
                    <path d="M4 12v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"></path>
                    <path d="M14 18v2"></path>
                    <path d="M10 18v2"></path>
                  </svg>
                </div>
                <h3 className="font-medium text-center">Step 3</h3>
                <p className="text-sm text-center text-muted-foreground">
                  View the real-time detection results and translations below the video.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our Indian Sign Language detection technology
            </p>
          </div>
          
          <div className="space-y-4">
            {[
              {
                question: "How accurate is the sign language detection?",
                answer: "Our system achieves up to 98% accuracy for common signs in well-lit conditions. The accuracy may vary depending on lighting, camera quality, and the complexity of the signs."
              },
              {
                question: "What Indian Sign Language signs can be detected?",
                answer: "The current demo can detect basic conversational signs including greetings, common phrases, and simple questions. Our full version supports over 5,000 signs from Indian Sign Language."
              },
              {
                question: "Is my webcam data stored or shared?",
                answer: "No, all processing happens locally in your browser. We do not store or transmit your webcam data to any servers. Your privacy is important to us."
              },
              {
                question: "Can I use this on mobile devices?",
                answer: "Yes, our system works on mobile devices with front-facing cameras. For optimal results, we recommend using a device with good camera quality and stable positioning."
              }
            ].map((faq, index) => (
              <div key={index} className="glass border border-white/20 rounded-lg p-6 shadow-subtle">
                <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
