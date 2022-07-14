import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const storedCart = () => JSON.parse(window.localStorage.getItem('cartItems'));
  // console.log(storedCart[0].id.id);

  return (
    <main className="relative ">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10  z-50">
        <h2 className="text-xl font-semibold z-50 mt-28">Your cart</h2>
      </div>

      <div className="absolute top-60">
        {storedCart().map((itemObject) => (
          <CartItem itemObject={itemObject} />
        ))}

        <div className="flex justify-end space-x-4 ">
          <Link to={'/products/'}>
            <button
              type="button"
              className="px-6 py-2 border rounded-md bg-slate-500 font-bold text-white hover:bg-slate-600 hover:text-red-500"
            >
              Back
              <span className="sr-only sm:not-sr-only"> to shop</span>
            </button>
          </Link>

          <button
            type="button"
            className="px-6 py-2 border rounded-md bg-slate-500 font-bold text-white hover:bg-slate-600 hover:text-red-500"
          >
            <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
