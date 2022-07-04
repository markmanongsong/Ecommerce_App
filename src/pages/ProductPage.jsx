import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import ShowProducts from './ShowProducts';

const ProductPage = () => {
  const { productId } = useParams();
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [category, setCategory] = useState();
  const [products, setProducts] = useState([]);

  const fetchDataFromApi = async () => {
    const { data } = await axios.get(
      'https://fakestoreapi.com/products/' + productId
    );

    const { title, price, description, image, category } = data;

    setTitle(title);
    setPrice(price);
    setDescription(description);
    setImageUrl(image);
    setCategory(category);
    setProducts(data);
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  // const ShowProducts = () => {
  //   return (
  //     <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  place-items-center">
  //       <div className="aspect-square p-4 bg-white relative mt-40">
  //         <img
  //           src={image}
  //           alt="Product-Image"
  //           style={{ height: '600px', width: '600px' }}
  //           className="w-full h-full object-contain"
  //         />
  //       </div>
  //       <div className="mt-11 px-11">
  //         <h4 className="uppercase text-4xl sm:text-7xl font-bold text-gray-600">
  //           {category}
  //         </h4>
  //         <h1 className="text-4xl sm:text-7x text-black py-11">{title}</h1>
  //         <h3 className="text-2xl sm:text-6x1 font-extrabold">
  //           Price: PHP {price}
  //         </h3>
  //         <p className="py-11 font-bold text-gray-500 ">{description}</p>
  //         <Button>Add to bag</Button>
  //       </div>
  //     </section>
  //   );
  // };

  return (
    <main>
      <div>
        {products.length === 0 ? (
          <h1>Loading ...</h1>
        ) : (
          <ShowProducts
            id={productId}
            title={title}
            imageUrl={imageUrl}
            category={category}
            price={price}
            description={description}
          />
        )}
      </div>
    </main>
  );
};

export default ProductPage;
