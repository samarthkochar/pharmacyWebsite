import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Zoom } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Products = ({ items, cart, setCart }) => {
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      //we can also do-id:id,price:price but both are same so we write only once id, price, etc..
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("cart-elem", cart);
    toast.success('Item added to Cart', {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
      });
  };

  return (
    <Wrapper>
      <ToastContainer
      position="bottom-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Zoom}
      />
      <div className="container">
        <div className="row">
          {items.map((products) => {
            return (
                <div key={products.id} className="card">
                  <Link to={`/products/productdetail/${products.id}`}>
                    <img
                      className="card-img-top"
                      src={products.imgSrc}
                      alt="Card image cap"
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{products.title}</h5>
                    <p className="card-text">{products.description}</p>
                    <div className="btn-body">
                      <Link className="btn" to={`/products/productdetail/${products.id}`}>{products.price} ₹</Link>
                      <button
                        onClick={() =>
                          addToCart(
                            products.id,
                            products.price,
                            products.title,
                            products.description,
                            products.imgSrc
                          )
                        }
                        className="btn btn-atc"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.section`
  .card {
    width: 18rem;
    border: 1px solid grey;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 46px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-img-top {
    padding-top: 10px;
    border-radius: 20px;
    object-fit: fill;
    width: 100%;
    height: 150px;
    display: block;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    // flex-grow: 1;
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

  .btn-body {
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

  .btn-atc {
    cursor: pointer;
    background-color: rgb(209, 139, 35);
  }

  .btn-atc:hover {
    background-color: rgb(40, 175, 142);
  }
`;
