import React from 'react'
import{useSelector, useDispatch} from "react-redux"
import {useEffect} from 'react'
import {removeItem} from '../../redux/slices/productsSlice'
import { NavLink } from 'react-router-dom';


function Basket() {
  const basket = useSelector(state => state.products.basket);


  const ulStyle = {
    display: "flex",
    flexDirection : "column",
    flexWrap : "wrap",
    border : "1px solid black"
  }
  const imgStyle = {
    width  :"20%"
  }
  const liStyle = {
    display : "flex",
    border : "1px solid black",
    width : "40%",
    margin : "1%",
    padding : "1%"
  }
  const buttonStyle = {
    fontSize : "16px",
    border :  "0 solid black",
    backgroundColor : "orange",
    color : "white",
    textAlign : "center",
    borderRadius : "10px", marginLeft : '1%',
    padding : '5px'
}
  const dispatch = useDispatch();
  useEffect(() => {},[dispatch, basket])

  return (
    <div>
     <ul style={ulStyle}>
      {
        basket && basket.map((item) => (
            <li key={item.id} style={liStyle}>
                <div>
                  <img style={imgStyle} src={item.img} alt={item.title}/>
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>{item.category}</p>
                  <p>${item.price}</p>
                  <button onClick={() => dispatch(removeItem(item.id))}>Delete Product</button>
                </div>
            </li>
        ))
      }
     </ul>

     <div style={{textAlign : "center"}}>
      <strong>Total Price : {basket && basket.map((item) => item.price).reduce((acc,pilot) => acc + pilot, 0)}</strong>
      <NavLink to="/buy">
        <button style={buttonStyle}>Buy</button>
      </NavLink>
     </div>
    </div>
  )
}

export default Basket