import { create } from "zustand";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  order?: string | null;
  searchString?: string;
}

interface GameStoreQuery {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatFormId: (platformId: number) => void;
  setSearchText: (searchString: string) => void;
  setOrder: (order: string) => void;
}

const useGameStore = create<GameStoreQuery>((set) => ({
  gameQuery: {},
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatFormId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setOrder: (order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, order } })),
  setSearchText: (searchString) => set(() => ({ gameQuery: { searchString } })),
}));

export default useGameStore;
