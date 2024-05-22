'use client';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';
import PatientReview from '@/app/components/page/care-plan/patient-review';
import { patientReviewInfo } from '@/lib/actions';
import { useEffect, useState } from 'react';

export default function Home() {
  const [review, setReview] = useState({});
  const token = window.localStorage.getItem('token');
  const visitId = window.localStorage.getItem('visitId');
  const healthFacilityId = Number(window.localStorage.getItem('facilityId'));
  const getPatientDoctorVisitId = Number(visitId);

  const getPatientReviewInfo = async () => {
    // @ts-ignore
    const { getVisitClinicalData, getPatientDoctorVisit } =
      await patientReviewInfo(
        token,
        visitId,
        healthFacilityId,
        getPatientDoctorVisitId
      );

    setReview({ ...getVisitClinicalData, ...getPatientDoctorVisit });
    console.log({ ...getVisitClinicalData, ...getPatientDoctorVisit });
  };

  useEffect(() => {
    getPatientReviewInfo();
  }, []);

  return (
    <div className='flex min-w-full flex-col gap-8 text-gray-900'>
      <div className='flex w-full'>
        <Breadcrumb />
      </div>

      <div className='flex flex-col gap-4'>
        {Object.keys(review).length > 0 ? (
          <PatientReview review={review} />
        ) : null}
      </div>
    </div>
  );
}
