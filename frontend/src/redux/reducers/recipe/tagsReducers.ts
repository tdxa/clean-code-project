import { handlePending, handleReject } from '../../../utils/redux';
import { TagsState } from '../../../api/recipeAPI';
import { createSlice } from '@reduxjs/toolkit';
import { fetchTags } from '../../actions/recipe/tagsActions';

const initialState: TagsState = {
  tags: undefined,
  filtres: undefined,
  succeeded: false,
  loading: false,
  error: false,
  errorMessage: undefined,
  errorDetails: undefined,
};

const TagsSlice = createSlice({
  name: 'tagsSlice',
  initialState,
  reducers: {
    setTagFilter(state, action) {
      state.filtres = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.tags = action.payload;
        state.succeeded = true;
        state.loading = false;
      })
      .addCase(fetchTags.pending, handlePending)
      .addCase(fetchTags.rejected, handleReject);
  },
});

export const { setTagFilter } = TagsSlice.actions;
export const tagsReducers = TagsSlice.reducer;
