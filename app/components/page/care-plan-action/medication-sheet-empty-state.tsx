'use client'
import { Card, CardBody, CardHeader } from '@/app/components/card/card';
import { useModal } from '@/app/hooks/use-modal-store';

export const MedicationSheetEmptyState = () => {
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
      <CardBody className='gap-2 px-8 py-6'>
        <div className='flex items-center justify-center rounded-md border border-dashed border-[#d0d5e2] bg-white px-4 py-6'>
          <span className='text-center text-sm text-[#7a7d7f]'>
            No data recorded for this encounter
          </span>
        </div>
      </CardBody>
    </Card>
  );
};
