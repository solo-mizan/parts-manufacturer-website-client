import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ index, user, refetch }) => {
    const handleMakeAdmin = (email) => {
        fetch(`https://car-geeks.heroku.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Successfully made an Admin", { id: "adminSuccess" });
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user?.name}</td>
            <td>{user.email}</td>
            <td>{user.role ? "Admin" : <button onClick={() => handleMakeAdmin(user.email)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
        </tr>
    );
};

export default UserRow;