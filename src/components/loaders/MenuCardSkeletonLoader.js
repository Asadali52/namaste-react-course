import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MenuCardSkeletonLoader = ({ count = 10 }) => {
  return (
    <>
      {Array(count).fill(0).map((_, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-lg shadow-sm overflow-clip bg-white"
        >
          <div className='bg-[#e5e7eb]'>
            <Skeleton
              height={112}
              width="100%"
              borderRadius="0"
              baseColor="#e5e7eb"
              highlightColor="#f3f4f6"
            />
          </div>

          <div className="p-2 space-y-2">
            <Skeleton
              height={16}
              width="80%"
              baseColor="#e5e7eb"
              highlightColor="#f3f4f6"
            />

            <Skeleton
              height={14}
              width="50%"
              baseColor="#e5e7eb"
              highlightColor="#f3f4f6"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default MenuCardSkeletonLoader;
