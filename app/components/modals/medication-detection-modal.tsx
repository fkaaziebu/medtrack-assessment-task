'use client';

import { useModal } from '@/app/hooks/use-modal-store';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/dialog/dialog';
import { useRouter } from 'next/navigation';

export const MedicationDetectionModal = () => {
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();

  const isModalOpen = isOpen && type === 'medicationDetectionModal';

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent className='min-h-[55%] min-w-[90%] xl:min-w-[30%]'>
        <DialogHeader className='flex flex-col gap-4 bg-[#3952a6] py-8'>
          <DialogTitle className='flex items-center gap-2 text-white'>
            <div className='flex items-center justify-center rounded-full bg-[#0000001a] bg-blue-950 px-2.5 py-1'>
              <span className='text-[#cfd9ff]'>Care Plan</span>
            </div>
            <div className='flex items-center justify-center rounded-full bg-[#0000001a] bg-blue-950 px-2.5 py-1'>
              <span className=' text-[#cfd9ff]'>Medication</span>
            </div>
          </DialogTitle>
          <DialogDescription className='text-base text-white'>
            New Medication Detected
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center bg-[#f6f8fb] py-2 px-4'>
          <span className='text-[#7a7d7f] text-sm'>Set Start Time To Continue</span>
        </div>
        {'01,02'.split(',').map((val) => {
          return (
            <div className='flex flex-col items-center justify-center border-b border-[#f1f3f7] px-4 py-4 last:border-none'>
              <div className='flex w-full items-start gap-4'>
                <div>
                  <span className='text-xl text-[#182430]'>{val}</span>
                </div>
                <div className='flex w-full flex-col gap-2'>
                  <div className='flex w-full flex-col overflow-hidden rounded-lg border border-[#d0d5e2]'>
                    <div className='flex items-center bg-white px-4 py-3'>
                      <h2 className='text-[#182430]'>Paracetamol {val}</h2>
                    </div>
                    <div className='flex items-center justify-between gap-1.5 bg-[#f6f8fb] px-2 py-2 text-sm'>
                      <span className='text-[#7a7d7f]'>Start time not set</span>
                      <button className='flex items-center justify-center rounded-md bg-[#3952a6] px-2 py-1 text-sm text-white'>
                        Set Time
                      </button>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 text-[0.82rem]'>
                    <span className='rounded-2xl bg-[#e3f3e9] px-2 py-0.5 text-[#027a48]'>
                      20 Mg
                    </span>
                    <span className='rounded-2xl bg-[#f9f5ff] px-2 py-0.5 text-[#6941c6]'>
                      Oral
                    </span>
                    <span className='rounded-2xl bg-[#fef3f2] px-2 py-0.5 text-[#b42318]'>
                      QID
                    </span>
                    <span className='rounded-2xl bg-[#fffaeb] px-2 py-0.5 text-[#b54708]'>
                      5 Days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <DialogFooter className='flex-col gap-4'>
          <button
            onClick={() => {
              onClose();
              router.push('/encounter/care-plan/care-plan-action');
            }}
            className='w-full rounded-md bg-[#3952a6] py-2 text-white'
          >
            Continue
          </button>
          <button
            onClick={() => onClose()}
            className='w-full rounded-md border border-[#d0d5e2] bg-white py-2 text-[#e45151]'
          >
            Cancel
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
