'use client';

import { useEffect, useState } from 'react';
import { MedicationDetectionModal } from '@/app/components/modals/medication-detection-modal';
import { SummaryModal } from '../modals/summary-modal';
import { MedicationModal } from '../modals/medication-modal';
import { DiagnosticModal } from '../modals/diagnostic-modal';
import { VitalsModal } from '../modals/vitals-modal';
import { PatientVitalsModal } from '../modals/patient-vitals-modal';
import { NotesModal } from '../modals/notes-modal';
import { TaskHistoryModal } from '../modals/task-history-modal';
import { MedicationScheduleModal } from '../modals/medication-schedule-modal';
import { LogoutModal } from '../modals/logout-modal';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <MedicationDetectionModal />
      <SummaryModal />
      <MedicationModal />
      <DiagnosticModal />
      <VitalsModal />
      <PatientVitalsModal />
      <NotesModal />
      <TaskHistoryModal />
      <MedicationScheduleModal />
      <LogoutModal />
    </>
  );
};
