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

export const MedicationDetectionModal = () => {
  const { isOpen, onClose, type } = useModal();

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
        <DialogFooter className='flex-col gap-4'>
          <button
            onClick={() => onClose()}
            className='w-full rounded-md bg-[#3952a6] py-2 text-white'
          >
            Done
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
