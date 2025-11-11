import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Post {
  id: string;
  content: string;
  author: string;
  timestamp: number;
}

interface AppState {
  studentId: string | null;
  posts: Post[];
  setStudentId: (studentId: string | null) => void;
  addPost: (post: Post) => void;
  setUser: (user: string) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      studentId: null,
      posts: [],
      setStudentId: (studentId) => set({ studentId }),
      addPost: (post) => set((state) => ({ posts: [...state.posts, post] })),
      setUser: (user) => set({ studentId: user }),
    }),
    {
      name: "safevoice-storage",
    }
  )
);
