import Image from 'next/image';
import { BoltIcon } from '@heroicons/react/24/solid';

export default function Sidebar() {
  return (
    <div className='flex h-full w-full'>
      {/* Sidebar Header */}
      <div className='flex h-[3.75rem] w-full items-center gap-5 border-b border-[#d0d5e2] bg-[#3952a6] text-blue-50'>
        <div className='flex h-full w-12 items-center justify-center bg-[#1d368b]'>
          <BoltIcon className='h-6 w-6' />
        </div>
        <h1 className=''>MedTrack</h1>
      </div>
      {/* User Info */}
      {/* Sidebar Links */}
      {/* Sidebar Footer */}
    </div>
  );
}
