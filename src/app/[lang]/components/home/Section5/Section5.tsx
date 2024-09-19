import bgItem1 from './images/bg-item1.png';
import bgItem2 from './images/bg-item2.png';
import bgItem3 from './images/bg-item3.png';

export const Section5 = () => {
  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6">
        <div className="col-span-1">
          <div className="mb-6 text-[32px] font-bold uppercase text-white lg:text-[64px]">
            <div className="mb-2 flex items-center gap-4 leading-none">
              Why
              <div className="h-[36px] w-full rounded-full bg-[#EEECEC] md:w-[134px]" />
            </div>
            <div className="leading-none">Choose us</div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-6">
            <div>
              <div
                style={{
                  background: `url('${bgItem1.src}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'top top',
                  backdropFilter: 'blur(50px)',
                }}
                className="h-[166px] rounded-2xl p-3 lg:h-[756px] lg:p-6"
              >
                <div className="text-[24px] font-bold text-white lg:text-[40px]">Join the $TON Revolution</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-1 lg:gap-6">
              <div
                style={{
                  background: `url('${bgItem2.src}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'top top',
                  backdropFilter: 'blur(50px)',
                }}
                className="h-[166px] rounded-2xl p-3 lg:h-[initial] lg:p-6"
              >
                <div className="text-[24px] font-bold text-white lg:max-w-[75%] lg:text-[40px]">
                  Speed Chain Speed Your Avenue
                </div>
              </div>
              <div
                style={{
                  background: `url('${bgItem3.src}')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'top top',
                  backdropFilter: 'blur(50px)',
                }}
                className="h-[166px] rounded-2xl p-3 lg:h-[initial] lg:p-6"
              >
                <div className="text-[24px] font-bold text-white lg:max-w-[50%] lg:text-[40px]">Just Play and Earn</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
