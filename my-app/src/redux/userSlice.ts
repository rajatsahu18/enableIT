import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
    users: any[];
    loading: boolean;
    error: string | null;
    page: number;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
    page: 0,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersStart(state) {
            state.loading = true;
            state.error = null;
        },
        getUsersSuccess(state, action: PayloadAction<any[]>) {
            state.users = action.payload;
            state.loading = false;
            state.error = null;
        },
        getUsersFailure(state, action: PayloadAction<string>) {
            state.users = [];
            state.loading = false;
            state.error = action.payload;
        },
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
});

export const { getUsersStart, getUsersSuccess, getUsersFailure, setPage} = usersSlice.actions;

export default usersSlice.reducer;