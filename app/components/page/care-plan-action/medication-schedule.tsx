'use client';
import Image from 'next/image';
import { useState } from 'react';
import ChevronDownIcon from '@/public/ic-chevron-down.svg';

export const MedicationSchedule = () => {
  const [openMedicationDropdown, setOpenMedicationDropdown] = useState(false);
  return (
    <div className='flex flex-col items-center gap-5 border-b border-[#f1f3f7] px-5 py-6 last:border-none'>
      <div
        onClick={() => setOpenMedicationDropdown(!openMedicationDropdown)}
        className='flex w-full cursor-pointer items-start justify-between'
      >
        <div className='flex flex-col'>
          <h3 className='text-sm text-[#7a7d7f]'>DUE DATE</h3>
          <span className='text-[#182430]'>Mon, 21 Nov 2024</span>
        </div>
        <div className='flex rounded-full border border-[#f1f3f7] p-0.5'>
          <Image src={ChevronDownIcon} alt='Dropdown' className='h-4 w-4' />
        </div>
      </div>
      {openMedicationDropdown && (
        <div className='flex w-full flex-col gap-4'>
          <div className='flex w-full items-center gap-2 rounded-lg border border-[#e451511a] bg-[#e451511a] pb-3 pl-1 pr-8 pt-1'>
            <div
              style={{
                boxShadow:
                  '0 0 0 1px rgba(0, 0, 0, .1), 0 2px 4px rgba(0, 0, 0, .05)',
              }}
              className='flex w-[80%] flex-col overflow-hidden rounded-md border border-[#d0d5e2]'
            >
              <h1 className='truncate bg-white px-3 py-3 text-sm font-medium text-[#182430]'>
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
            <div className='flex w-[20%] flex-col items-end gap-4'>
              <div className='flex flex-col items-end'>
                <h2 className='text-xs text-[#e21f1f]'>OVERDUE</h2>
                <span className='text-lg font-medium text-[#e21f1f]'>
                  10:30 AM
                </span>
              </div>
              <div>
                <button className='flex h-7 w-14 items-center justify-center rounded-md bg-[#3952a6] px-2 py-3 text-sm text-white'>
                  Chart
                </button>
              </div>
            </div>
          </div>
          <div className='flex w-full items-center gap-2 rounded-lg border border-[#e451511a] bg-[#f6f8fb] pb-3 pl-1 pr-8 pt-1'>
            <div
              style={{
                boxShadow:
                  '0 0 0 1px rgba(0, 0, 0, .1), 0 2px 4px rgba(0, 0, 0, .05)',
              }}
              className='flex w-[80%] flex-col overflow-hidden rounded-md border border-[#d0d5e2]'
            >
              <h1 className='truncate bg-white px-3 py-3 text-sm font-medium text-[#182430]'>
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
            <div className='flex w-[20%] flex-col items-end gap-4'>
              <div className='flex flex-col items-end'>
                <h2 className='text-xs text-[#7a7d7f]'>DUE TIME</h2>
                <span className='text-lg font-medium text-[#182430]'>
                  8:45 AM
                </span>
              </div>
              <div>
                <span className='border text-xs rounded-sm border-[#d0d5e2cc] px-1.5 py-0.5 text-[#182430]'>
                  Pt Refused
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
