// src/store/uiStore.js
import { create } from 'zustand';

// create 함수를 사용하여 스토어를 생성합니다.
const useUiStore = create((set) => ({
  // 상태 변수: isCanvasOpen (메뉴가 열렸는지 여부)
  isCanvasOpen: false,

  // 상태를 변경하는 액션: openCanvas (메뉴 열기)
  openCanvas: () => set({ isCanvasOpen: true }),

  // 상태를 변경하는 액션: closeCanvas (메뉴 닫기)
  closeCanvas: () => set({ isCanvasOpen: false }),

  // 상태를 토글하는 액션: toggleCanvas (메뉴 열고 닫기)
  toggleCanvas: () => set((state) => ({ isCanvasOpen: !state.isCanvasOpen })),
}));

export default useUiStore;