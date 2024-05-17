import Image from "next/image";
import PatientIcon from '@/public/ic-patients.svg';
import WaitingRoomIcon from '@/public/ic-waiting-room.svg';
import InPatientIcon from '@/public/ic-inpatient.svg';
import NotificationIcon from '@/public/ic-notification-box.svg';
import SettingsIcon from '@/public/ic-settings.svg';

export const SidebarNav = () => {
  return (
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
  );
};
