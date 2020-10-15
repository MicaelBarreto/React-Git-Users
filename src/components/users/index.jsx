import React, { useEffect, useState } from 'react';
import { fetchUser } from '../../actions/users/userActions';

const User = ({ user }) => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetch = fetchUser(user.url);
        fetch
            .then(res => {
                const data = res.data;
                setUserData(data);
            })
            .catch(err => console.log(err));
      }, []);

    return userData 
    ?
        <>
            <td>
                <img src={userData.avatar_url} alt={userData.login} />
            </td>
            <td>
                { userData.login }
            </td>
        </>
    :
        <></>;
};

export default User;