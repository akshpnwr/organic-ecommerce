import { User } from "@/types";
import { create } from "zustand";

interface AuthState {
  user: User | null;
  // eslint-disable-next-line no-unused-vars
  setUser: (user: User) => void;
  logout: () => void;
}

const useAuthUser = create<AuthState>((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),
  logout: () => set({ user: null }),
}));

export default useAuthUser;
