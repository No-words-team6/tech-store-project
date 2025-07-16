import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WidthContainer } from '@/components/containers/WidthContainer';
import { BreadcrumbNav } from '@/components/common/BreadcrumbNav';
import { ButtonCheckCategory } from '@/components/common/ButtonCheckCategory';

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

    const targetWidth = 1220;
    const headerHeight = 64;

    let st: ScrollTrigger | undefined;

    const setClipPath = (progress: number) => {
      const vw = window.innerWidth;
      const side = Math.max(0, ((vw - targetWidth) / 2) * progress);
      const border = 48 * progress;
      maskRef.current!.style.clipPath = `inset(0px ${side}px 0px ${side}px)`;
      maskRef.current!.style.borderRadius = `${border}px`;
    };

    // eslint-disable-next-line prefer-const
    st = ScrollTrigger.create({
      trigger: maskRef.current,
      start: `top top+=${headerHeight}`,
      end: '+=500',
      scrub: true,
      onUpdate: (self) => setClipPath(self.progress),
    });

    setClipPath(0);

    const handleResize = () => {
      if (st) setClipPath(st.progress);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (st) st.kill();
    };
  }, []);

  return (
    <div
      className="relative w-full h-[100vh] max-w-[1920px] mx-auto overflow-hidden flex items-center justify-center"
      style={{ minHeight: 'calc(100vh - 0px)' }}
    >
      <div
        ref={maskRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center z-0 overflow-hidden"
        style={{
          clipPath: 'inset(0px 0px 0px 0px)',
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

      <ButtonCheckCategory />

      <div className="absolute top-0 left-0 z-10 w-full h-full flex flex-col justify-start pt-6 md:pt-10 pointer-events-none">
        <WidthContainer>
          <div className="px-4 sm:px-8 xl:px-0">
            <BreadcrumbNav />
            <h1 className="text-link-hover-bg dark:text-dark-link-hover-bg font-mont font-bold text-5xl drop-shadow-[0_4px_6px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
              {title}
            </h1>
          </div>
        </WidthContainer>
      </div>
    </div>
  );
};
