import Image from 'next/image';
import profilePic from '@/public/MedTrack_User_Male_03.jpeg';
import { NewspaperIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const firstName = window.localStorage.getItem('firstName');
  const lastName = window.localStorage.getItem('lastName');
  return (
    <>
      {/* Sidebar Header */}
      <div className='flex h-[3.75rem] w-full items-center justify-center gap-5 border-b border-[#d0d5e2]'>
        <h1 className='font-medium'>Patient Information</h1>
      </div>
      <div className='no-scrollbar h-[calc(100%-3.75rem)] overflow-y-auto pb-8'>
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
              <NewspaperIcon className='h-8 w-8 text-[#182430]' />
            </div>
            <div className='flex flex-col gap-1'>
              <span className='font-medium text-[#182430]'>
                Encounter At D.L Hospital
              </span>
              <span className='text-[#7a7d7f]'>28th Jan 2023</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 px-2 py-2'>
          <div className='overflow-clip rounded-lg border border-[#d0d5e2]'>
            <div className='flex items-center bg-[#f6f8fb] px-4 py-2'>
              <h2 className='text-sm text-[#7a7d7f]'>Diagnosis</h2>
            </div>
            <div className='flex flex-col gap-1 border-b border-b-[#f1f3f7] px-4 py-2'>
              <h3 className='font-light text-[#182430]'>
                Uricaria Due To Cold And Heat
              </h3>
              <div className='flex items-center gap-3'>
                <span className='rounded-md border border-[#d0d5e2] px-1 py-0.5 text-xs text-[#7a7d7f]'>
                  ICD
                </span>
                <span className='text-sm text-[#7a7d7f]'>U202</span>
              </div>
            </div>
            <div className='flex flex-col gap-1 border-b border-b-[#f1f3f7] px-4 py-2'>
              <h3 className='font-light text-[#182430]'>
                Cold Injury Syndrome
              </h3>
              <div className='flex items-center gap-3'>
                <span className='rounded-md border border-[#d0d5e2] px-1 py-0.5 text-xs text-[#7a7d7f]'>
                  ICD
                </span>
                <span className='text-sm text-[#7a7d7f]'>L502</span>
              </div>
            </div>
            <div className='flex flex-col gap-1 border-b border-b-[#f1f3f7] px-4 py-2'>
              <h3 className='font-light text-[#182430]'>
                Chronic pain due to trauma
              </h3>
              <div className='flex items-center gap-3'>
                <span className='rounded-md border border-[#d0d5e2] px-1 py-0.5 text-xs text-[#7a7d7f]'>
                  ICD
                </span>
                <span className='text-sm text-[#7a7d7f]'>G8921</span>
              </div>
            </div>
            <div className='flex items-center gap-1 bg-[#f6f8fb] px-4 py-1.5 font-light'>
              <span className='text-sm text-[#7a7d7f]'>TODAY</span>
              <div className='h-1 w-1 rounded-full bg-[#abb2b9]' />
              <span className='text-sm text-[#7a7d7f]'>2:15 PM</span>
            </div>
          </div>
          <div className='overflow-clip rounded-lg border border-[#d0d5e2]'>
            <div className='flex items-center bg-[#f6f8fb] px-4 py-2'>
              <h2 className='text-sm text-[#7a7d7f]'>
                Physician Treatment Plan
              </h2>
            </div>
            <div className='flex items-center justify-center px-4 py-4'>
              <div className='flex w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed border-[#d0d5e2] px-4 py-6'>
                <span className='text-center text-sm text-[#7a7d7f]'>
                  No data recorded for this encounter
                </span>
              </div>
            </div>
            <div className='flex items-center gap-1 bg-[#f6f8fb] px-4 py-1.5 font-light'>
              <span className='text-sm text-[#7a7d7f]'>2ND JAN 2024</span>
              <div className='h-1 w-1 rounded-full bg-[#abb2b9]' />
              <span className='text-sm text-[#7a7d7f]'>2:15 PM</span>
            </div>
          </div>
          <div className='overflow-clip rounded-lg border border-[#d0d5e2]'>
            <div className='flex items-center bg-[#f6f8fb] px-4 py-2'>
              <h2 className='text-sm text-[#7a7d7f]'>Notes</h2>
            </div>
            <div className='flex items-center justify-center px-4 py-4'>
              <div className='flex w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed border-[#d0d5e2] px-4 py-6'>
                <span className='text-center text-sm text-[#7a7d7f]'>
                  Define empty state status and needed action if required
                </span>
              </div>
            </div>
            <div className='flex items-center gap-1 bg-[#f6f8fb] px-4 py-1.5 font-light'>
              <span className='text-sm text-[#7a7d7f]'>2ND JAN 2024</span>
              <div className='h-1 w-1 rounded-full bg-[#abb2b9]' />
              <span className='text-sm text-[#7a7d7f]'>2:15 PM</span>
            </div>
          </div>
          <div className='overflow-clip rounded-lg border border-[#d0d5e2]'>
            <div className='flex items-center bg-[#f6f8fb] px-4 py-2'>
              <h2 className='text-sm text-[#7a7d7f]'>Notes</h2>
            </div>
            <div className='flex items-center justify-center px-4 py-4'>
              <div className='flex w-full flex-col items-center justify-center gap-1 rounded-md py-6'>
                <span className='text-sm text-[#7a7d7f]'>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </div>
            </div>
            <div className='flex items-center gap-1 bg-[#f6f8fb] px-4 py-1.5 font-light'>
              <span className='text-sm text-[#7a7d7f]'>2ND JAN 2024</span>
              <div className='h-1 w-1 rounded-full bg-[#abb2b9]' />
              <span className='text-sm text-[#7a7d7f]'>2:15 PM</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
