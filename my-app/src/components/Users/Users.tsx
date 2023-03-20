import React from 'react';
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../redux/store';
import { fetchUsers } from '../../redux/userAction';
import { setPage } from '../../redux/userSlice';
import "./Users.css";


const Users: React.FC = () => {
    const dispatch = useAppDispatch();
    const { users, loading, error, page } = useAppSelector((state: RootState) => state.users)
    console.log(users)

    React.useEffect(() => {
        dispatch(fetchUsers(page))
    }, [dispatch, page])

    const handlePrevPage = () => {
        dispatch(setPage(page - 1))
    }

    const handleNextPage = () => {
        dispatch(setPage(page + 1))
    }

    return loading ? (
        <p>Loading users...</p>
    ) : error ? (
        <p>Error: {error} </p>
    ) : (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                {users.length > 0 && users?.map((user) => (
                    <tr key={user.ID} >
                        <td>{user.FirstNameLastName}</td>
                        <td>{user.JobTitle}</td>
                        <td>{user.EmailAddress}</td>
                        <td>{user.Phone}</td>
                        <td>{user.Company}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className='button-wrap'>
                <button onClick={handlePrevPage} disabled={page === 0} ><MdArrowBackIosNew size={20} /></button>
                <h2>{page + 1}</h2>
                <button onClick={handleNextPage}><MdArrowForwardIos size={20} /></button>
            </div>
        </div>
    )
}

export default Users;