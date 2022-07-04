import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../pages/ProductList';

const Home = () => {
  return (
    <main>
      <div className="w-full h-screen bg-white -z-10">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-black">
            NEW SEASON ARRIVAL
          </h1>
          <h3 className="text-4xl sm:text-7xl font-bold text-black">
            CHECK OUT ALL THE TRENDS
          </h3>

          <div>
            <Link to="/products/">
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-black hover:bg-slate-500  hover:text-white">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div>
        <ProductList />
      </div> */}
    </main>
  );
};

export default Home;
