'use client';

import { useModal } from '@/app/hooks/use-modal-store';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/dialog/dialog';
import { BoltIcon, NewspaperIcon } from '@heroicons/react/24/outline';

export const PatientVitalsModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'patientVitals';

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Vitals</DialogTitle>
        </DialogHeader>
        <div className='flex items-center justify-center bg-white p-4'>
          <div className='flex w-full flex-wrap items-center gap-6 rounded-lg bg-[#f6f8fb] px-6 py-8'>
            <div className='flex flex-col gap-2'>
              <h4 className='text-sm text-[#182430]'>Temperature</h4>
              <div className='flex items-center text-xs'>
                <input className='flex w-16 rounded-l-md border border-r-0 border-[#d0d5e2] bg-white px-4 py-2.5 text-[#182430] hover:border-r hover:border-[#00b066] focus:bg-[#00b0661a] focus:outline-[#00b066] focus:ring-0' />
                <span className='rounded-r-md border border-l-0 border-[#d0d5e2] bg-[#f6f8fb] px-4 py-2.5 text-[#7a7d7f]'>
                  C
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-sm text-[#182430]'>Heart Rate</h4>
              <div className='flex items-center text-xs'>
                <input className='flex w-16 rounded-l-md border border-r-0 border-[#d0d5e2] bg-white px-4 py-2.5 text-[#182430] hover:border-r hover:border-[#00b066] focus:bg-[#00b0661a] focus:outline-[#00b066] focus:ring-0' />
                <span className='rounded-r-md border border-l-0 border-[#d0d5e2] bg-[#f6f8fb] px-4 py-2.5 text-[#7a7d7f]'>
                  BPM
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-sm text-[#182430]'>Temperature</h4>
              <div className='flex items-center text-xs'>
                <input className='flex w-16 rounded-l-md border border-r-0 border-[#d0d5e2] bg-white px-4 py-2.5 text-[#182430] hover:border-r hover:border-[#00b066] focus:bg-[#00b0661a] focus:outline-[#00b066] focus:ring-0' />
                <span className='border-b border-t border-[#d0d5e2] bg-[#f6f8fb] px-4 py-2.5 text-[#7a7d7f]'>
                  Sys
                </span>
                <input className='flex w-16 border-b border-t border-[#d0d5e2] bg-white px-4 py-2.5 text-[#182430] hover:border-l hover:border-r hover:border-[#00b066] focus:bg-[#00b0661a] focus:outline-[#00b066] focus:ring-0' />
                <span className='rounded-r-md border border-l-0 border-[#d0d5e2] bg-[#f6f8fb] px-4 py-2.5 text-[#7a7d7f]'>
                  Dia
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-sm text-[#182430]'>Weight</h4>
              <div className='flex items-center text-xs'>
                <input className='flex w-16 rounded-l-md border border-r-0 border-[#d0d5e2] bg-white px-4 py-2.5 text-[#182430] hover:border-r hover:border-[#00b066] focus:bg-[#00b0661a] focus:outline-[#00b066] focus:ring-0' />
                <span className='rounded-r-md border border-l-0 border-[#d0d5e2] bg-[#f6f8fb] px-4 py-2.5 text-[#7a7d7f]'>
                  Kg
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-sm text-[#182430]'>Sp02</h4>
              <div className='flex items-center text-xs'>
                <input className='flex w-16 rounded-l-md border border-r-0 border-[#d0d5e2] bg-white px-4 py-2.5 text-[#182430] hover:border-r hover:border-[#00b066] focus:bg-[#00b0661a] focus:outline-[#00b066] focus:ring-0' />
                <span className='rounded-r-md border border-l-0 border-[#d0d5e2] bg-[#f6f8fb] px-4 py-2.5 text-[#7a7d7f]'>
                  %
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-sm text-[#182430]'>Height</h4>
              <div className='flex items-center text-xs'>
                <input className='flex w-16 rounded-l-md border border-r-0 border-[#d0d5e2] bg-white px-4 py-2.5 text-[#182430] hover:border-r hover:border-[#00b066] focus:bg-[#00b0661a] focus:outline-[#00b066] focus:ring-0' />
                <span className='rounded-r-md border border-l-0 border-[#d0d5e2] bg-[#f6f8fb] px-4 py-2.5 text-[#7a7d7f]'>
                  cm
                </span>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h4 className='text-sm text-[#182430]'>FBS</h4>
              <div className='flex items-center text-xs'>
                <input className='flex w-16 rounded-l-md border border-r-0 border-[#d0d5e2] bg-white px-4 py-2.5 text-[#182430] hover:border-r hover:border-[#00b066] focus:bg-[#00b0661a] focus:outline-[#00b066] focus:ring-0' />
                <span className='rounded-r-md border border-l-0 border-[#d0d5e2] bg-[#f6f8fb] px-4 py-2.5 text-[#7a7d7f]'>
                  mmol/L
                </span>
              </div>
            </div>
          </div>
        </div>
        <DialogFooter className='flex-col gap-4'>
          <button
            onClick={() => onClose()}
            className='w-full rounded-md bg-[#3952a6] py-4 text-white'
          >
            Done
          </button>
          <button
            onClick={() => onClose()}
            className='w-full rounded-md border border-[#d0d5e2] bg-white py-4 text-[#e45151]'
          >
            Cancel
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
