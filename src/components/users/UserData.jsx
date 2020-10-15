import React from 'react';

const UserData = ({ user }) => (
    <div className="user-data">
        <div className="user-data-header">{ user.login }</div>
        <div className="user-data-control">UserID: { user.id }</div>
        <div className="user-data-control">NodeID: { user.node_id }</div>
        <div className="user-data-control">{ user.followers } Followers { user.following } Following</div>
    </div>
);

export default UserData;