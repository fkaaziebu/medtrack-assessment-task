'use client';

import { useModal } from '@/app/hooks/use-modal-store';
import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/dialog/dialog';
import FileIcon from '@/public/ic-file-attachment.svg';
import CarePlanIcon from '@/public/ic-careplan.svg';

export const DiagnosticModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'diagnostic';

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Diagnostics</DialogTitle>
        </DialogHeader>
        <div className='flex items-center bg-white px-5 py-2 text-gray-800'>
          <span className='text-sm font-bold'>14th Jul 2022</span>
        </div>
        <div className='flex min-h-full w-full text-gray-800'>
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
          <div className='min-h-full w-[55%] px-5 py-6'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-3 text-xs'>
                  <span className='font-medium text-[#182430]'>Requests</span>
                  <span className='rounded-md bg-[#f6f8fb] px-2 py-1 text-[#182430]'>
                    Completed
                  </span>
                </div>
                <div className='flex flex-wrap items-start gap-2'>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>FBC</span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>Cholestrol</span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>
                      Lipid Profile Total
                    </span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>
                      Serum Iron & TIBC
                    </span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>
                      Anti-Nuclear AB
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-3 text-xs'>
                  <span className='font-medium text-[#182430]'>Reports</span>
                </div>
                <div className='flex flex-wrap items-start gap-2'>
                  <div className='flex w-full items-center gap-2 rounded-md border border-[#f6f8fb] bg-[#f6f8fb] px-3 py-2 hover:border-[#d0d5e2]'>
                    <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] bg-white p-2'>
                      <Image
                        src={FileIcon}
                        alt='File'
                        className='h-6 w-6 text-[#7a7d7f]'
                      />
                    </div>
                    <div className='flex flex-col gap-1 text-xs'>
                      <span className='text-[#182430]'>
                        Full_checkup_report.pdf
                      </span>
                      <span className='text-[#7a7d7f]'>237.32 kb</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(rgb(246 248 251 / 96%), rgba(246, 248, 251, .96)), url("/png-transparent-diagonal-lines-pattern.png")',
              backgroundPosition: '0 0, 0 0',
              backgroundSize: 'auto, 240px',
            }}
            className='flex min-h-full w-[25%] flex-col justify-between gap-10 rounded-tl-xl px-4 py-8 text-xs'
          >
            <div className='mb-auto flex flex-col gap-1'>
              <span className='text-[#7a7d7f]'>Facility</span>
              <div className='flex items-end gap-1.5'>
                <div className='flex items-center justify-center rounded-full border bg-white p-1'>
                  <Image
                    src={CarePlanIcon}
                    alt='Care Plan'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='text-[#7a7d7f]'>Weija Pharmacy</span>
              </div>
            </div>
            <div className='mt-auto flex flex-col gap-1'>
              <span className='text-[#7a7d7f]'>Teams</span>
              <div className='flex items-end gap-1.5'>
                <div className='flex items-center justify-center rounded-full border bg-white p-1'>
                  <Image
                    src={CarePlanIcon}
                    alt='Care Plan'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='truncate text-[#7a7d7f]'>Adam Newman</span>
                <span className='rounded-md border border-[#d0d5e2] px-0.5'>
                  MD
                </span>
              </div>
              <div className='flex items-end gap-1.5'>
                <div className='flex items-center justify-center rounded-full border bg-white p-1'>
                  <Image
                    src={CarePlanIcon}
                    alt='Care Plan'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='truncate text-[#7a7d7f]'>Adam Newman</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex min-h-full w-full text-gray-800'>
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
          <div className='min-h-full w-[55%] px-5 py-6'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-3 text-xs'>
                  <span className='font-medium text-[#182430]'>Requests</span>
                  <span className='rounded-md bg-[#f6f8fb] px-2 py-1 text-[#182430]'>
                    Completed
                  </span>
                </div>
                <div className='flex flex-wrap items-start gap-2'>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>FBC</span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>Cholestrol</span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>
                      Lipid Profile Total
                    </span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>
                      Serum Iron & TIBC
                    </span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>
                      Anti-Nuclear AB
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-3 text-xs'>
                  <span className='font-medium text-[#182430]'>Reports</span>
                </div>
                <div className='flex flex-wrap items-start gap-2'>
                  <div className='flex w-full items-center gap-2 rounded-md border border-[#f6f8fb] bg-[#f6f8fb] px-3 py-2 hover:border-[#d0d5e2]'>
                    <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] bg-white p-2'>
                      <Image
                        src={FileIcon}
                        alt='File'
                        className='h-6 w-6 text-[#7a7d7f]'
                      />
                    </div>
                    <div className='flex flex-col gap-1 text-xs'>
                      <span className='text-[#182430]'>
                        Full_checkup_report.pdf
                      </span>
                      <span className='text-[#7a7d7f]'>237.32 kb</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(rgb(246 248 251 / 96%), rgba(246, 248, 251, .96)), url("/png-transparent-diagonal-lines-pattern.png")',
              backgroundPosition: '0 0, 0 0',
              backgroundSize: 'auto, 240px',
            }}
            className='flex min-h-full w-[25%] flex-col justify-between gap-10 rounded-tl-xl px-4 py-8 text-xs'
          >
            <div className='mb-auto flex flex-col gap-1'>
              <span className='text-[#7a7d7f]'>Facility</span>
              <div className='flex items-end gap-1.5'>
                <div className='flex items-center justify-center rounded-full border bg-white p-1'>
                  <Image
                    src={CarePlanIcon}
                    alt='Care Plan'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='text-[#7a7d7f]'>Weija Pharmacy</span>
              </div>
            </div>
            <div className='mt-auto flex flex-col gap-1'>
              <span className='text-[#7a7d7f]'>Teams</span>
              <div className='flex items-end gap-1.5'>
                <div className='flex items-center justify-center rounded-full border bg-white p-1'>
                  <Image
                    src={CarePlanIcon}
                    alt='Care Plan'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='truncate text-[#7a7d7f]'>Adam Newman</span>
                <span className='rounded-md border border-[#d0d5e2] px-0.5'>
                  MD
                </span>
              </div>
              <div className='flex items-end gap-1.5'>
                <div className='flex items-center justify-center rounded-full border bg-white p-1'>
                  <Image
                    src={CarePlanIcon}
                    alt='Care Plan'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='truncate text-[#7a7d7f]'>Adam Newman</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex min-h-full w-full text-gray-800'>
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
          <div className='min-h-full w-[55%] px-5 py-6'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-3 text-xs'>
                  <span className='font-medium text-[#182430]'>Requests</span>
                  <span className='rounded-md bg-[#f6f8fb] px-2 py-1 text-[#182430]'>
                    Completed
                  </span>
                </div>
                <div className='flex flex-wrap items-start gap-2'>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>FBC</span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>Cholestrol</span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>
                      Lipid Profile Total
                    </span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>
                      Serum Iron & TIBC
                    </span>
                  </div>
                  <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] px-2.5 py-1.5'>
                    <span className='text-xs text-[#182430]'>
                      Anti-Nuclear AB
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-3 text-xs'>
                  <span className='font-medium text-[#182430]'>Reports</span>
                </div>
                <div className='flex flex-wrap items-start gap-2'>
                  <div className='flex w-full items-center gap-2 rounded-md border border-[#f6f8fb] bg-[#f6f8fb] px-3 py-2 hover:border-[#d0d5e2]'>
                    <div className='flex items-center justify-center rounded-md border border-[#d0d5e2] bg-white p-2'>
                      <Image
                        src={FileIcon}
                        alt='File'
                        className='h-6 w-6 text-[#7a7d7f]'
                      />
                    </div>
                    <div className='flex flex-col gap-1 text-xs'>
                      <span className='text-[#182430]'>
                        Full_checkup_report.pdf
                      </span>
                      <span className='text-[#7a7d7f]'>237.32 kb</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                'linear-gradient(rgb(246 248 251 / 96%), rgba(246, 248, 251, .96)), url("/png-transparent-diagonal-lines-pattern.png")',
              backgroundPosition: '0 0, 0 0',
              backgroundSize: 'auto, 240px',
            }}
            className='flex min-h-full w-[25%] flex-col justify-between gap-10 rounded-tl-xl px-4 py-8 text-xs'
          >
            <div className='mb-auto flex flex-col gap-1'>
              <span className='text-[#7a7d7f]'>Facility</span>
              <div className='flex items-end gap-1.5'>
                <div className='flex items-center justify-center rounded-full border bg-white p-1'>
                  <Image
                    src={CarePlanIcon}
                    alt='Care Plan'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='text-[#7a7d7f]'>Weija Pharmacy</span>
              </div>
            </div>
            <div className='mt-auto flex flex-col gap-1'>
              <span className='text-[#7a7d7f]'>Teams</span>
              <div className='flex items-end gap-1.5'>
                <div className='flex items-center justify-center rounded-full border bg-white p-1'>
                  <Image
                    src={CarePlanIcon}
                    alt='Care Plan'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='truncate text-[#7a7d7f]'>Adam Newman</span>
                <span className='rounded-md border border-[#d0d5e2] px-0.5'>
                  MD
                </span>
              </div>
              <div className='flex items-end gap-1.5'>
                <div className='flex items-center justify-center rounded-full border bg-white p-1'>
                  <Image
                    src={CarePlanIcon}
                    alt='Care Plan'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='truncate text-[#7a7d7f]'>Adam Newman</span>
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
