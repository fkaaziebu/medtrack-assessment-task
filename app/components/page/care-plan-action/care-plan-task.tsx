'use client'
import Image from 'next/image';
import { Card, CardBody, CardHeader } from '../../card/card';

import XMarkIcon from '@/public/x-close.svg';
import BinIcon from '@/public/ic-delete.svg';
import CheckIcon from '@/public/check.svg';

import { useModal } from '@/app/hooks/use-modal-store';
import { useState } from 'react';

export const CarePlanTask = () => {
  const [tasks, setTasks] = useState(['tasks']);
  const { onOpen } = useModal();
  return (
    <Card className='w-[100%] xl:w-[63%]'>
      <CardHeader className='justify-between px-8'>
        <h2 className='text-sm font-medium text-[#182430]'>Care Plan Task</h2>
        <span
          onClick={async () => {
            onOpen('task-history');
          }}
          className='cursor-pointer rounded-md border border-[#d0d5e2] bg-white px-2 py-1 text-sm text-[#182430]'
        >
          History
        </span>
      </CardHeader>
      <CardBody className='gap-0 px-0 py-0'>
        <div className='bg-[#f6f8fb] p-4'>
          <label
            htmlFor='task-creation'
            className='flex w-full items-center rounded-lg border border-[#d0d5e2] bg-white py-1 pl-3 pr-1 hover:border-[#027a48]'
          >
            <input
              id='task-creation'
              placeholder='Create tasks for the day'
              className='w-full'
            />
            <button className='flex h-9 w-24 items-center justify-center rounded-md bg-[#3952a6] px-2 py-3 text-sm text-white'>
              Add Task
            </button>
          </label>
        </div>
        <div className='p-4'>
          <div className='relative flex flex-col gap-2 rounded-lg bg-[#e9e4d7] py-4 pl-6 pr-10'>
            <div className='absolute right-4 top-4 cursor-pointer'>
              <Image src={XMarkIcon} alt='Close' className='h-4 w-4' />
            </div>
            <h2 className=' text-[#7a4a02]'>
              Organize your care plan with tasks
            </h2>
            <p className='text-sm text-[#a88652]'>
              Tasks act like mini-to-do lists. They help you stay organized,
              plan ahead, and reduce incidents.
            </p>
          </div>
        </div>
        <div className='p-4'>
          <div className='flex flex-col'>
            <div className='flex items-center px-2 pr-4 pt-2'>
              <h2 className='text-sm text-[#000000]'>Yesterday</h2>
            </div>
            <div className='flex items-start gap-2 px-2 pr-4 pt-2'>
              <label
                htmlFor=''
                className='flex w-full items-start gap-3 rounded-lg bg-[#e9edf1] py-2 pl-3 pr-5'
              >
                <input type='checkbox' className='hidden' />
                {!tasks.includes('tasks') ? (
                  <div className='h-5 w-5 rounded-md border border-[#d0d5e2] bg-white' />
                ) : (
                  <div className='flex h-5 w-5 items-center justify-center rounded-md border border-[#00b066] bg-[#00b066]'>
                    <Image
                      src={CheckIcon}
                      alt='Check'
                      className='h-3 w-3 text-white'
                    />
                  </div>
                )}
                <span className='text-[#d0d5e2]'>01</span>
                <p className='text-[#182430]'>
                  Give PT 400mg every 4-6 hours, not to exceed 1200mg in a
                  24-hour period.
                </p>
              </label>
              <div className='flex items-center justify-center rounded-full p-1 hover:bg-[#ffdbdb]'>
                <Image src={BinIcon} alt='Delete' className='h-4 w-4' />
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

