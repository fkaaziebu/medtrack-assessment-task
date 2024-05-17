import Image from 'next/image';
import LogoutIcon from '@/public/ic-logout-hover.svg';
import FeedbackIcon from '@/public/ic-feedback.svg';

import { useModal } from '@/app/hooks/use-modal-store';
export const SidebarFooter = () => {
  const { onOpen } = useModal();
  return (
    <div className='mt-auto flex flex-col gap-5 bg-[#f6f8fb] p-8'>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => {
            onOpen('logout');
          }}
        >
          <div className='flex items-center gap-2'>
            <Image
              src={LogoutIcon}
              alt='Log Out'
              className='h-5 w-5 text-[#7a7d7f]'
            />
            <span className='text-sm text-[#182430] hover:text-[#e45151]'>
              Log Out
            </span>
          </div>
        </button>
      </div>
      <div>
        <button>
          <div className='flex items-center gap-2 rounded-md border border-[#d0d5e2] bg-white p-1.5 text-[#7a7d7f]'>
            <Image
              src={FeedbackIcon}
              alt='Settings'
              className='h-5 w-5 text-[#7a7d7f]'
            />
            <span className='text-sm'>Feedback</span>
          </div>
        </button>
      </div>
    </div>
  );
};
