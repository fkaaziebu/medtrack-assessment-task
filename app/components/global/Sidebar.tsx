'use client';

import Image from 'next/image';
import logo from '@/public/Logo_MedTrack.svg';
import PatientIcon from '@/public/ic-patients.svg';
import WaitingRoomIcon from '@/public/ic-waiting-room.svg';
import InPatientIcon from '@/public/ic-inpatient.svg';
import NotificationIcon from '@/public/ic-notification-box.svg';
import SettingsIcon from '@/public/ic-settings.svg';
import LogoutIcon from '@/public/ic-logout-hover.svg';
import FeedbackIcon from '@/public/ic-feedback.svg';
import XMarkIcon from '@/public/Ico-Close.svg';

import profilePic from '@/public/avatar_patient_default.png';

import { useRouter } from 'next/navigation';

interface SidebarProps {
  setOpenLeftMenu?: any;
}

export default function Sidebar(props: SidebarProps) {
  const firstName = window.localStorage.getItem('firstName');
  const lastName = window.localStorage.getItem('lastName');
  const router = useRouter();

  return (
    <>
      {/* Sidebar Header */}
      <div
        onClick={(e) => e.stopPropagation()}
        className='relative flex h-[3.75rem] w-[85%] items-center gap-5 border-b border-[#d0d5e2] bg-[#3952a6] text-blue-50 lg:w-full'
      >
        <div className='flex h-full w-14 items-center justify-center bg-[#1d368b]'>
          <Image src={logo} alt='Medtrack Logo' className='h-5 w-5' />
        </div>
        <h1 className=''>MedTrack</h1>
        <div
          onClick={() => props.setOpenLeftMenu(false)}
          className='lg:hidden absolute right-4 top-4 cursor-pointer rounded-full p-1'
        >
          <Image src={XMarkIcon} alt='Close' className='h-5 w-5 text-white' />
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className='no-scrollbar h-[calc(100%-3.75rem)] w-[85%] overflow-y-auto lg:w-full'
      >
        <div className='flex h-full flex-col bg-white'>
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
              <Image
                src={PatientIcon}
                alt='Patient Logo'
                className='h-5 w-5 text-[#7a7d7f]'
              />
              <span className='text-[#182430]'>Patients</span>
            </div>
            <div className='flex items-center gap-5 bg-white px-8 py-6 hover:bg-[#f6f8fb]'>
              <Image
                src={WaitingRoomIcon}
                alt='Waiting Room'
                className='h-5 w-5 text-[#7a7d7f]'
              />
              <span className='text-[#182430]'>Waiting Room</span>
            </div>
            <div className='flex items-center gap-5 bg-white px-8 py-6 hover:bg-[#f6f8fb]'>
              <Image
                src={InPatientIcon}
                alt='In-patient'
                className='h-5 w-5 text-[#7a7d7f]'
              />
              <span className='text-[#182430]'>In-Patients</span>
            </div>
            <div className='flex items-center gap-5 bg-white px-8 py-6 hover:bg-[#f6f8fb]'>
              <Image
                src={NotificationIcon}
                alt='Notification'
                className='h-5 w-5 text-[#7a7d7f]'
              />
              <div className='flex items-center gap-2'>
                <span className='text-[#182430]'>Notifications</span>
                <span className='rounded-xl bg-[#e45151] px-2.5 py-0.5 text-xs text-white'>
                  4
                </span>
              </div>
            </div>
            <div className='flex items-center gap-5 bg-white px-8 py-6 hover:bg-[#f6f8fb]'>
              <Image
                src={SettingsIcon}
                alt='Settings'
                className='h-5 w-5 text-[#7a7d7f]'
              />
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
        </div>
      </div>
    </>
  );
}
