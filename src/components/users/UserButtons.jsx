import React from 'react';

const UserButtons = props => (
    <div className="user-buttons">
        <a className="btn btn-outline-success" href={props.userUrl} target="_blank">Perfil</a>
        {!props.deleted
        ?
            <button className="btn btn-outline-danger" onClick={() => props.handleDelete(props.userId)}>Excluír</button>
        :
            <></>
        }
    </div>
);

export default UserButtons;