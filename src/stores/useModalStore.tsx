import { create } from 'zustand';


type ModalType = 'language' | 'rating' | 'sidebar' | null;

interface ModalStore {
  activeModal: ModalType;
  isOpen: (type: ModalType) => boolean;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}


export const useModalStore = create<ModalStore>((set, get) => ({
  activeModal: null,
  isOpen: (type) => get().activeModal === type,
  openModal: (type) => set({ activeModal: type }),
  closeModal: () => set({ activeModal: null }),
}));