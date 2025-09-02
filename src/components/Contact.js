import React, { useState } from 'react';

const Contact = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + " " + lastName);
  }

  function handleLastName(e) {
    setlastName(e.target.value);
    setFullName(firstName + " " + e.target.value)
  }

  return (
    <div className='p-4 space-y-4'>
      <div>
        <p>First Name</p>
        <input
          value={firstName}
          type='text'
          className='border p-1 outline-0'
          onChange={handleFirstName}
        />
      </div>
      <div>
        <p>Last Name</p>
        <input
          value={lastName}
          type='text'
          className='border p-1 outline-0'
          onChange={handleLastName}
        />
      </div>
      <div>
        <p>Email</p>
        <input
          value={email}
          type='email'
          className='border p-1 outline-0'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <p className='mt-4'>Your Full Name: <span className='text-red-600 font-bold'>{fullName}</span> </p>
      <p className='mt-4'>Your Email: <span className='text-red-600 font-bold'>{email}</span> </p>
    </div>
  );
};

export default Contact;