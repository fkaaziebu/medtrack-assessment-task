'use client';

import Image from 'next/image';
import profilePic from '@/public/avatar_patient_default.png';
import {
  AdjustmentsHorizontalIcon,
  ArrowLeftStartOnRectangleIcon,
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  HomeModernIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const firstName = window.localStorage.getItem('firstName');
  const lastName = window.localStorage.getItem('lastName');
  const router = useRouter();

  return (
    <>
      {/* Sidebar Header */}
      <div className='flex h-[3.75rem] w-full items-center justify-center gap-5 border-b border-[#d0d5e2]'>
        <h1 className='font-medium'>Patient Information</h1>
      </div>
      <div className='no-scrollbar h-[calc(100%-3.75rem)] overflow-y-auto'>
        <div className='flex h-full flex-col'>
          <div className='flex w-full flex-col items-start justify-center gap-3 p-8'>
            <div className='h-16 w-16 overflow-clip rounded-full'>
              <Image src={profilePic} alt='Picture of Nurse' />
            </div>
            <div className='flex flex-col items-start justify-center'>
              <h1 className='text-lg text-[#182430]'>
                {firstName} {lastName}
              </h1>
              <span className='text-[#7a7d7f]'>GH 877 964 2877</span>
            </div>
          </div>
          <div className='w-full border-t border-t-[#d0d5e2]'>
            <div className='flex items-center gap-5 bg-white px-8 py-6 hover:bg-[#f6f8fb]'>
              <UserIcon className='h-5 w-5 text-[#7a7d7f]' />
              <span className='text-[#182430]'>Patients</span>
            </div>
            <div className='flex items-center gap-5 bg-white px-8 py-6 hover:bg-[#f6f8fb]'>
              <UserGroupIcon className='h-5 w-5 text-[#7a7d7f]' />
              <span className='text-[#182430]'>Waiting Room</span>
            </div>
            <div className='flex items-center gap-5 bg-white px-8 py-6 hover:bg-[#f6f8fb]'>
              <HomeModernIcon className='h-5 w-5 text-[#7a7d7f]' />
              <span className='text-[#182430]'>In-Patients</span>
            </div>
            <div className='flex items-center gap-5 bg-white px-8 py-6 hover:bg-[#f6f8fb]'>
              <BellIcon className='h-5 w-5 text-[#7a7d7f]' />
              <div className='flex items-center gap-2'>
                <span className='text-[#182430]'>Notifications</span>
                <span className='rounded-xl bg-[#e45151] px-2.5 py-0.5 text-xs text-white'>
                  4
                </span>
              </div>
            </div>
            <div className='flex items-center gap-5 bg-white px-8 py-6 hover:bg-[#f6f8fb]'>
              <AdjustmentsHorizontalIcon className='h-5 w-5 text-[#7a7d7f]' />
              <span className='text-[#182430]'>Settings</span>
            </div>
          </div>
          <div className='mt-auto flex flex-col gap-5 bg-[#f6f8fb] p-8'>
            <div className='flex items-center gap-4'>
              <button
                onClick={() => {
                  window.localStorage.clear();
                  router.refresh();
                }}
              >
                <div className='flex items-center gap-2'>
                  <ArrowLeftStartOnRectangleIcon className='h-5 w-5 text-[#e45151]' />
                  <span className='text-sm text-[#182430] hover:text-[#e45151]'>
                    Log Out
                  </span>
                </div>
              </button>
            </div>
            <div>
              <button>
                <div className='flex items-center gap-2 rounded-md border border-[#d0d5e2] bg-white p-1.5 text-[#7a7d7f]'>
                  <ChatBubbleBottomCenterTextIcon className='h-4 w-4' />
                  <span className='text-sm'>Feedback</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
