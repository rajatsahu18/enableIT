import { createSlice } from "@reduxjs/toolkit";

interface AppState {
    loading: boolean;
    error: string | null;
}

const initialState: AppState = {
    loading: false,
    error: null,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        getAppStart(state) {
            state.loading = true;
            state.error = null;
        },
    },
});

export const { getAppStart } = appSlice.actions;

export default appSlice.reducer;