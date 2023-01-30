import { RootState } from '../store';

export const selectTags = (store: RootState) => store.tags.tags;

export const selectTagsLoading = (store: RootState) => store.tags.loading;

export const selectTagsFilstres = (store: RootState) => store.tags.filtres;
