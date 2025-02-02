import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Carousel from './Carousel'
import Services from './Services'
const Home = ({cart,setCart}) => {
  return (
    <div>
        <Navbar cart={cart}/>
        <SearchBar/>
        <Carousel/>
        <Services/>
    </div>
  )
}

export default Home