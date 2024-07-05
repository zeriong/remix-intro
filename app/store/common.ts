import { create } from "zustand";

interface IUIStore {
  isOpenAside: boolean;
  setIsOpenAide: (arg: boolean) => void;
}

export const useUIStore = create<IUIStore>((setState, getState, store) => ({
  isOpenAside: false,

  setIsOpenAide: (payload: boolean) => setState({ isOpenAside: payload }),
}));
