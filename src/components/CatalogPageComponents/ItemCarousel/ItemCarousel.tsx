import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export interface carouselItem {
  id: number;
  name: string;
  image: string;
}

export interface Props {
  carouselItems: carouselItem[];
}

export const ItemCarousel: React.FC<Props> = ({ carouselItems }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef(null);

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

  const getPosition = (index: number) => {
    const xOffset = getOffset();

    if (index === currentIndex) {
      return { zIndex: 3, scale: 1, x: 0, opacity: 1, pointerEvents: 'auto' };
      // return { zIndex: 3, scale: 1, rotateY: 0, x: 0 };
    }
    if ((index + 1) % carouselItems.length === currentIndex) {
      return {
        zIndex: 2,
        scale: 0.6,
        x: xOffset,
        opacity: 0.7,
        pointerEvents: 'none',
      };
      // return { zIndex: 2, scale: 0.8, rotateY: 30, x: xOffset };
    }
    return {
      zIndex: 1,
      scale: 0.6,
      x: -xOffset,
      opacity: 0.5,
      pointerEvents: 'none',
    };
    // return { zIndex: 1, scale: 0.8, rotateY: -30, x: -xOffset };
  };

  const goNext = () => {
    const nextIndex = (currentIndex + 1) % carouselItems.length;
    setCurrentIndex(nextIndex);

    slidesRefs.current.forEach((el, i) => {
      const position = getPosition(i);
      gsap.to(el, {
        duration: 0.6,
        ease: 'power2.inOut',
        ...position,
      });
    });
  };

  useEffect(() => {
    const interval = setInterval(goNext, 2200);
    return () => clearInterval(interval);
  });

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        ref={containerRef}
        className="relative w-full h-[180px] sm:h-[230px] md:h-[300px] lg:h-[350px] xl:h-[380px] flex justify-center items-center perspective-[1000px] overflow-hidden"
      >
        {carouselItems.map((item, i) => (
          <Link
            to={`/phones/apple-iphone-7-32gb-black`}
            key={item.id}
            ref={(el) => {
              slidesRefs.current[i] = el;
            }}
            className="absolute inset-0 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full block rounded-lg shadow-lg object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
