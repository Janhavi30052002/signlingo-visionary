
import React, { useState, useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const WebcamDetection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [detectedSign, setDetectedSign] = useState('');
  const [confidence, setConfidence] = useState(0);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [containerRef, isInView] = useInView<HTMLDivElement>({ triggerOnce: true });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
      setDetectedSign('');
      setConfidence(0);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = () => {
    if (!imagePreview) {
      toast.error('Please upload an image first');
      return;
    }

    setIsLoading(true);
    
    // Simulate analysis - in a real app, this would call your ML model
    setTimeout(() => {
      const signs = ['Hello', 'Thank You', 'Please', 'Yes', 'No', 'Help'];
      const randomSign = signs[Math.floor(Math.random() * signs.length)];
      const randomConfidence = 0.7 + Math.random() * 0.29; // Between 70% and 99%
      
      setDetectedSign(randomSign);
      setConfidence(randomConfidence);
      setIsLoading(false);
      
      toast.success('Image analyzed successfully!');
    }, 2000);
  };

  const resetImage = () => {
    setImagePreview(null);
    setDetectedSign('');
    setConfidence(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    toast.info('Image removed');
  };

  return (
    <div 
      ref={containerRef}
      className={cn(
        "w-full max-w-4xl mx-auto transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <div className="glass border border-white/20 rounded-2xl overflow-hidden shadow-lg">
        <div className="relative aspect-video bg-black/20">
          {!imagePreview && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <h3 className="text-2xl font-medium mb-4">
                Upload an image for Indian Sign Language detection
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Our system will analyze and interpret Indian Sign Language from your uploaded image
              </p>
              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="max-w-xs mb-4"
              />
            </div>
          )}
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          )}
          
          {imagePreview && (
            <>
              <img 
                src={imagePreview} 
                className="w-full h-full object-contain"
                alt="Uploaded sign language"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  onClick={resetImage}
                  variant="destructive"
                  size="icon"
                  className="rounded-full shadow-lg"
                  aria-label="Remove image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </Button>
              </div>
            </>
          )}
        </div>
        
        <div className="p-6">
          {imagePreview ? (
            <>
              {detectedSign ? (
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Detected Sign</div>
                    <div className="text-2xl font-medium">{detectedSign}</div>
                  </div>
                  
                  {confidence > 0 && (
                    <div className="glass px-4 py-2 rounded-full text-sm">
                      Confidence: {(confidence * 100).toFixed(0)}%
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex justify-center">
                  <Button 
                    onClick={analyzeImage} 
                    className="px-6 py-5 bg-primary text-white rounded-full font-medium shadow-button transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]"
                    disabled={isLoading}
                  >
                    {isLoading ? "Analyzing..." : "Analyze Sign"}
                  </Button>
                </div>
              )}
              
              {detectedSign && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-sm text-muted-foreground mb-2">Translation</div>
                  <p>{detectedSign}</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center text-muted-foreground">
              Upload an image to analyze
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebcamDetection;
