import React, { useState, useEffect, useContext } from 'react';
import Button from '../components/Button';
import { CartContext } from '../context/CartProvider';

const ShowProducts = ({
  id,
  imageUrl,
  category,
  title,
  price,
  description,
}) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const addToBag = (id, productName, price, imageUrl, category) => {
    // console.log('adding to bag: ', id, ' ', productName);
    setCartItems([
      ...cartItems,
      { id, productName, price, imageUrl, category },
    ]);
  };

  useEffect(() => {
    console.log('updating cartitems on localstorage', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  place-items-center">
      <div className="aspect-square p-4 bg-white relative mt-40">
        <img
          src={imageUrl}
          alt="Product-Image"
          style={{ height: '600px', width: '600px' }}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-11 px-11">
        <h4 className="uppercase text-4xl sm:text-7xl font-bold text-gray-600">
          {category}
        </h4>
        <h1 className="text-4xl sm:text-7x text-black py-11">{title}</h1>
        <h3 className="text-2xl sm:text-6x1 font-extrabold">
          Price: PHP {price}
        </h3>
        <p className="py-11 font-bold text-gray-500 ">{description}</p>
        <Button
          onClick={() => {
            // console.log('onclick button: ', id);
            addToBag({ id, title, price, imageUrl, category });
          }}
        >
          Add to bag
        </Button>
      </div>
    </section>
  );
};

export default ShowProducts;
