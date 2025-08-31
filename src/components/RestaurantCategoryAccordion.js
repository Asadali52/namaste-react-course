import React from 'react';
import { img_base_URl } from '../utils/mockdata';

const RestaurantCategoryAccordion = ({ data, isOpen, setOpenIndex }) => {

  const handleOpen = () => {
    setOpenIndex();
  }

  return (
    <div className='rounded-[5px] overflow-clip shadow-md'>

      <div onClick={handleOpen} className='bg-gray-400 flex justify-between items-center p-3 cursor-pointer'>
        <p className='text-md font-bold'>{data?.title} <span className='text-red-600'>({data?.itemCards.length})</span></p>
        <p className={`text-[10px] ${isOpen ? "rotate-180" : "rotate-0"}`}>▼</p>
      </div>

      {isOpen &&
        <div className='bg-gray-50 space-y-4 p-4'>

          {data.itemCards.map((item) => (
            <div key={item.card.info.id} className='flex border rounded-md overflow-clip pr-2'>
              <div className='relative shrink-0'>
                {item.card.info.imageId ? (
                  <img src={img_base_URl + item.card.info.imageId} className='object-cover h-[150px] w-[150px]' />
                ) : (
                  <div className='bg-gray-200 w-[150px] text-black flex justify-center items-center'>no image</div>
                )}
                <button className="border bottom-1 left-12 absolute rounded-sm whitespace-nowrap cursor-pointer text-[10px] px-2 py-1 bg-gray-200 hover:bg-black hover:text-white">
                  ADD
                </button>
              </div>
              <div className='my-auto p-2'>
                <p className='font-bold line-clamp-1'>{item.card.info.name}</p>
                {item.card.info.description ? (
                  <p className='text-gray-500 text-sm line-clamp-3'>{item.card.info.description}</p>
                ) : (
                  <p>No Description</p>
                )}
                <p className='text-red-500'>₹ {Number(item.card.info.price / 100) || (item.card.info.defaultPrice / 100)}</p>
              </div>
            </div>
          ))}

        </div>
      }

    </div>
  );
};

export default RestaurantCategoryAccordion;