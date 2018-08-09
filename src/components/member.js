import React from 'react';

const Member = ({name,email,phone,picture}) =>{
    return (
        <div>
            <h4>{`${name.title} ${name.first} ${name.last}`}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <div><img src={picture.medium}/></div>
        </div>
    );
}

export default Member;