import { User } from "@/types";
import { create } from "zustand";

interface AuthState {
  authLoading: boolean;
  user: User | null;
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User) => void;
  // eslint-disable-next-line no-unused-vars
  setAuthLoading: (authLoading: boolean) => void;
  logout: () => void;
}

const useAuthUser = create<AuthState>((set) => ({
  user: null,
  authLoading: true,
  setAuthLoading: (authLoading: boolean) => set({ authLoading }),
  setUser: (user: User) => set({ user, authLoading: false }),
  logout: () => set({ user: null }),
}));

export default useAuthUser;
