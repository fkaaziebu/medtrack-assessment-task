import Logo from '@/public/Logo_MedTrack.svg';
import Image from 'next/image';

import XMarkIcon from '@/public/Ico-Close.svg';

interface SidebarHeaderProps {
  setOpenLeftMenu?: any;
  openLeftMenu?: boolean;
}

export const SidebarHeader = (props: SidebarHeaderProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='relative flex h-[3.75rem] w-[85%] items-center gap-5 border-b border-[#d0d5e2] bg-[#3952a6] text-blue-50 lg:w-full'
    >
      <div className='flex h-full w-14 items-center justify-center bg-[#1d368b]'>
        <Image src={Logo} alt='Medtrack Logo' className='h-5 w-5' />
      </div>
      <h1>MedTrack</h1>
      {props.openLeftMenu}
      <div
        onClick={() => props.setOpenLeftMenu(false)}
        className='absolute right-4 top-4 cursor-pointer rounded-full p-1 lg:hidden'
      >
        <Image src={XMarkIcon} alt='Close' className='h-5 w-5 text-white' />
      </div>
    </div>
  );
};
