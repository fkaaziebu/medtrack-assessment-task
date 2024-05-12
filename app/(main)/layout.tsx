'use client';

import React from 'react';
import { ModalProvider } from '@/app/components/providers/modal-provider';
// Components
import Sidebar from '@/app/components/global/Sidebar';
import PatientBar from '@/app/components/global/PatientBar';
import { ArrowLeftIcon, CloudIcon } from '@heroicons/react/24/outline';
import { redirect } from 'next/navigation';

export default function ({ children }: { children: React.ReactNode }) {
  const token = window.localStorage.getItem('token');
  if (!token) {
    redirect('/auth');
  }

  return (
    <div className='relative flex w-full font-sans text-[#182430]'>
      <div className='h-screen w-[20%] border-r border-[#d0d5e2]'>
        <Sidebar />
      </div>

      <div className='h-screen w-[60%]'>
        {/* Content Header */}
        <div className='flex h-[3.75rem] w-full items-center justify-between gap-5 border-b border-[#d0d5e2]'>
          <div className='flex h-full w-20 cursor-pointer items-center justify-center'>
            <ArrowLeftIcon className='h-4 w-4' />
          </div>
          <h1 className='font-medium'>Care Plan</h1>
          <div className='relative flex h-full w-20 items-center justify-center border-l border-[#d0d5e2]'>
            <CloudIcon className='h-6 w-6 text-[#d0d5e2]' />
            <div className='absolute right-5 top-4 h-1.5 w-1.5 rounded-full bg-green-500' />
          </div>
        </div>
        <div className='no-scrollbar h-[calc(100%-3.75rem)] overflow-y-auto bg-[#f6f8fb] px-4 py-8'>
          {children}
        </div>
      </div>
      <ModalProvider />
      <div className='h-screen w-[20%] border-l border-[#d0d5e2]'>
        <PatientBar />
      </div>
    </div>
  );
}
