import { useEffect, useRef, useState } from 'react';
import { BreadcrumbNav } from '../common/BreadcrumbNav';
import { WidthContainer } from '../WidthContainer';
import gsap from 'gsap';

interface Props {
  title: string;
  videoSources: string[];
}

const positions = ['center 30%', 'center 20%', 'center 20%'];

export const CatalogPageHeader: React.FC<Props> = ({ title, videoSources }) => {
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

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

    const handleEnded = () => {
      fadeToNextVideo();
    };

    currentVideo.addEventListener('ended', handleEnded);
    currentVideo.play();

    return () => {
      currentVideo.removeEventListener('ended', handleEnded);
    };
  }, [videoIndex]);

  return (
    <div
      className="relative md:h-[600px] overflow-hidden mb-[20px] bg-black"
      style={{ height: '800px' }}
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
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{
            objectPosition: positions[i],
            opacity: i === videoIndex ? 1 : 0,
            zIndex: i === videoIndex ? 2 : 1,
          }}
          src={src}
        />
      ))}

      <div className="relative z-10 h-full flex flex-col justify-start pt-6 md:pt-10">
        <WidthContainer>
          <BreadcrumbNav />
          <h1 className="text-white font-mont font-bold text-5xl">{title}</h1>
        </WidthContainer>
      </div>
    </div>
  );
};
