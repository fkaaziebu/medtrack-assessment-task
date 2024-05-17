'use client'
import { Card, CardBody, CardHeader } from '../../card/card';
import { useModal } from '@/app/hooks/use-modal-store';
export const Notes = () => {
  const { onOpen } = useModal();
  return (
    <Card className='w-[100%] xl:w-[63%]'>
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
  );
};
