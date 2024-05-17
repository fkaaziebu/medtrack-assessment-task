import { create } from 'zustand';

export type ModalType =
  | 'summary'
  | 'medication'
  | 'diagnostic'
  | 'medicationDetectionModal'
  | 'vitals'
  | 'patientVitals'
  | 'notes'
  | 'task-history'
  | 'medication-schedule' | 'logout';

interface ModalData {}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false, type: null }),
}));
