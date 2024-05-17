import Image from 'next/image';
import MenuRightIcon from '@/public/expand-right.svg';

interface PatientBarHeaderProps {
  setOpenRightMenu?: any;
}
export const PatientBarHeader = (props: PatientBarHeaderProps) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className='relative ml-auto flex h-[3.75rem] w-[85%] items-center justify-center gap-5 border-b border-[#d0d5e2] bg-white lg:w-full'
    >
      <div
        onClick={() => props.setOpenRightMenu(false)}
        className='absolute left-4 top-4 cursor-pointer rounded-full p-1 lg:hidden'
      >
        <Image
          src={MenuRightIcon}
          alt='Backt to previous page'
          className='h-6 w-6'
        />
      </div>
      <h1 className='font-medium'>Patient Information</h1>
    </div>
  );
};
