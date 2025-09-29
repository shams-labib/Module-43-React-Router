import React, { use } from 'react';

const UserDetails2 = ({user2Promise}) => {

    const {title, body}= use(user2Promise);
    


    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default UserDetails2;