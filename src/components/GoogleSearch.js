import React, { useEffect, useState } from 'react';

const GoogleSearch = () => {

  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  const fetchData = async () => {
    // console.log("Calling API with query:", input);

    try {
      const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
      const json = await data.json();
      // console.log("API Response:", json);
      setResults(json?.recipes);
    } catch (err) {
      console.error("API Error:", err);
    }
  };


  useEffect(() => {

    const timer = setTimeout(fetchData, 300);
    return () => {
      clearTimeout(timer);
    }

  }, [input]);

  return (
    <div className='px-4'>
      <div className='max-w-lg mx-auto pt-10'>

        <div>
          <p className='text-lg font-bold'>Search</p>
          <input
            type='text'
            value={input}
            onFocus={() => setShowResults(true)}
            onBlur={() => setShowResults(false)}
            onChange={(e) => setInput(e.target.value)}
            className='border p-2 outline-0 w-full'
          />
        </div>

        {showResults &&
          <div className={`max-h-[62vh] overflow-scroll custom-scrollbar border-t-0 ${results.length === 0 ? "border-0" : "border"}`}>
            {results.map((name) => (
              <p key={name.id} className='hover:bg-gray-200 hover:cursor-pointer p-2'>{name.name}</p>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default GoogleSearch;
