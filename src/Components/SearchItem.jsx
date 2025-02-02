import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Database';
import Products from './Products';

const SearchItem = () => {
  const {item} =useParams();
  const[filterData,setFilterData]= useState([]);
  useEffect(()=>{
    //Helper Function encapsulates the filtering logic for readability and reusability.
    const filteredData=()=>{
      //.includes checks if the search term exists anywhere within the title, making it more flexible than an exact match
      const data = items.filter((p)=>p.title.toLowerCase().includes(item.toLowerCase()));
      // console.log(data);
      setFilterData(data);
    }
    filteredData();
  },[item])
  return (
    <Products items={filterData}/>
  )
}

export default SearchItem