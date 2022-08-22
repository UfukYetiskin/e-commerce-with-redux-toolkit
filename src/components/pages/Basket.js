import React from 'react'
import{useSelector} from "react-redux"


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
                </div>
            </li>
        ))
      }
     </ul>

     <div style={{textAlign : "center"}}>
      <strong>Total Price : {basket && basket.map((item) => item.price).reduce((acc,pilot) => acc + pilot, 0)}</strong>
     </div>
    </div>
  )
}

export default Basket