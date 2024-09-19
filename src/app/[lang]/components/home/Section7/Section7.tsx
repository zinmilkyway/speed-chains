import Image from 'next/image';
import image from '@/public/Investor.png';

export const Section7 = () => {
  return (
    <div className="container py-10">
      <div className="grid-grid-cols-1 grid lg:gap-4 lg:grid-cols-2 lg:mx-[85px] mx-3">
        <div className="text-center lg:max-w-[400px] lg:text-left">
          <div className="mb-2 inline-block text-[28px] font-bold leading-none text-[#FFA506] lg:block lg:text-[64px]">
            Investors &
          </div>
          <div className="inline-block text-[28px] italic leading-none text-white lg:block lg:text-[64px]">
            <span className="invisible lg:hidden">.</span>
            Partners
          </div>
          <p className="text-sm font-normal text-gray-100">
            We are here to provide all you need for the best trading experience and optimal advances on TON blockchain.
          </p>
        </div>
        <div>
          <Image src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
};
