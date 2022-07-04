import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from '../components/ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [showProduct, setShowProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const fetchAllProducts = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products/');

    setProducts(data);
    setShowProduct(data);
  };

  const loadCartFromLocal = () => {
    const localCartItems = JSON.parse(localStorage.getItem('cartItems'));
    setCartItems(localCartItems ?? []);
  };

  const filterProducts = () => {
    const newProduct = products.filter((product) => {
      if (category === 'All') {
        return product;
      }
      return product.category === category;
    });
    setShowProduct(newProduct);
  };

  useEffect(() => {
    fetchAllProducts();
    loadCartFromLocal();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [category]);

  const addtoBag = (id, productName, price, imageUrl, category) => {
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

  const ShowProducts = () => {
    return (
      <>
        <div className="md:flex md:flex-row md:justify-center mb-10 mt-10">
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-black hover:bg-slate-500  hover:text-white"
            onClick={() => {
              console.log(products);
              setCategory('All');
            }}
          >
            All
          </button>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-black hover:bg-slate-500  hover:text-white"
            onClick={() => {
              console.log(`men's clothin`);
              setCategory("men's clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-black hover:bg-slate-500  hover:text-white"
            onClick={() => {
              console.log(`women's cloathing`);
              setCategory("women's clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-black hover:bg-slate-500  hover:text-white"
            onClick={() => {
              console.log(`jewelery`);
              setCategory('jewelery');
            }}
          >
            Jewelery
          </button>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-black hover:bg-slate-500  hover:text-white"
            onClick={() => {
              console.log(`electronics`);
              setCategory('electronics');
            }}
          >
            Electronic
          </button>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {showProduct.map((product) => (
            <ProductItem
              id={product.id}
              key={product.id}
              imageUrl={product.image}
              price={product.price}
              title={product.title}
              category={product.category}
              addToBag={addtoBag}
            ></ProductItem>
          ))}
        </section>
      </>
    );
  };

  return (
    <main>
      <h1 className="2xl:text-2xl md:text-xl xl:sm:text-7xl font-bold text-black mb-10 flex justify-center">
        LATEST PRODUCTS
      </h1>
      <hr />

      <div>
        {products.length === 0 ? (
          <h1 className="text-4xl sm:text-7xl font-bold text-black">
            Loading ...
          </h1>
        ) : (
          <ShowProducts />
        )}
      </div>
    </main>
  );
};

export default ProductList;
