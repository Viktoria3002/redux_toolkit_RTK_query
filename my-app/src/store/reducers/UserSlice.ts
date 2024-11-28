import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import { fetchUsers } from './ActionCreators';

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // usersFetching(state) {
    //   state.isLoading = true;
    // },
    // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false;
    //   state.error = '';
    //   state.users = action.payload;
    // },
    // usersFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.isLoading = false;
        state.error = '';
        state.users = action.payload;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          // Если ошибка была передана через rejectWithValue
          state.error = action.payload as string;
        } else {
          // Если ошибка не была передана через rejectWithValue
          state.error = 'Произошла ошибка';
        }
      });
  },
});

export default userSlice.reducer;
