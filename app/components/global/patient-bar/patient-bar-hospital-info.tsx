import Image from 'next/image';
import FileIcon from '@/public/ic-file-attachment.svg';

export const PatientBarHospitalInfo = () => {
  return (
    <div className='border-b border-t border-[#d0d5e2]'>
      <div className='flex items-center gap-2 bg-[#f6f8fb] px-4 py-2'>
        <span className='text-sm font-medium text-[#182430]'>
          Dr Adam Newman
        </span>
        <span className='rounded-md border border-[#d0d5e2] bg-white px-1 py-0.5 text-xs font-light'>
          Physician
        </span>
      </div>
      <div className='flex w-full items-center gap-4 rounded-md px-3 py-4'>
        <div className='flex items-center justify-center rounded-full border border-[#d0d5e2] bg-white p-2'>
          <Image
            src={FileIcon}
            alt='Hospital File'
            className='h-8 w-8 text-[#182430]'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <span className='font-medium text-[#182430]'>
            Encounter At D.L Hospital
          </span>
          <span className='text-[#7a7d7f]'>28th Jan 2023</span>
        </div>
      </div>
    </div>
  );
};
