import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    const userData = use(userPromise);
    console.log(userData)
    return (
        <div>
            <h4>This is user 2</h4>
        </div>
    );
};

export default Users2;