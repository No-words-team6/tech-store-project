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

  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 mx-4 sm:mx-6 lg:mx-8 xl:mx-auto">
        <div className="flex flex-col gap-y-10 justify-center test text-white text-4xl col-span-24">
          <h2 className="color-white font-mont font-extrabold text-[18px] sm:text-[24px]">
            {t('top3')}
          </h2>

          <div className="flex">
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
                  className="color-white font-mont font-semibold text-base sm:text-lg"
                  variants={itemVariants}
                >
                  {carouselItems[currentIndex].title}
                </motion.p>
                <motion.p
                  className="color-white font-mont font-semibold text-sm sm:text-base"
                  variants={itemVariants}
                >
                  {t(carouselItems[currentIndex].descriptionKey)}
                </motion.p>
                <motion.p
                  className="color-white font-mont font-bold text-base sm:text-xl"
                  variants={itemVariants}
                >
                  {`$${carouselItems[currentIndex].price}`}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            <ItemCarousel
              carouselItems={carouselItems}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
