import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../utils/store/CounterSlice';

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

  const dispatch = useDispatch();
  const count = useSelector((store) => store.count.count);

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(5));
  }

  const handleReset = () => {
    dispatch(reset());
  }

  return (
    <div className='p-4 space-y-4'>
      <h1>Heading</h1>
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

      <hr />

      <div>
        <p className='text-5xl font-bold'>Count: {count}</p>
        <div className='space-x-5 mt-5'>
          <button onClick={handleIncrement} className="border rounded-sm whitespace-nowrap cursor-pointer text-sm px-5 py-2 hover:bg-gray-200">
            Increment
          </button>
          <button onClick={handleDecrement} className="border rounded-sm whitespace-nowrap cursor-pointer text-sm px-5 py-2 hover:bg-red-200 hover:text-red-700 hover:border-red-200">
            Decrement
          </button>
          <button onClick={handleIncrementByAmount} className="border rounded-sm whitespace-nowrap cursor-pointer text-sm px-5 py-2 hover:bg-blue-200 hover:text-blue-700 hover:border-blue-200">
            Increment by 5
          </button>
          <button onClick={handleReset} className="border rounded-sm whitespace-nowrap cursor-pointer text-sm px-5 py-2 hover:bg-yellow-200 hover:text-yellow-700 hover:border-yellow-200">
            Reset
          </button>
        </div>
      </div>

    </div>
  );
};

export default Contact;