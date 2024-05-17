'use client';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import PatientReview from '@/app/components/page/care-plan/patient-review';


export default function Home() {
  
  return (
    <div className='flex min-w-full flex-col gap-8 text-gray-900'>
      <div className='flex w-full'>
        <Breadcrumb />
      </div>

      <div className='flex flex-col gap-4'>
        {'12345'.split('').map((val) => {
          return <PatientReview />;
        })}
      </div>
    </div>
  );
}
