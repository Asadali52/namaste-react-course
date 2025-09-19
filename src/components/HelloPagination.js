"use client";

import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProductCard = ({ image, title }) => {
  return (
    <div className='border py-2'>
      <div className='border-b px-2'>
        <img src={image} alt={title} height={90} width={90} className='mx-auto' />
      </div>
      <p className='px-2 pt-2 text-[12px] text-center'>{title}</p>
    </div>
  );
};

const HelloPagination = () => {

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = async () => {
    try {
      setLoader(true)
      const data = await fetch("https://dummyjson.com/products?limit=500");
      const json = await data.json()
      setProducts(json.products);
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const PAGE_SIZE = 20;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const showingProducts = products.slice(start, end);

  const handlePrevious = () => {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage !== noOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className='p-4'>

      <div className='text-center space-y-2'>
        <p className='text-3xl font-bold'>Pagination</p>
        <p>Total Products: <span className='text-red-600 font-bold text-xl'>({products.length})</span></p>
      </div>

      <div className='grid grid-cols-9 max-[1350px]:grid-cols-7 max-[1000px]:grid-cols-6 max-[768px]:grid-cols-4 max-[650px]:grid-cols-3 max-[540px]:grid-cols-2 max-[400px]:grid-cols-1 gap-4 mt-6'>
        {loader ? (
          <p className='col-span-full text-center text-3xl py-10 font-bold'>Loading...</p>
        ) : (
          products.length === 0 ? (
            <p className='col-span-full text-center text-red-500 text-3xl py-10 font-bold'>No Product Found</p>
          ) : (
            products.slice(start, end).map((p) => (
              <ProductCard key={p.id} title={p.title} image={p.images[0]} />
            ))
          )
        )}
      </div>

      <p className='hover:text-green-500 text-purple-600 font-bold mt-3'>NOTE: Right Now Showing ({showingProducts.length}) Products from index ({start}) to index ({(start + showingProducts.length) - 1})</p>

      <div className='flex gap-2 flex-wrap justify-center items-center mt-6'>
        <div onClick={handlePrevious} className={`${currentPage === 0 ? "cursor-not-allowed opacity-[.4]" : "cursor-pointer"} mr-3`}>
          <ArrowLeft />
        </div>
        {Array.from(Array(noOfPages).keys()).map((n) => (
          <p onClick={() => setCurrentPage(n)} className={`px-4 py-2 border cursor-pointer ${currentPage === n ? "text-white bg-red-500" : "text-black"} font-bold hover:bg-red-500`} key={n}>{n + 1}</p>
        ))}
        <div onClick={handleNext} className={`${currentPage === noOfPages - 1 ? "cursor-not-allowed opacity-[.4]" : "cursor-pointer"}  ml-3`}>
          <ArrowRight />
        </div>
      </div>

    </div>
  );
};

export default HelloPagination;