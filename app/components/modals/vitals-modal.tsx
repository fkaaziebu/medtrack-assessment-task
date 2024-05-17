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

export const VitalsModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'vitals';

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Vitals</DialogTitle>
        </DialogHeader>
        <div className='flex items-center bg-white px-5 py-2 text-gray-800'>
          <span className='text-sm font-bold'>14th Jul 2022</span>
        </div>
        <div className='flex flex-col'>
          {'1,2,3,4'.split(',').map((val) => {
            return (
              <div className='flex min-h-full w-full border-b border-[#f1f3f7] text-gray-800 last:border-none'>
                <div
                  style={{
                    backgroundImage:
                      'linear-gradient(rgb(246 248 251 / 96%), rgba(246, 248, 251, .96)), url("/png-transparent-diagonal-lines-pattern.png")',
                    backgroundPosition: '0 0, 0 0',
                    backgroundSize: 'auto, 240px',
                  }}
                  className='flex min-h-full w-[20%] flex-col gap-0.5 p-8 text-xs'
                >
                  <span className='text-[#7a7d7f]'>7:30 PM</span>
                </div>
                <div className='min-h-full w-[80%] px-5 py-6'>
                  <div className='flex items-center gap-3'>
                    <div className='flex flex-col gap-1'>
                      <h4 className='text-sm text-[#182430]'>Temp</h4>
                      <div className='flex items-center gap-2 rounded-md border border-[#d0d5e2] px-2.5 py-1.5 text-xs'>
                        <span className='text-[#182430]'>36</span>
                        <span className='text-[#7a7d7f]'>C</span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h4 className='text-sm text-[#182430]'>Heart Rate</h4>
                      <div className='flex items-center gap-2 rounded-md border border-[#d0d5e2] px-2.5 py-1.5 text-xs'>
                        <span className='text-[#182430]'>80</span>
                        <span className='text-[#7a7d7f]'>BPM</span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h4 className='text-sm text-[#182430]'>Blood Pressure</h4>
                      <div className='flex items-center gap-2 rounded-md border border-[#d0d5e2] text-xs'>
                        <div className='flex items-center gap-2 border-r border-r-[#d0d5e2] px-2.5 py-1.5'>
                          <span className='text-[#182430]'>120</span>
                          <span className='text-[#7a7d7f]'>Sys</span>
                        </div>
                        <div className='flex items-center gap-2 px-2.5 py-1.5'>
                          <span className='text-[#182430]'>120</span>
                          <span className='text-[#7a7d7f]'>Sys</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h4 className='text-sm text-[#182430]'>Weight</h4>
                      <div className='flex items-center gap-2 rounded-md border border-[#d0d5e2] px-2.5 py-1.5 text-xs'>
                        <span className='text-[#182430]'>72</span>
                        <span className='text-[#7a7d7f]'>Kg</span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h4 className='text-sm text-[#182430]'>Sp02</h4>
                      <div className='flex items-center gap-2 rounded-md border border-[#d0d5e2] px-2.5 py-1.5 text-xs'>
                        <span className='text-[#182430]'>98</span>
                        <span className='text-[#7a7d7f]'>%</span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h4 className='text-sm text-[#182430]'>Height</h4>
                      <div className='flex items-center gap-2 rounded-md border border-[#d0d5e2] px-2.5 py-1.5 text-xs'>
                        <span className='text-[#182430]'>170</span>
                        <span className='text-[#7a7d7f]'>cm</span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h4 className='text-sm text-[#182430]'>FBS</h4>
                      <div className='flex items-center gap-2 rounded-md border border-[#d0d5e2] px-2.5 py-1.5 text-xs'>
                        <span className='text-[#182430]'>5.5</span>
                        <span className='text-[#7a7d7f]'>mmol/L</span>
                      </div>
                    </div>
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
