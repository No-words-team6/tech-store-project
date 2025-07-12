import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroVideo: React.FC = () => {
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!maskRef.current) return;

    gsap.to(maskRef.current, {
      clipPath: 'inset(0% 25% 0% 25%)',
      ease: 'none',
      scrollTrigger: {
        trigger: maskRef.current,
        start: 'top top',
        end: '+=500', // прокрутка до сжатия
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="h-screen overflow-hidden">
      <div
        ref={maskRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center z-10"
        style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      >
        <video
          src="/videos/phonesBanner-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
