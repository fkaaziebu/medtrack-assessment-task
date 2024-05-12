'use client';
import Image from 'next/image';
import { useModal } from '@/app/hooks/use-modal-store';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/dialog/dialog';
import CarePlanIcon from '@/public/ic-careplan.svg';

export const MedicationModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'medication';

  return (
    <Dialog open={isModalOpen} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Medication</DialogTitle>
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
            <div className='flex flex-col gap-4'>
              {'1,2,3'.split(',').map((val) => {
                return (
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col overflow-hidden rounded-md border border-[#d0d5e2]'>
                      <h1 className='truncate px-3 py-3 text-sm font-medium'>
                        Tab. Arthemeter Lumifantrin
                      </h1>
                      <div className='flex items-center bg-[#f6f8fb] px-2 py-4'>
                        <p className='text-sm font-light'>
                          <span className='text-[#027a48]'>200 mg </span>{' '}
                          <span className='text-[#6941c6]'>Oral </span>{' '}
                          <span className='text-[#b42318]'>BID</span>{' '}
                          <span className='text-[#b54708]'>6 of 7 days</span>
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 text-xs'>
                        <span className='text-[#7a7d7fb3]'>
                          Facility status
                        </span>
                        <span className='rounded-md bg-[#f6f8fb] px-2 py-1 text-[#182430]'>
                          Pending
                        </span>
                      </div>
                      <div className='flex items-center gap-3 text-xs'>
                        <span className='text-[#7a7d7fb3]'>Charted status</span>
                        <span className='rounded-md bg-[#f6f8fb] px-2 py-1 text-[#182430]'>
                          Pending
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                    alt='Care Plaln'
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
                    alt='Care Plaln'
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
                    alt='Care Plaln'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='truncate text-[#7a7d7f]'>Adam Newman</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex min-h-full w-full border-t border-t-[#f1f3f7] text-gray-800'>
          <div
            style={{
              backgroundImage:
                'linear-gradient(rgb(246 248 251 / 96%), rgba(246, 248, 251, .96)), url("/png-transparent-diagonal-lines-pattern.png")',
              backgroundPosition: '0 0, 0 0',
              backgroundSize: 'auto, 240px',
            }}
            className='flex min-h-full w-[20%] flex-col gap-0.5 p-8 text-xs'
          >
            <span className='text-[#7a7d7f]'>5:45 PM</span>
          </div>
          <div className='min-h-full w-[55%] px-5 py-6'>
            <div className='flex flex-col gap-4'>
              {'1'.split(',').map((val) => {
                return (
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col overflow-hidden rounded-md border border-[#d0d5e2]'>
                      <h1 className='truncate px-3 py-3 text-sm font-medium'>
                        Tab. Arthemeter Lumifantrin
                      </h1>
                      <div className='flex items-center bg-[#f6f8fb] px-2 py-4'>
                        <p className='text-sm font-light'>
                          <span className='text-[#027a48]'>200 mg </span>{' '}
                          <span className='text-[#6941c6]'>Oral </span>{' '}
                          <span className='text-[#b42318]'>BID</span>{' '}
                          <span className='text-[#b54708]'>6 of 7 days</span>
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 text-xs'>
                        <span className='text-[#7a7d7fb3]'>
                          Facility status
                        </span>
                        <span className='rounded-md bg-[#f6f8fb] px-2 py-1 text-[#182430]'>
                          Dispensed
                        </span>
                      </div>
                      <div className='flex items-center gap-3 text-xs'>
                        <span className='text-[#7a7d7fb3]'>Charted status</span>
                        <span className='rounded-md bg-[#f6f8fb] px-2 py-1 text-[#182430]'>
                          Dispensed
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                    alt='Care Plaln'
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
                    alt='Care Plaln'
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
                    alt='Care Plaln'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='truncate text-[#7a7d7f]'>Berlinda Adams</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex min-h-full w-full border-t border-t-[#f1f3f7] text-gray-800'>
          <div
            style={{
              backgroundImage:
                'linear-gradient(rgb(246 248 251 / 96%), rgba(246, 248, 251, .96)), url("/png-transparent-diagonal-lines-pattern.png")',
              backgroundPosition: '0 0, 0 0',
              backgroundSize: 'auto, 240px',
            }}
            className='flex min-h-full w-[20%] flex-col gap-0.5 p-8 text-xs'
          >
            <span className='text-[#7a7d7f]'>11:30 AM</span>
          </div>
          <div className='min-h-full w-[55%] px-5 py-6'>
            <div className='flex flex-col gap-4'>
              {'1'.split(',').map((val) => {
                return (
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-col overflow-hidden rounded-md border border-[#d0d5e2]'>
                      <h1 className='truncate px-3 py-3 text-sm font-medium'>
                        Tab. Arthemeter Lumifantrin
                      </h1>
                      <div className='flex items-center bg-[#f6f8fb] px-2 py-4'>
                        <p className='text-sm font-light'>
                          <span className='text-[#027a48]'>200 mg </span>{' '}
                          <span className='text-[#6941c6]'>Oral </span>{' '}
                          <span className='text-[#b42318]'>BID</span>{' '}
                          <span className='text-[#b54708]'>6 of 7 days</span>
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-3 text-xs'>
                        <span className='text-[#7a7d7fb3]'>
                          Facility status
                        </span>
                        <span className='rounded-md bg-[#f6f8fb] px-2 py-1 text-[#182430]'>
                          Dispensed
                        </span>
                      </div>
                      <div className='flex items-center gap-3 text-xs'>
                        <span className='text-[#7a7d7fb3]'>Charted status</span>
                        <span className='rounded-md bg-[#f6f8fb] px-2 py-1 text-[#182430]'>
                          Dispensed
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                    alt='Care Plaln'
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
                    alt='Care Plaln'
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
                    alt='Care Plaln'
                    className='h-3 w-3 text-[#b4b7be]'
                  />
                </div>
                <span className='truncate text-[#7a7d7f]'>Sandra Riley</span>
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
