'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import Image from 'next/image';
import CloudSavedIcon from '@/public/ic-saved.svg';
import ArrowBackIcon from '@/public/ic_arrow_back.svg';
import MenuIcon from '@/public/menu-03.svg';
import MenuRightIcon from '@/public/expand-right.svg';
import { ModalProvider } from '@/app/components/providers/modal-provider';
// Components
import Sidebar from '@/app/components/global/sidebar/side-bar';
import PatientBar from '@/app/components/global/PatientBar';
import { redirect, useRouter } from 'next/navigation';

export default function ({ children }: { children: React.ReactNode }) {
  const token = window.localStorage.getItem('token');
  if (!token) {
    redirect('/auth');
  }

  const [openLeftMenu, setOpenLeftMenu] = useState(false);
  const [openRightMenu, setOpenRightMenu] = useState(false);
  const router = useRouter()

  return (
    <div className='relative flex w-full font-sans text-[#182430]'>
      <div className='hidden h-screen border-r border-[#d0d5e2] lg:block lg:w-[22%] xl:w-[20%]'>
        <Sidebar />
      </div>
      <AnimatePresence>
        {openLeftMenu && (
          <div
            onClick={() => setOpenLeftMenu(false)}
            className='absolute z-30 h-screen w-full bg-zinc-900/80'
          >
            <motion.div
              initial={{ opacity: 0, x: '-100%' }}
              animate={{ opacity: 1, x: '0%' }}
              exit={{ opacity: 0, x: '-100%' }}
              className='h-full'
            >
              <Sidebar
                openLeftMenu={openLeftMenu}
                setOpenLeftMenu={setOpenLeftMenu}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className='h-screen w-full lg:w-[56%] xl:w-[60%]'>
        {/* Content Header */}
        <div className='relative flex  h-[3.75rem] w-full items-center justify-between gap-5 border-b border-[#d0d5e2] lg:static'>
          <div onClick={() => router.back()} className='hidden h-full w-20 cursor-pointer items-center justify-center lg:flex'>
            <Image
              src={ArrowBackIcon}
              alt='Backt to previous page'
              className='h-4 w-4'
            />
          </div>
          <div
            onClick={() => setOpenLeftMenu(true)}
            className='absolute flex h-full w-10 cursor-pointer items-center justify-center lg:hidden'
          >
            <Image
              src={MenuIcon}
              alt='Backt to previous page'
              className='h-6 w-6'
            />
          </div>
          <div className='flex w-full items-center justify-center'>
            <h1 className='font-medium'>Care Plan</h1>
          </div>
          <div
            onClick={() => setOpenRightMenu(true)}
            className='absolute right-0 flex h-full w-10 cursor-pointer items-center justify-center lg:hidden'
          >
            <Image
              src={MenuRightIcon}
              alt='Backt to previous page'
              className='h-6 w-6'
            />
          </div>
          <div className='relative hidden h-full w-20 items-center justify-center border-l border-[#d0d5e2] lg:flex'>
            <Image
              src={CloudSavedIcon}
              alt='Saved to cloud'
              className='h-6 w-6 text-[#d0d5e2]'
            />
            <div className='absolute right-6 top-5 h-1.5 w-1.5 rounded-full bg-[#00b066]' />
          </div>
        </div>
        <div className='no-scrollbar h-[calc(100%-3.75rem)] overflow-y-auto bg-[#f6f8fb] px-4 py-8'>
          {children}
        </div>
      </div>

      <AnimatePresence>
        {openRightMenu && (
          <div
            onClick={() => setOpenRightMenu(false)}
            className='absolute z-30 h-screen w-full bg-zinc-900/80'
          >
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: '0%' }}
              exit={{ opacity: 0, x: '100%' }}
              className='h-full'
            >
              <PatientBar setOpenRightMenu={setOpenRightMenu} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ModalProvider />
      <div className='hidden h-screen border-l border-[#d0d5e2] lg:block lg:w-[22%] xl:w-[20%]'>
        <PatientBar />
      </div>
    </div>
  );
}
