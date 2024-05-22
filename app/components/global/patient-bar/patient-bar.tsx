'use client';
import { PatientBarHeader } from './patient-bar-header';
import { PatientBarProfile } from './patient-bar-profile';
import { PatientBarHospitalInfo } from './patient-bar-hospital-info';
import { PatientBarDiagnosis } from './patient-bar-diagnosis';
import { PatientBarTreatmentPlan } from './patient-bar-treatment-plan';
import { PatientBarNotesEmptyState } from './patient-bar-notes-empty-state';
import { PatientBarNotes } from './patient-bar-notes';
import { useEffect, useState } from 'react';
import { patientData } from '@/lib/actions';

interface PatientBarProps {
  setOpenRightMenu?: any;
}

export default function PatientBar(props: PatientBarProps) {
  const [patient, setPatient] = useState({});
  const token = window.localStorage.getItem('token');
  const visitId = window.localStorage.getItem('visitId');
  const healthFacilityId = Number(window.localStorage.getItem('facilityId'));
  const getPatientDoctorVisitId = Number(visitId);

  const getPatientData = async () => {
    // @ts-ignore
    const { getVisitClinicalData, getPatientDoctorVisit } = await patientData(
      token,
      visitId,
      healthFacilityId,
      getPatientDoctorVisitId
    );

    setPatient({ ...getVisitClinicalData, ...getPatientDoctorVisit });
    console.log({ ...getVisitClinicalData, ...getPatientDoctorVisit });
  };

  useEffect(() => {
    getPatientData();
  }, []);
  return (
    <>
      <PatientBarHeader setOpenRightMenu={props.setOpenRightMenu} />
      <div
        onClick={(e) => e.stopPropagation()}
        className='no-scrollbar ml-auto h-[calc(100%-3.75rem)] w-[85%] overflow-y-auto bg-white pb-8 lg:w-full'
      >
        <PatientBarProfile />
        <PatientBarHospitalInfo
          title={
            // @ts-ignore
            patient?.title
          }
        />
        <div className='flex flex-col gap-2 px-2 py-2'>
          <PatientBarDiagnosis
            diagnosis={
              // @ts-ignore
              patient?.diagnosis
            }
          />
          <PatientBarTreatmentPlan
            treatmentPlan={
              // @ts-ignore
              patient.treatmentPlan
            }
          />
          <PatientBarNotesEmptyState />
          <PatientBarNotes
            notes={
              // @ts-ignore
              patient.clinicalSummary
            }
          />
        </div>
      </div>
    </>
  );
}
