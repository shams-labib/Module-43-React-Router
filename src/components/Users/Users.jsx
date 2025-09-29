import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const usersData = useLoaderData();
    

    return (
        <div>      
            <h4>This is user</h4>

            {
                usersData.map((user, index) => <User key={index} user={user}></User>)
            }
        </div>
    );
};

export default Users;