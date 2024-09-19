import { Gamepad } from './icons/Gamepad';
import { Telegram } from './icons/Telegram';
import { X } from './icons/X';

const icons = [<Gamepad key="1" />, <Telegram key="2" />, <X key="3" />];

export const Section8 = () => {
  return (
    <div className="container py-10">
      <div className="rounded-3xl border border-solid border-neutral-500 bg-[#333333] p-6 text-center">
        <p className="mb-3 text-2xl font-bold text-white">Join our community</p>
        <div className="mb-4 flex items-center justify-center gap-2">
          {icons.map((icon, index) => {
            return (
              <div
                key={index}
                style={{
                  background:
                    'linear-gradient(103.15deg, rgba(247, 238, 222, 0.04) -13.73%, rgba(249, 241, 228, 0.2) 83.52%)',
                  backdropFilter: 'blur(50px)',
                }}
                className="flex size-14 items-center justify-center rounded-full"
              >
                {icon}
              </div>
            );
          })}
        </div>
        <p className="text-xs font-medium text-neutral-400">2024 Speed Chains. All rights reserved</p>
      </div>
    </div>
  );
};
