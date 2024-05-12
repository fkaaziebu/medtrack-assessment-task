'use client';

import { useEffect, useState } from 'react';
import { MedicationDetectionModal } from '@/app/components/modals/medication-detection-modal';
import { SummaryModal } from '../modals/summary-modal';
import { MedicationModal } from '../modals/medication-modal';
import { DiagnosticModal } from '../modals/diagnostic-modal';
import { VitalsModal } from '../modals/vitals-modal';

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
    </>
  );
};
