import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./user/userSlice";
import appReducer from "./app/appSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        app: appReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;