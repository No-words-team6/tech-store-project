import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export interface carouselItem {
  id: number;
  name: string;
  image: string;
  title: string;
  to: string;
  price: number;
  shortDescription: string;
}

export interface Props {
  carouselItems: carouselItem[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export const ItemCarousel: React.FC<Props> = ({
  carouselItems,
  currentIndex,
  setCurrentIndex,
}) => {
  const slidesRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isAnimating = useRef(false);

  const touchData = useRef({ x: 0, startX: 0, dragging: false });

  const handleTouchStart = (e: React.TouchEvent) => {
    touchData.current.dragging = true;
    touchData.current.startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchData.current.dragging) return;
    touchData.current.x = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchData.current.dragging) return;
    const dx = touchData.current.x - touchData.current.startX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchData.current = { x: 0, startX: 0, dragging: false };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    touchData.current.dragging = true;
    touchData.current.startX = e.clientX;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!touchData.current.dragging) return;
    touchData.current.x = e.clientX;
  };

  const handleMouseUp = () => {
    if (!touchData.current.dragging) return;
    const dx = touchData.current.x - touchData.current.startX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchData.current = { x: 0, startX: 0, dragging: false };
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    slidesRefs.current.forEach((el, i) => {
      const position = getPosition(i);
      gsap.set(el, position);
    });
  }, []);

  function getOffset() {
    if (window.innerWidth > 1200) return 150;
    if (window.innerWidth > 900) return 100;
    if (window.innerWidth > 600) return 70;
    return 60;
  }

  const goNext = () => {
    if (isAnimating.current) return;
    const nextIndex = (currentIndex + 1) % carouselItems.length;
    animateTo(nextIndex);
  };

  const goPrev = () => {
    if (isAnimating.current) return;
    const prevIndex =
      (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    animateTo(prevIndex);
  };

  const animateTo = (newIndex: number) => {
    isAnimating.current = true;
    slidesRefs.current.forEach((el, i) => {
      const position = getPosition(i, newIndex);
      gsap.to(el, {
        duration: 0.5,
        ease: 'power2.inOut',
        ...position,
        onComplete:
          i === slidesRefs.current.length - 1 ?
            () => {
              isAnimating.current = false;
            }
          : undefined,
      });
    });
    setCurrentIndex(newIndex);
  };

  const getPosition = (index: number, refIndex = currentIndex) => {
    const xOffset = getOffset();
    const N = carouselItems.length;

    if (index === refIndex) {
      return { zIndex: 3, scale: 1, x: 0, opacity: 1, pointerEvents: 'auto' };
    }
    if ((index - 1 + N) % N === refIndex) {
      return {
        zIndex: 2,
        scale: 0.6,
        x: xOffset,
        opacity: 0.7,
        pointerEvents: 'none',
      };
    }
    if ((index + 1) % N === refIndex) {
      return {
        zIndex: 2,
        scale: 0.6,
        x: -xOffset,
        opacity: 0.7,
        pointerEvents: 'none',
      };
    }
    return {
      zIndex: 1,
      scale: 0.6,
      x: 0,
      opacity: 0.5,
      pointerEvents: 'none',
    };
  };

  useEffect(() => {
    const interval = setInterval(goPrev, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto select-none">
      <div
        ref={containerRef}
        className="relative w-full h-[180px] sm:h-[230px] md:h-[300px] lg:h-[350px] xl:h-[380px] flex justify-center items-center perspective-[1000px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {carouselItems.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              slidesRefs.current[i] = el;
            }}
            className="absolute inset-0 cursor-pointer"
            style={{ userSelect: 'none' }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full block rounded-lg shadow-lg object-contain pointer-events-none"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
