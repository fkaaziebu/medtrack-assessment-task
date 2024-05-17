export const PatientBarNotesEmptyState = () => {
  return (
    <div className='overflow-clip rounded-lg border border-[#d0d5e2]'>
      <div className='flex items-center bg-[#f6f8fb] px-4 py-2'>
        <h2 className='text-sm text-[#7a7d7f]'>Notes</h2>
      </div>
      <div className='flex items-center justify-center px-4 py-4'>
        <div className='flex w-full flex-col items-center justify-center gap-1 rounded-md border border-dashed border-[#d0d5e2] px-4 py-6'>
          <span className='text-center text-sm text-[#7a7d7f]'>
            Define empty state status and needed action if required
          </span>
        </div>
      </div>
      <div className='flex items-center gap-1 bg-[#f6f8fb] px-4 py-1.5 font-light'>
        <span className='text-sm text-[#7a7d7f]'>2ND JAN 2024</span>
        <div className='h-1 w-1 rounded-full bg-[#abb2b9]' />
        <span className='text-sm text-[#7a7d7f]'>2:15 PM</span>
      </div>
    </div>
  );
};
