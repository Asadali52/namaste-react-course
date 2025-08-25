import React, { useState } from 'react'

const UserCard = ({ name }) => {

  const [count, setCount] = useState(0);

  return (
    <div onClick={() => setCount(count + 1)} className='bg-white shadow-sm rounded-xl p-4 w-80 border border-gray-300 relative overflow-clip'>

      <p className='absolute right-0 top-0 z-1 h-8 w-8 bg-black text-white text-sm flex justify-center items-center'>
        {count}
      </p>
      
      <p className='space-x-2'>
        <span className='font-bold'>Name:</span>
        <span className='text-sm'>{name}</span>
      </p>
      <p className='space-x-2'>
        <span className='font-bold'>Location:</span>
        <span className='text-sm'>Kasur</span>
      </p>
      <p className='space-x-2'>
        <span className='font-bold'>Contact:</span>
        <span className='text-sm'>itsasadali5@gmail.com</span>
      </p>
    </div>
  );
};

export default UserCard;