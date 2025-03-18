
import { useEffect, useState, useRef, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useInView<T extends HTMLElement = HTMLElement>(
  options: InViewOptions = {}
): [RefObject<T>, boolean] {
  const { 
    threshold = 0.1,
    triggerOnce = false,
    rootMargin = '0px' 
  } = options;
  
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementInView = entry.isIntersecting;
        
        if (isElementInView) {
          setIsInView(true);
          if (triggerOnce && element) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, triggerOnce, rootMargin]);

  return [ref, isInView];
}
