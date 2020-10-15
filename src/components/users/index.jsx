import React, { useEffect, useState } from 'react';
import { fetchUser } from '../../actions/users/userActions';

import UserData from './UserData';
import UserButtons from './UserButtons';

const User = ({ user, deleted, handleDelete }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetch = fetchUser(user.url);
        fetch
            .then(res => {
                const data = res.data;
                setUserData(data);
            })
            .catch(err => console.log(err));
      });

    return userData 
    ?
        <>
            <td className="td-2">
                <img src={userData.avatar_url} alt={userData.login} />
            </td>
            <td className="td-8">
                <UserData user={userData} />
            </td>
            <td className="td-2">
                <UserButtons userUrl={userData.html_url} deleted={deleted} handleDelete={handleDelete} userId={userData.id} />
            </td>
        </>
    :
        <></>;
};

export default User;