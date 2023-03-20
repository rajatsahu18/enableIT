import axios from "axios";
import { getUsersFailure, getUsersStart, getUsersSuccess } from "./userSlice"

export const fetchUsers = (page: number) => async (dispatch: any) => {
    try {
        dispatch(getUsersStart());
        const response = await axios.get(`https://give-me-users-forever.vercel.app/api/users/${page}/next`);
        dispatch(getUsersSuccess(response.data.users))
    } catch (err) {
        dispatch(getUsersFailure('err'))
    }
};