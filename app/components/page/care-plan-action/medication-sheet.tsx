'use client'
import Image from 'next/image';
import { Card, CardBody, CardHeader } from '@/app/components/card/card';
import StarIcon from '@/public/Medical-ID-dark.svg';

import { useModal } from '@/app/hooks/use-modal-store';

export const MedicationSheet = () => {
  const { onOpen } = useModal();
  return (
    <Card className='w-[100%] xl:w-[63%]'>
      <CardHeader className='justify-between px-8'>
        <h2 className='text-sm font-medium text-[#182430]'>Medication Sheet</h2>
        <span
          onClick={async () => {
            onOpen('medication');
          }}
          className='cursor-pointer rounded-md border border-[#d0d5e2] bg-white px-2 py-1 text-sm text-[#182430]'
        >
          History
        </span>
      </CardHeader>
      <CardBody className='gap-0 p-0'>
        <div
          style={{
            backgroundImage: 'linear-gradient(#fee, #fff)',
          }}
          className='flex items-center justify-center px-8 py-4'
        >
          <div className='flex w-full cursor-pointer items-center justify-between rounded-md border border-dashed border-[#ffd8d8] py-1 pl-3 pr-1 text-[#cc2625] hover:bg-white'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center justify-center'>
                <Image src={StarIcon} alt='Medical ID' className='h-4 w-4' />
              </div>
              <span className='text-sm text-[#cc2525]'>
                New medication detected, add to Care Plan
              </span>
            </div>
            <div>
              <button
                onClick={async () => {
                  onOpen('medicationDetectionModal');
                }}
                className='flex h-7 w-14 items-center justify-center rounded-md bg-[#cc2525] px-2 py-3 text-sm text-white'
              >
                Add
              </button>
            </div>
          </div>
        </div>
        {'01,02,03'.split(',').map((val) => {
          return (
            <div className='flex flex-col items-center justify-center border-b border-[#f1f3f7] px-8 py-4 last:border-none hover:bg-[#f6f8fb]'>
              <div className='flex w-full items-start gap-4'>
                <div>
                  <span className='text-3xl text-[#182430]'>{val}</span>
                </div>
                <div className='flex w-full flex-col gap-2'>
                  <div className='flex w-full flex-col overflow-hidden rounded-lg border border-[#d0d5e2]'>
                    <div className='flex items-center bg-white px-4 py-3'>
                      <h2 className='text-[#182430]'>Medication {val}</h2>
                    </div>
                    <div className='flex items-center gap-1.5 bg-[#f6f8fb] px-2 py-2 text-sm'>
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
                  <div className='flex items-center gap-2 text-[0.82rem]'>
                    <span className='text-[#7a7d7f]'>Scheduled</span>
                    <span className='rounded-md border border-[#f1f3f7] bg-[#f6f8fb] px-1.5 py-0.5 text-[#182430]'>
                      Today at 8:45 PM
                    </span>
                  </div>
                </div>
                <div>
                  <button
                    onClick={async () => {
                      onOpen('medication-schedule');
                    }}
                    className='flex h-9 w-20 items-center justify-center rounded-md bg-[#3952a6] px-2 py-3 text-sm text-white'
                  >
                    Open
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};
