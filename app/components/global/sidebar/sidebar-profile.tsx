'use client';
import profilePic from '@/public/avatar_patient_default.png';
import Image from 'next/image';
export const SidebarProfile = () => {
  const firstName = window.localStorage.getItem('firstName');
  const lastName = window.localStorage.getItem('lastName');
  const facilityName = window.localStorage.getItem('facilityName');
  return (
    <div className='flex w-full flex-col items-start justify-center gap-3 p-8'>
      <div className='h-16 w-16 overflow-clip rounded-full'>
        <Image src={profilePic} alt='Picture of Nurse' />
      </div>
      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-lg text-[#182430]'>
          {firstName} {lastName}
        </h1>
        <span className='text-[#7a7d7f]'>{facilityName}</span>
      </div>
    </div>
  );
};
