import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WidthContainer } from '@/components/WidthContainer';
import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  title: string;
  videoSources: string[];
}

const positions = ['center 30%', 'center 20%', 'center 20%'];

export const CatalogPageHeader: React.FC<Props> = ({ title, videoSources }) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const maskRef = useRef<HTMLDivElement>(null);

  const fadeToNextVideo = () => {
    const current = videoRefs.current[videoIndex];
    const nextIndex = (videoIndex + 1) % videoSources.length;
    const next = videoRefs.current[nextIndex];

    gsap.to(current, { opacity: 0, duration: 1 });
    gsap.to(next, { opacity: 1, duration: 1 });

    setVideoIndex(nextIndex);
  };

  useEffect(() => {
    const currentVideo = videoRefs.current[videoIndex];
    if (!currentVideo) return;

    const handleEnded = () => fadeToNextVideo();

    currentVideo.addEventListener('ended', handleEnded);
    currentVideo.play();

    return () => {
      currentVideo.removeEventListener('ended', handleEnded);
    };
  }, [videoIndex]);

  useEffect(() => {
    if (!maskRef.current) return;

    gsap.to(maskRef.current, {
      clipPath: 'inset(5% 15% 5% 15%)',
      borderRadius: '48px',
      ease: 'none',
      scrollTrigger: {
        trigger: maskRef.current,
        start: 'top top',
        end: '+=500',
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="relative mx-auto w-full h-screen max-h-[1016px] max-w-[1920px] overflow-hidden mb-5 flex items-center justify-center"
      style={{ height: 'calc(100vh - 64px)' }}
    >
      <div
        ref={maskRef}
        className="sticky top-0 h-full w-full flex items-center justify-center z-0 overflow-hidden"
        style={{
          clipPath: 'inset(0% 0% 0% 0%)',
          borderRadius: 0,
        }}
      >
        {videoSources.map((src, i) => (
          <video
            key={i}
            ref={(el) => {
              if (el) videoRefs.current[i] = el;
            }}
            muted
            loop={false}
            playsInline
            onEnded={fadeToNextVideo}
            className="absolute top-0 left-0 w-full h-full object-cover object-center transition-opacity duration-1000"
            style={{
              objectPosition: positions[i],
              opacity: i === videoIndex ? 1 : 0,
              zIndex: i === videoIndex ? 2 : 1,
            }}
            src={src}
          />
        ))}
      </div>

      <button
        onClick={() => {
          document
            .getElementById('Brands')
            ?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="
          absolute left-1/2 top-[80%] transform -translate-x-1/2 -translate-y-1/2
          px-8 py-3 rounded-xl
          bg-white/30 backdrop-blur-md
          text-black font-bold text-xl
          shadow-lg border 
          flex items-center gap-2
          hover:bg-white/50 hover:scale-105
          transition-all duration-400
          z-11
        "
      >
        <span>Browse categories</span>
        <ChevronDown size={28} />
      </button>

      <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-start pt-6 md:pt-10">
        <WidthContainer>
          <BreadcrumbNav />
          <h1 className="text-white font-mont font-bold text-5xl">{title}</h1>
        </WidthContainer>
      </div>
    </div>
  );
};
