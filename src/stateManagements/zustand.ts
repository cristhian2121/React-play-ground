import create from 'zustand'

type CountStore = {
  count: number,
  sumCount: () => void,
  lesCount: () => void,
  restartCount: () => void,
}

export const useStore = create<CountStore>(set => ({
  count: 0,
  sumCount: () => set(state => ({ count: state.count + 1 })),
  lesCount: () => set(state => ({ count: state.count - 1 })),
  restartCount: () => set(state => ({ count: 0 }))
}))