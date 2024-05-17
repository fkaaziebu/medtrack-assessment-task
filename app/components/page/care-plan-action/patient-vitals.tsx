'use client'
import Image from 'next/image';
import { Card, CardBody, CardHeader } from '@/app/components/card/card';
import { useModal } from '@/app/hooks/use-modal-store';
import ChevronRightIcon from '@/public/ic-chevron-right.svg';
import ActivityIcon from '@/public/ic-activity.svg';

export const PatientVitals = () => {
  const { onOpen } = useModal();

  return (
    <Card className='w-[100%] xl:w-[63%]'>
      <CardHeader className='justify-between px-8'>
        <h2 className='text-sm font-medium text-[#182430]'>Patient Vitals</h2>
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
  );
};
