'use client';
import Image from 'next/image';
import profilePic from '@/public/MedTrack_User_Male_03.jpeg';

export const PatientBarProfile = () => {
  const firstName = window.localStorage.getItem('firstName');
  const lastName = window.localStorage.getItem('lastName');
  return (
    <div className='flex w-full flex-col items-center justify-center gap-3 py-8'>
      <div className='h-16 w-16 overflow-clip rounded-full'>
        <Image src={profilePic} alt='Picture of Nurse' />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-lg text-[#182430]'>
          {firstName} {lastName}
        </h1>
        <span className='text-[#7a7d7f]'>GH 877 964 2877</span>
      </div>
    </div>
  );
};
