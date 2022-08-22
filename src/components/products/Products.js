import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {fetchProducts, increaseFilter, decreaseFilter} from "../../redux/slices/productsSlice"
import { NavLink } from 'react-router-dom'



function Products() {
  let products = useSelector(state => state.products.items)
  const dispatch = useDispatch();
  const status = useSelector(state => state.products.status)
  const error = useSelector(state => state.products.error)

  useEffect(() => {
    if(status === "idle"){
      dispatch(fetchProducts())
    }
    dispatch(increaseFilter)
    dispatch(decreaseFilter)
  }, [dispatch, status, products])

  if (status === "failed"){
    return <div>{error.message}</div>
  }
  if(status === "loading"){
    return <div>Loading...</div>
  }
  const ulStyle = {
    display: "flex",
    flexDirection : "row",
    justifyContent : "space-between",
    flexWrap : "wrap"
  }
  const pStyle = {
    fontSize: "20px",
    fontWeight : "bold",
    textAlign : "center",
  }
  const pPriceStyle = {
    fontSize: "20px",
    fontWeight : "bold",
    textAlign : "center",
    color :"orange"
  } 


  return (
    <div>
      <div style={{textAlign : 'end', padding : '1%', margin : '1%'}}>
        <button onClick={() => dispatch(increaseFilter(products))}>Increased Price</button>
        <button onClick={() => dispatch(decreaseFilter(products))}>Decreasing Price</button>
      </div>
      <ul style={ulStyle}>
        {
          products && products.map((item) => (
            <li key={item.id} style={{listStyleType : 'none',border :'1px solid grey',width : '25%', margin : '10px 1%', padding :'1%', backgroundColor  :'smokewhite', boxShadow : "10px black"}} >
              <img style={{width : '100%', objectFit : "contain", height : "200px"}} src={item.image} alt={item.title} />
              <p style={pStyle}>{item.title}</p>
              <p style={pPriceStyle}>${item.price}</p>
              <p style={{textAlign : "center", fontWeight : "bold", color :"white", backgroundColor : "orange", padding : "2%", borderRadius : "10px", fontSize :"20px"}}>
                <NavLink style={{color: "inherit", textDecoration : "none "}} to={`/products/${item.id}`}>Info of Product</NavLink>
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Products