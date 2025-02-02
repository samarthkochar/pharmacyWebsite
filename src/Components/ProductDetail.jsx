import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Database";
import styled from "styled-components";

const ProductDetail = ({cart,setCart}) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    // console.log(filterProduct);
    setProduct(filterProduct[0]);
  }, [id]);

  return (
    <Wrapper>
      <div className="container">
        <div className="img">
          <img src={product.imgSrc} alt="No Img" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p className="card-text">{product.description}</p>
          <div className="btn-body">
          <button className="btn">{product.price} ₹</button>
          <button className="btn btn-atc">Add to Cart</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetail;

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }
  .img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img img {
    height: 300px;
    width: 300px;
  }

.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  font-weight: bold;
}

.card-text {
  flex-grow: 1;
  font-size: 1rem;
  margin-bottom: 1.25rem;
  color: #6c757d;
  }

.btn-body{
display: flex;
}

.btn {
  display: inline-block;
  padding: 0.5rem 0.5rem;
  margin: 0 14px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  text-align: center;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  align-self: center; /* Center align the button horizontally */
}

.btn-atc{
cursor: pointer;
background-color:rgb(209, 139, 35);
}

.btn-atc:hover {
  background-color:rgb(40, 175, 142);
}
`;
