import { create } from "zustand";

interface rentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const userentModal = create<rentModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default userentModal;
  