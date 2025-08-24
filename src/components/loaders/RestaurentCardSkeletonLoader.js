import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RestaurentCardSkeletonLoader = ({ count = 6 }) => {
  return (
    <>
      {Array(count).fill(0).map((_, i) => (
        <div key={i} className="bg-white rounded-lg overflow-clip shadow-sm p-0 w-full">
          <div className="bg-[#e5e7eb]">
            <Skeleton
              height={160}
              width="100%"
              borderRadius="8px 8px 0 0"
              baseColor="#e5e7eb"
              highlightColor="#f3f4f6"
            />
          </div>

          <div className="p-4 space-y-4">
            <Skeleton
              height={20}
              width="70%"
              baseColor="#e5e7eb"
              highlightColor="#f3f4f6"
            />

            <Skeleton
              height={16}
              width="50%"
              baseColor="#e5e7eb"
              highlightColor="#f3f4f6"
            />

            <div className="flex items-center justify-between">
              <Skeleton
                height={20}
                width={60}
                borderRadius={12}
                baseColor="#e5e7eb"
                highlightColor="#f3f4f6"
              />
              <Skeleton
                height={16}
                width={40}
                baseColor="#e5e7eb"
                highlightColor="#f3f4f6"
              />
            </div>

            <Skeleton
              height={18}
              width="40%"
              baseColor="#e5e7eb"
              highlightColor="#f3f4f6"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default RestaurentCardSkeletonLoader;
