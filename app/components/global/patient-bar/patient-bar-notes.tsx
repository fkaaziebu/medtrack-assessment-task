export const PatientBarNotes = () => {
  return (
    <div className='overflow-clip rounded-lg border border-[#d0d5e2]'>
      <div className='flex items-center bg-[#f6f8fb] px-4 py-2'>
        <h2 className='text-sm text-[#7a7d7f]'>Notes</h2>
      </div>
      <div className='flex items-center justify-center px-4 py-4'>
        <div className='flex w-full flex-col items-center justify-center gap-1 rounded-md py-6'>
          <span className='text-sm text-[#7a7d7f]'>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
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
