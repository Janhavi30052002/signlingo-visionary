
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const WebcamDetection = () => {
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [isPermissionDenied, setIsPermissionDenied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [detectedSign, setDetectedSign] = useState('');
  const [confidence, setConfidence] = useState(0);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [containerRef, isInView] = useInView<HTMLDivElement>({ triggerOnce: true });
  const detectionIntervalRef = useRef<number | null>(null);

  const startWebcam = async () => {
    setIsLoading(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user', width: 640, height: 480 }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setIsWebcamActive(true);
        setIsPermissionDenied(false);
        toast.success("Camera started successfully!");
        
        // For demo purposes, simulate detection after a delay
        startDetection();
      }
    } catch (error) {
      console.error('Error accessing webcam:', error);
      setIsPermissionDenied(true);
      toast.error("Camera access was denied. Please check your permissions.");
    } finally {
      setIsLoading(false);
    }
  };

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsWebcamActive(false);
      setDetectedSign('');
      setConfidence(0);
      stopDetection();
      toast.info("Camera stopped");
    }
  };

  const startDetection = () => {
    // Clear any existing interval
    stopDetection();
    
    // This is just for demo purposes - in a real app, you'd process video frames
    const signs = ['Hello', 'Thank You', 'Please', 'Yes', 'No', 'Help'];
    
    const interval = window.setInterval(() => {
      if (!isWebcamActive) {
        stopDetection();
        return;
      }
      
      // Randomly choose a sign and confidence level for demo
      const randomSign = signs[Math.floor(Math.random() * signs.length)];
      const randomConfidence = 0.7 + Math.random() * 0.29; // Between 70% and 99%
      
      setDetectedSign(randomSign);
      setConfidence(randomConfidence);
    }, 3000);
    
    detectionIntervalRef.current = interval;
  };

  const stopDetection = () => {
    if (detectionIntervalRef.current !== null) {
      window.clearInterval(detectionIntervalRef.current);
      detectionIntervalRef.current = null;
    }
  };

  // Clean up webcam and intervals on unmount
  useEffect(() => {
    return () => {
      stopWebcam();
      stopDetection();
    };
  }, []);

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
          {!isWebcamActive && !isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <h3 className="text-2xl font-medium mb-4">
                {isPermissionDenied
                  ? "Camera access was denied"
                  : "Enable your webcam to try sign language detection"}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                {isPermissionDenied
                  ? "Please allow camera access to use this feature"
                  : "Our system will detect and interpret Indian Sign Language in real-time"}
              </p>
              <Button
                onClick={startWebcam}
                className="px-6 py-3 bg-primary text-white rounded-full font-medium shadow-button transition-all duration-300 hover:shadow-lg hover:scale-[1.03] active:scale-[0.98]"
              >
                Start Camera
              </Button>
            </div>
          )}
          
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          )}
          
          <video
            ref={videoRef}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-300",
              isWebcamActive ? "opacity-100" : "opacity-0"
            )}
            playsInline
            muted
          />
          
          <canvas 
            ref={canvasRef} 
            className="absolute top-0 left-0 w-full h-full pointer-events-none" 
          />
          
          {isWebcamActive && (
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button
                onClick={stopWebcam}
                variant="destructive"
                size="icon"
                className="rounded-full shadow-lg"
                aria-label="Stop webcam"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </Button>
            </div>
          )}
        </div>
        
        {isWebcamActive && (
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Detected Sign</div>
                <div className="text-2xl font-medium">
                  {detectedSign || "Waiting for signs..."}
                </div>
              </div>
              
              {confidence > 0 && (
                <div className="glass px-4 py-2 rounded-full text-sm">
                  Confidence: {(confidence * 100).toFixed(0)}%
                </div>
              )}
            </div>
            
            {detectedSign && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground mb-2">Translation</div>
                <p>{detectedSign}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WebcamDetection;
