import { PatientBarHeader } from './patient-bar-header';
import { PatientBarProfile } from './patient-bar-profile';
import { PatientBarHospitalInfo } from './patient-bar-hospital-info';
import { PatientBarDiagnosis } from './patient-bar-diagnosis';
import { PatientBarTreatmentPlan } from './patient-bar-treatment-plan';
import { PatientBarNotesEmptyState } from './patient-bar-notes-empty-state';
import { PatientBarNotes } from './patient-bar-notes';

interface PatientBarProps {
  setOpenRightMenu?: any;
}

export default function PatientBar(props: PatientBarProps) {
  return (
    <>
      <PatientBarHeader setOpenRightMenu={props.setOpenRightMenu} />
      <div
        onClick={(e) => e.stopPropagation()}
        className='no-scrollbar ml-auto h-[calc(100%-3.75rem)] w-[85%] overflow-y-auto bg-white pb-8 lg:w-full'
      >
        <PatientBarProfile />
        <PatientBarHospitalInfo />
        <div className='flex flex-col gap-2 px-2 py-2'>
          <PatientBarDiagnosis />
          <PatientBarTreatmentPlan />
          <PatientBarNotesEmptyState />
          <PatientBarNotes />
        </div>
      </div>
    </>
  );
}
