import './BannerSlider.css';
import { Link } from 'react-router-dom';

const bannerData = [
  {
    titleLeftTop: 'Now available in our store!',
    titleLeftBottom: 'Be the first',
    buttonText: 'ORDER NOW',
    buttonLink: '/phones/apple-iphone-14-pro-1tb-spaceblack',
    titleRightTop: 'Apple iPhone 14 Pro',
    titleRightBottom: '1TB Space Black',
    imgLabel: '/img/banner/iphone.png',
  },
  {
    titleLeftTop: 'Now available in our store!',
    titleLeftBottom: 'Be the first',
    buttonText: 'ORDER NOW',
    buttonLink: '/tablets',
    titleRightTop: 'Samsung Galaxy Tab',
    titleRightBottom: 'Up to -30% OFF',
    imgLabel: '/img/banner/samsung.png',
  },
  {
    titleLeftTop: 'Now available in our store!',
    titleLeftBottom: 'Be the first',
    buttonText: 'ORDER NOW',
    buttonLink: '/accessories',
    titleRightTop: 'Xiaomi Accessories',
    titleRightBottom: 'Limited stock',
    imgLabel: '/img/banner/xiaomi.png',
  },
];

type Props = {
  index: number;
};

export const Banner = ({ index }: Props) => {
  const {
    titleLeftTop,
    titleLeftBottom,
    buttonText,
    buttonLink,
    titleRightTop,
    titleRightBottom,
    imgLabel,
  } = bannerData[index] || bannerData[0];

  return (
    <div className="bg-black w-full h-[320px] sm:h-[189px] xl:h-[400px] px-4 flex justify-center items-start gap-6">
      {/* LEFT OUTER CONTAINER */}
      <div className="bg-[#323542] pt-8 pb-8 px-6 rounded-lg flex flex-col justify-between w-full max-w-[300px] h-full">
        <div className="text-left">
          <div className="text-xl font-bold bg-gradient-to-r from-[#A855F7] to-[#6366F1] text-transparent bg-clip-text whitespace-nowrap">
            <span>{titleLeftTop}</span> <span className="ml-1">👌</span>
          </div>
          <div className="text-[#75767F] text-sm font-semibold mt-1">
            {titleLeftBottom}
          </div>
        </div>

        <div className="mt-auto flex">
          <Link to={buttonLink}>
            <button className="text-[#F1F2F9] font-bold py-2 px-4 border border-black rounded-2xl">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="w-full max-w-[800px] bg-black p-6 flex flex-col gap-4 h-full">
        <div className="text-center">
          <div className="text-[#F1F2F9] font-bold text-2xl">
            {titleRightTop}
          </div>
          <div className="text-[#75767F] text-sm font-light">
            {titleRightBottom}
          </div>
        </div>

        <div className="flex-grow flex justify-center items-center rounded overflow-hidden">
          <img
            src={imgLabel}
            alt={titleRightTop}
            className="object-contain h-full w-auto"
          />
        </div>
      </div>
    </div>
  );
};
