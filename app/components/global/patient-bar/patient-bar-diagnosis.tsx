export const PatientBarDiagnosis = () => {
  return (
    <div className='overflow-clip rounded-lg border border-[#d0d5e2]'>
      <div className='flex items-center bg-[#f6f8fb] px-4 py-2'>
        <h2 className='text-sm text-[#7a7d7f]'>Diagnosis</h2>
      </div>
      <div className='flex flex-col gap-1 border-b border-b-[#f1f3f7] px-4 py-2'>
        <h3 className='font-light text-[#182430]'>
          Uricaria Due To Cold And Heat
        </h3>
        <div className='flex items-center gap-3'>
          <span className='rounded-md border border-[#d0d5e2] px-1 py-0.5 text-xs text-[#7a7d7f]'>
            ICD
          </span>
          <span className='text-sm text-[#7a7d7f]'>U202</span>
        </div>
      </div>
      <div className='flex flex-col gap-1 border-b border-b-[#f1f3f7] px-4 py-2'>
        <h3 className='font-light text-[#182430]'>Cold Injury Syndrome</h3>
        <div className='flex items-center gap-3'>
          <span className='rounded-md border border-[#d0d5e2] px-1 py-0.5 text-xs text-[#7a7d7f]'>
            ICD
          </span>
          <span className='text-sm text-[#7a7d7f]'>L502</span>
        </div>
      </div>
      <div className='flex flex-col gap-1 border-b border-b-[#f1f3f7] px-4 py-2'>
        <h3 className='font-light text-[#182430]'>
          Chronic pain due to trauma
        </h3>
        <div className='flex items-center gap-3'>
          <span className='rounded-md border border-[#d0d5e2] px-1 py-0.5 text-xs text-[#7a7d7f]'>
            ICD
          </span>
          <span className='text-sm text-[#7a7d7f]'>G8921</span>
        </div>
      </div>
      <div className='flex items-center gap-1 bg-[#f6f8fb] px-4 py-1.5 font-light'>
        <span className='text-sm text-[#7a7d7f]'>TODAY</span>
        <div className='h-1 w-1 rounded-full bg-[#abb2b9]' />
        <span className='text-sm text-[#7a7d7f]'>2:15 PM</span>
      </div>
    </div>
  );
};
