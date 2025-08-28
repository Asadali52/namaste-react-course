import React from 'react';
import { useParams } from 'react-router-dom';
import { img_base_URl } from '../utils/mockdata';
import MenuCardSkeletonLoader from '../components/loaders/MenuCardSkeletonLoader';
import useRestaurantMenuHook from '../utils/useRestaurantMenuHook';

const RestaurentMenu = () => {

  const { resId } = useParams();
  const { resInfo, loading, error } = useRestaurantMenuHook(resId);

  const itemCardsVar = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } = info || {};

  return (
    <div className="p-6">

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          Error loading restaurant menu: {error}
        </div>
      )}

      <div className="bg-white rounded-2xl overflow-clip shadow-md mb-6 max-w-[300px]">
        {loading ? (
          <div className='h-[300px] flex justify-center items-center'>Loading...</div>
        ) : (
          <>
            <img
              className="w-full h-48 object-cover"
              src={img_base_URl + cloudinaryImageId}
              alt={name}
            />
            <div className="p-4 space-y-2">
              <h1 className="text-2xl font-bold">{name}</h1>
              <h3 className="text-gray-600">{cuisines?.join(", ")}</h3>
              <p className="text-red-700 font-medium">{costForTwoMessage}</p>
            </div>
          </>
        )}

      </div>

      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <div className="grid grid-cols-6 max-[1250px]:grid-cols-5 max-[970px]:grid-cols-4 max-[820px]:grid-cols-3 max-[640px]:grid-cols-2 gap-6">
        {loading ? (

          <MenuCardSkeletonLoader count={itemCardsVar?.length || 8} />

        ) : !itemCardsVar || itemCardsVar.length === 0 ? (

          <div className='text-red-600 text-center text-3xl h-[200px] leading-[200px] col-span-full'>No menu found</div>

        ) : (

          itemCardsVar?.map((item, i) => {
            const itemInfo = item?.card?.info;
            return (
              <div
                key={itemInfo?.id || i}
                className="border border-gray-400 text-sm rounded-lg shadow-sm overflow-clip hover:shadow-md transition bg-white"
              >
                {itemInfo?.imageId ? (
                  <img
                    className="w-full h-28 object-cover mb-2"
                    src={img_base_URl + itemInfo?.imageId}
                    alt={itemInfo?.name}
                  />
                ) : (
                  <div className='h-28 bg-gray-300 flex justify-center items-center mb-2'>No image</div>
                )}
                <p className="font-semibold px-2">{itemInfo?.name}</p>
                <p className="text-green-600 p-2 font-medium">₹{itemInfo?.price / 100 || itemInfo?.defaultPrice / 100}</p>
              </div>
            );
          })

        )}
      </div>
    </div>
  );
};

export default RestaurentMenu;
