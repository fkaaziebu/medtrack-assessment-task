'use client';
import Image from 'next/image';
import { useModal } from '@/app/hooks/use-modal-store';
import PatientAvatar from '@/public/avatar_patient_default.png';
import CalendarIcon from '@/public/ic-date.svg';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/dialog/dialog';

export const NotesModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'notes';

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Notes</DialogTitle>
        </DialogHeader>
        <div className='flex min-h-full w-full flex-col gap-5  bg-[#f6f8fb] px-8 py-6 text-gray-800'>
          {'1,2,3,4'.split(',').map((val) => {
            return (
              <div className='rounded-lg border border-[#f1f3f7] bg-white'>
                <div className='flex items-center border-b border-[#f1f3f7] px-3 py-2'>
                  <p className='text-sm leading-6'>
                    Patient refused the ibuprofen for fever treatment. I
                    recommend IV dose of 200-400mg every 4-6 hours, not to
                    exceed 1200mg in a 24-hour period.
                  </p>
                </div>
                <div className='flex items-center justify-between px-3 py-2'>
                  <div className='flex items-center gap-1'>
                    <Image
                      src={PatientAvatar}
                      alt='Patient Avatar'
                      className='h-5 w-5 rounded-full border border-[#d0d5e2] pt-0.5 text-[#3952a6]'
                    />
                    <span className='text-sm text-[#7a7d7f]'>Sandra Riley</span>
                    <span className='rounded-md border border-[#d0d5e2] px-0.5'>
                      MD
                    </span>
                  </div>
                  <div className='flex items-center gap-1 px-4 py-1.5 font-light'>
                    <Image
                      src={CalendarIcon}
                      alt='Date'
                      className='h-4 w-4 text-[#7a7d7f]'
                    />
                    <span className='text-sm text-[#7a7d7f]'>24 Aug 2022</span>
                    <div className='h-1 w-1 rounded-full bg-[#abb2b9]' />
                    <span className='text-sm text-[#7a7d7f]'>2:15 PM</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <DialogFooter>
          <button
            onClick={() => onClose()}
            className='w-full rounded-md bg-[#3952a6] py-4 text-white'
          >
            Done
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
