import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import ShowProducts from '../components/ShowProducts';

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
