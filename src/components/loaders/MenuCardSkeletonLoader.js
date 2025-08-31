import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MenuCardSkeletonLoader = ({ count = 10 }) => {
  return (
    <>
      {Array(count).fill(0).map((_, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-lg space-y-4 shadow-sm overflow-clip bg-white">

          <div className='bg-[#9ca3af]'>
            <Skeleton
              height={50}
              width="100%"
              borderRadius="0"
              baseColor="#9ca3af"
              highlightColor="#f3f4f6"
            />
          </div>

        </div>
      ))}
    </>
  );
};

export default MenuCardSkeletonLoader;
