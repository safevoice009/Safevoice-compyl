import {create} from 'zustand';

interface StoreState {
  studentId: string;
  posts: any[];
  initStudentId: () => void;
}

export const useStore = create<StoreState>((set) => ({
  studentId: localStorage.getItem('studentId') || `Student#${Math.floor(Math.random() * 9000 + 1000)}`,
  posts: [],
  initStudentId: () => {
    const id = `Student#${Math.floor(Math.random() * 9000 + 1000)}`;
    localStorage.setItem('studentId', id);
    set({ studentId: id });
  }
}));
