import Breadcrumb from '@/app/components/breadcrumb/Breadcrumb';
import { PatientVitals } from '@/app/components/page/care-plan-action/patient-vitals';
import { MedicationSheetEmptyState } from '@/app/components/page/care-plan-action/medication-sheet-empty-state';
import { MedicationSheet } from '@/app/components/page/care-plan-action/medication-sheet';
import { CarePlanTask } from '@/app/components/page/care-plan-action/care-plan-task';
import { Notes } from '@/app/components/page/care-plan-action/notes';

export default function Home() {
  return (
    <div className='flex min-w-full flex-col gap-8 text-gray-900'>
      <div className='flex w-full'>
        <Breadcrumb />
      </div>
      <div className='flex flex-col items-center gap-8'>
        <PatientVitals />
        <MedicationSheetEmptyState />
        <MedicationSheet />
        <CarePlanTask />
        <Notes />
        <div className='flex w-[100%] flex-col gap-4 xl:w-[63%]'>
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
