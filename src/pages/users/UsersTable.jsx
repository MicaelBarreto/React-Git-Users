import React, { useState, useEffect } from "react";
import User from "../../components/users";
import { fetchUsers } from "../../actions/users/userActions";

const UsersTable = () => {

    const [users, setUsers] = useState([]);
    const [usersTable, setUsersTable] = useState([]);
    const [deleted, setDeleted] = useState(false);
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

    const handleData = () => {
        const usersData = deleted
        ?
            deletedUsers
        :
            users.filter(user => !deletedUsers.some(del => del.id === user.id));
            
        setUsersTable(usersData);
    };

    useEffect(handleData, [ deleted, deletedUsers ]);

    const handleDelete = userId => {
        const deletedUser = users.find(user => user.id === userId);

        var deletedUsersArray = deletedUsers;
        deletedUsersArray.push(deletedUser);
        
        setDeletedUsers(deletedUsersArray);
        
        handleData();
    };

    const handleDeleted = () => {
        setDeleted(!deleted);
    };

    const searchUser = ({ target }) => {
        const filteredUsers = deleted
        ?
            users.filter(user => user.login.includes(target.value) || user.id == target.value && deletedUsers.some(e => e.id === user.id))
        :
            users.filter(user => user.login.includes(target.value) || user.id == target.value && !deletedUsers.some(e => e.id === user.id));

        setUsersTable(filteredUsers);
    };
    
    return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">                
            <div className="search-box">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Pesquisar por Nome ou ID" onChange={searchUser} />
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 offset-xs-10 offset-sm-8 offset-md-9 offset-lg-10">
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="switchDisabled" onClick={handleDeleted} />
                        <label className="custom-control-label" htmlFor="switchDisabled">Mostrar excluídos</label>
                    </div>
                </div>
                <table className="table table-striped round-table">
                    <tbody>
                        {usersTable.map((user, index) => (
                            <tr key={index}>
                                <User user={user} deleted={deleted} handleDelete={handleDelete} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UsersTable;