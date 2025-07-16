import type React from 'react';
import { ItemCarousel, type carouselItem } from '../ItemCarousel';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Props {
  carouselItems: carouselItem[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
    },
  },
  exit: { opacity: 0, y: 16, transition: { duration: 0.24 } },
};

export const CatalogPageRecomendationsSection: React.FC<Props> = ({
  carouselItems,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { t } = useTranslation();

  const isMobile = window.innerWidth < 640;

  return (
    <div
      id="catalogPageRecomendationsSectionId"
      className="w-full max-w-[1200px] mx-auto mt-[56px] lg:mt-[80px]"
    >
      <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 mx-4 sm:mx-6 lg:mx-8 xl:mx-auto">
        <div className="flex flex-col gap-y-[24px] justify-center test text-white text-4xl col-span-24">
          <h2 className="ccolor-white font-mont font-bold text-[22px] sm:text-[32px]">
            {t('top3')}
          </h2>

          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-0 h-[400px]">
            <div className="w-full lg:w-1/2 flex justify-center">
              <ItemCarousel
                carouselItems={carouselItems}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            </div>
            <div className="w-full lg:w-1/2 pt-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={carouselItems[currentIndex].id}
                  className="flex flex-col gap-y-[12px]"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <motion.p
                    className="font-mont font-extrabold text-2xl"
                    variants={itemVariants}
                  >
                    {carouselItems[currentIndex].title}
                  </motion.p>
                  {!isMobile && (
                    <motion.p
                      className="text-[#75767F] font-mont font-semibold text-[20px]"
                      variants={itemVariants}
                    >
                      {t(carouselItems[currentIndex].descriptionKey)}
                    </motion.p>
                  )}
                  <motion.p
                    className="font-mont font-extrabold text-2xl mt-3"
                    variants={itemVariants}
                  >
                    {`$${carouselItems[currentIndex].price}`}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.a
                  key={carouselItems[currentIndex].id}
                  href={carouselItems[currentIndex].to}
                  className="mt-8
                    bg-white text-neutral-900
                    font-mont font-semibold
                    text-[20px] px-8 py-3
                    rounded-2xl shadow-lg
                    transition hover:bg-[#75767F]
                    w-full max-w-[320px]
                    hover:cursor-pointer
                    block text-center
                  "
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {t('learn-more')}
                </motion.a>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
