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
import { MedicationSchedule } from '../page/care-plan-action/medication-schedule';

export const MedicationScheduleModal = () => {
  const { isOpen, onClose, type } = useModal();
  const router = useRouter();
  
  const isModalOpen = isOpen && type === 'medication-schedule';

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent className='min-h-[55%] min-w-[90%] xl:min-w-[40%]'>
        <DialogHeader className='flex flex-col gap-4 bg-[#3952a6] py-8'>
          <DialogTitle className='flex items-center gap-2 text-white'>
            <div className='flex items-center justify-center rounded-full bg-[#0000001a] bg-blue-950 px-2.5 py-1'>
              <span className='text-[#cfd9ff]'>Medication</span>
            </div>
            <div className='flex items-center justify-center rounded-full bg-[#0000001a] bg-blue-950 px-2.5 py-1'>
              <span className=' text-[#cfd9ff]'>Chart</span>
            </div>
          </DialogTitle>
          <DialogDescription className='text-base text-white'>
            Medication Schedule
          </DialogDescription>
        </DialogHeader>
        {'1,2,3,4,5'.split(',').map((val) => {
          return <MedicationSchedule />;
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
