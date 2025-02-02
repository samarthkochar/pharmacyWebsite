import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Cart = ({cart,setCart}) => {
  return (
    <Wrapper>
      <div className="container" style={{width: "54%"}}>
        {cart.length== 0 ? (
          <div className="text-center">
          <h1>Your Cart is Empty</h1>
          <Link to='/Products' className='btn btn-bn'> Continue Shopping...</Link></div>) : 
        (cart.map((products)=>{
          return(<>
          <div className="card mb-3 my-4" style={{maxWidth: '700px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={products.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">{products.description}</p>
        <div className='btn-body'>
        <button className="btn">{products.price} ₹</button>
        <button className='btn-bn'>Buy Now </button>
        </div>
      </div>
    </div>
  </div>
</div>
          </>)
        }))}
    
</div>
        {cart.length!=0 && <div className="container text-center my-5">
  <button className="btn btn-warning">CheckOut</button>
  <button onClick={()=>setCart("")} className="btn btn-danger btn-clearCart">Clear Cart</button>
</div>}
    </Wrapper>
  )
}

export default Cart

const Wrapper = styled.section`

.container{
margin-top:100px
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

.btn-bn {
  cursor: pointer;
  background-color: rgb(209, 139, 35);
}

.btn-bn:hover {
  background-color: rgb(40, 175, 142);
}
.btn-clearCart{
  background-color: rgb(29, 82, 62);

}
`