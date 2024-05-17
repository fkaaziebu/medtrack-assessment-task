'use client';
import Image from 'next/image';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import { Card, CardBody, CardHeader } from '@/app/components/card/card';
import ChevronRightIcon from '@/public/ic-chevron-right.svg';
import ActivityIcon from '@/public/ic-activity.svg';
import StarIcon from '@/public/Medical-ID-dark.svg';
import XMarkIcon from '@/public/x-close.svg';
import BinIcon from '@/public/ic-delete.svg';
import CheckIcon from '@/public/check.svg';
import { useState } from 'react';
import { useModal } from '@/app/hooks/use-modal-store';

export default function Home() {
  const [tasks, setTasks] = useState(['tasks']);
  const { onOpen } = useModal();

  return (
    <div className='flex min-w-full flex-col gap-8 text-gray-900'>
      <div className='flex w-full'>
        <Breadcrumb />
      </div>
      <div className='flex flex-col items-center gap-8'>
        <Card className='w-[63%]'>
          <CardHeader className='justify-between px-8'>
            <h2 className='text-sm font-medium text-[#182430]'>
              Patient Vitals
            </h2>
            <span
              onClick={async () => {
                onOpen('vitals');
              }}
              className='cursor-pointer rounded-md border border-[#d0d5e2] bg-white px-2 py-1 text-sm text-[#182430]'
            >
              History
            </span>
          </CardHeader>
          <CardBody className='gap-2 px-8'>
            <div
              onClick={async () => {
                onOpen('vitals');
              }}
              className='flex cursor-pointer items-center justify-between rounded-md border border-[#f1f3f7] bg-white p-2 hover:bg-[#f6f8fb]'
            >
              <div className='flex items-center gap-5'>
                <div className='flex items-center justify-center rounded-full border border-[#d0d5e2] bg-white p-1'>
                  <Image src={ActivityIcon} alt='Activity' />
                </div>
                <span className='text-[#182430]'>Recent record at 8:30 AM</span>
              </div>
              <div className='h-full'>
                <Image
                  src={ChevronRightIcon}
                  alt='Chevron Right'
                  className='h-4 w-4'
                />
              </div>
            </div>
            <button
              onClick={async () => {
                onOpen('patientVitals');
              }}
              className='w-full rounded-md bg-[#3952a6] py-3.5 font-light text-white'
            >
              Record Vitals
            </button>
          </CardBody>
        </Card>
        <Card className='w-[63%]'>
          <CardHeader className='justify-between px-8'>
            <h2 className='text-sm font-medium text-[#182430]'>
              Medication Sheet
            </h2>
            <span
              onClick={async () => {
                onOpen('medication');
              }}
              className='cursor-pointer rounded-md border border-[#d0d5e2] bg-white px-2 py-1 text-sm text-[#182430]'
            >
              History
            </span>
          </CardHeader>
          <CardBody className='gap-2 px-8 py-6'>
            <div className='flex items-center justify-center rounded-md border border-dashed border-[#d0d5e2] bg-white px-4 py-6'>
              <span className='text-center text-sm text-[#7a7d7f]'>
                No data recorded for this encounter
              </span>
            </div>
          </CardBody>
        </Card>
        <Card className='w-[63%]'>
          <CardHeader className='justify-between px-8'>
            <h2 className='text-sm font-medium text-[#182430]'>
              Medication Sheet
            </h2>
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
                    <Image
                      src={StarIcon}
                      alt='Medical ID'
                      className='h-4 w-4'
                    />
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
        <Card className='w-[63%]'>
          <CardHeader className='justify-between px-8'>
            <h2 className='text-sm font-medium text-[#182430]'>
              Care Plan Task
            </h2>
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
        <Card className='w-[63%]'>
          <CardHeader className='justify-between px-8'>
            <h2 className='text-sm font-medium text-[#182430]'>Notes</h2>
            <span
              onClick={async () => {
                onOpen('notes');
              }}
              className='cursor-pointer rounded-md border border-[#d0d5e2] bg-white px-2 py-1 text-sm text-[#182430]'
            >
              All Notes
            </span>
          </CardHeader>
          <CardBody className='gap-0 px-0 py-0'>
            <div className='bg-white px-4 py-8'>
              <label
                htmlFor='task-creation'
                className='flex w-full items-center rounded-lg border border-[#d0d5e2] bg-white py-1 pl-3 pr-1 hover:border-[#027a48]'
              >
                <textarea
                  id='task-creation'
                  placeholder='Patient assessment note'
                  className='block w-full rounded-lg bg-white p-2.5 text-sm text-gray-900 outline-none '
                />
              </label>
            </div>
          </CardBody>
        </Card>
        <div className='flex w-[63%] flex-col gap-4'>
          <button className='w-full rounded-md bg-[#3952a6] py-4 text-white'>
            Done
          </button>
          <button className='w-full rounded-md border border-[#d0d5e2] bg-white py-4 text-[#e45151]'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
