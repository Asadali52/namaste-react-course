import React from 'react';
import { useParams } from 'react-router-dom';
import { img_base_URl } from '../utils/mockdata';
import MenuCardSkeletonLoader from '../components/loaders/MenuCardSkeletonLoader';
import useRestaurantMenuHook from '../utils/useRestaurantMenuHook';
import RestaurantCategoryAccordion from './RestaurantCategoryAccordion';

const RestaurentMenu = () => {

  const { resId } = useParams();
  const {
    resInfo,
    loading,
    error,
    openIndex,
    setOpenIndex
  } = useRestaurantMenuHook(resId);

  let categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [];
  const info = resInfo?.cards?.[2]?.card?.card?.info;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } = info || {};


  return (
    <div className="p-6">

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          Error loading restaurant menu: {error}
        </div>
      )}

      <div className="bg-white rounded-2xl overflow-clip shadow-md mb-6 mx-auto max-w-[300px]">
        {loading ? (
          <div className='h-[300px] flex justify-center items-center bg-[#9ca3af]'>Loading...</div>
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

      <h2 className="text-3xl font-semibold mb-4 text-center">Menu</h2>

      <div className='space-y-4 max-w-[700px] mx-auto'>
        {loading ? (
          <div className='space-y-4'>
            <MenuCardSkeletonLoader />
          </div>
        ) : (
          categories.map((category, index) => (
            <RestaurantCategoryAccordion
              key={category?.card?.card?.categoryId}
              data={category?.card?.card}
              isOpen={index === openIndex}
              setOpenIndex={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))
        )}
      </div>

    </div>
  );
};

export default RestaurentMenu;
