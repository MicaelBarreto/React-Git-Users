import React, { useState, useCallback, useEffect } from 'react';
import User from '../../components/users';
import { fetchUsers } from '../../actions/users/userActions';

const UsersTable = () => {

    const [users, setUsers] = useState([]);
    const [usersTable, setUsersTable] = useState([]);
    const [deletedUsers, setDeletedUsers] = useState([]);

    useEffect(() => {
        const fetch = fetchUsers();
        fetch
            .then(res => {
                const data = res.data.slice(0, 10);
                setUsers(data);
                setUsersTable(data);
            })
            .catch(err => console.log(err));
      }, []);

    // const clickDelete = useCallback(
    //     (id) => {
    //         deleteTask(id);
    //         setTasks(all);
    //     },
    //     [users],
    // );
    
    return (
        <>                
            <div className='row mb-3'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 offset-xs-11 offset-sm-11 offset-md-11 offset-lg-11'>
                    {/* <button className='btn btn-success col-xs-1 col-sm-1 col-md-1 col-lg-1' onClick={}>
                        Excluídos
                    </button> */}
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="switchDisabled"/>
                        <label className="custom-control-label" htmlFor="switchDisabled">Mostrar excluídos</label>
                    </div>
                </div>
            </div>
            <div className='row'>
                <table className='table table-striped round-table'>
                    <tbody>
                        {usersTable.map((user, index) => (
                            <tr key={index}>
                                <User user={user} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UsersTable;