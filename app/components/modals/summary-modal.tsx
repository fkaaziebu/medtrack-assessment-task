'use client';

import { useModal } from '@/app/hooks/use-modal-store';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/dialog/dialog';

export const SummaryModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'summary';

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>History & Examination Notes</DialogTitle>
        </DialogHeader>
        <div className='flex min-h-full w-full text-gray-800'>
          <div
            style={{
              backgroundImage:
                'linear-gradient(rgb(246 248 251 / 96%), rgba(246, 248, 251, .96)), url("/png-transparent-diagonal-lines-pattern.png")',
              backgroundPosition: '0 0, 0 0',
              backgroundSize: 'auto, 240px',
            }}
            className='flex min-h-full w-[25%] flex-col gap-0.5 p-8 text-xs'
          >
            <span className=' font-medium'>7:30 PM</span>
            <span className='text-[#7a7d7f]'>14th Jul 2022</span>
          </div>
          <div className='min-h-full w-[75%] px-5 py-6'>
            <div className='flex w-full flex-col gap-5'>
              <div className='flex w-[10%] items-center justify-center rounded-xl border border-[#f1f3f7] px-2 py-1 text-xs'>
                <span className='text-[#7a7d7f]'>1 of 1</span>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex items-center rounded-md bg-[#fcf2d5] px-2 py-2'>
                  <div className='h-3.5 w-0.5  bg-[#7a4a02]' />
                  <span className='w-full truncate  px-2.5 text-sm text-[#7a4a02]'>
                    Examination Notes
                  </span>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className='text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </p>
                  <p className='text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                  <p className='text-sm'>
                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat. Aenean faucibus
                    nibh et justo cursus id rutrum lorem imperdiet.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex items-center rounded-md bg-[#f9f5ff] px-2 py-2'>
                  <div className='h-3.5 w-0.5  bg-[#5934b1]' />
                  <span className='w-full truncate  px-2.5 text-sm text-[#5934b1]'>
                    Diagnosis
                  </span>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2 border-b border-[#d0d5e2] pb-2'>
                    <h4 className='text-sm'>Cold Injury Syndrome</h4>
                    <div className='flex items-center gap-2'>
                      <span className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-1 py-0.5 text-xs '>
                        ICD
                      </span>
                      <span className='text-sm'>L502</span>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 border-b border-[#d0d5e2] pb-2'>
                    <h4 className='text-sm'>Urticaria Due To Cold And Heat</h4>
                    <div className='flex items-center gap-2'>
                      <span className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-1 py-0.5 text-xs '>
                        ICD
                      </span>
                      <span className='text-sm'>U202</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex items-center rounded-md bg-[#edf6f0] px-2 py-2'>
                  <div className='h-3.5 w-0.5  bg-[#5934b1]' />
                  <span className='w-full truncate  px-2.5 text-sm text-[#02683d]'>
                    Physician Treatment Plan
                  </span>
                </div>
                <div className='flex flex-col gap-5'>
                  <p className='text-sm'>
                    Duis cursus, mi quis viverra ornare, eros dolor interdum
                    nulla, ut commodo diam libero vitae erat. Aenean faucibus
                    nibh et justo cursus id rutrum lorem imperdiet.
                  </p>
                  <p className='text-sm'>
                    Nunc ut sem vitae risus tristique posuere. Duis cursus, mi
                    quis viverra ornare, eros dolor interdum nulla, ut commodo
                    diam libero vitae erat. Aenean faucibus nibh et justo cursus
                    id rutrum lorem imperdiet.
                  </p>
                  <p className='text-sm'>
                    Nunc ut sem vitae risus tristique posuere.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
