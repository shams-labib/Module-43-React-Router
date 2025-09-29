import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({user}) => {

    const [showInfo, setShowInfo] = useState(false);

    const [visitHome, setVisitHome] = useState(false);

    const {id,name, email, phone} = user;

    const userStyle = {
        border: "2px solid salmon",
        borderRadius: '10px',
        padding:'15px'
    }

    const user2Promise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());
   
    if(visitHome){
        return <Navigate to={'/'}></Navigate>
    }

    return (
        <div style={
            userStyle
        }>
            <h2>{name}</h2>
            <p>Email : {email}</p>
            <p><small>Phone : {phone}</small></p>

            <Link to={`/users/${user.id}`}>Show Deatils</Link>

            <button onClick={()=> setShowInfo(!showInfo)} >{showInfo?"hide":'show'}Info</button>

            {
                showInfo && <Suspense fallback={<h1>Loading......</h1>}>
                       <UserDetails2 user2Promise={user2Promise}></UserDetails2>
                </Suspense>
            }

            <button onClick={()=> setVisitHome(true)}>Home</button>
        </div>
    );
};

export default User;