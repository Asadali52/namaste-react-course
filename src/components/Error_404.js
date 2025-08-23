import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error_404 = () => {

  const err= useRouteError();
  console.log(err);
  
  return (
    <div className='h-screen text-4xl flex flex-col gap-4 justify-center items-center'>
      <p className='text-red-500 font-bold'>Error_{err.status}</p>
      <p>Ooops!!! Page not found</p>
      <Link className='bg-gray-400 px-4 py-1 rounded-sm text-2xl hover:text-white hover:bg-black' to="/">Back</Link>
    </div>
  );
};

export default Error_404;