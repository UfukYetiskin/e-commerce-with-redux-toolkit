import React from 'react'
import{useState, useEffect} from 'react'
import {useParams} from "react-router-dom"

function Product() {
    const {id} = useParams();
    const [products, setData] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
    }, [])
    
    const pStyle = {
        fontSize: "48px",
        fontWeight : "bold",

      }
    return (
    <div>
        {products && products.filter((item) => item.id == id).map((item) => (
            <div key={item.id} style={{display : "flex"}}>
                <div>
                    <img style={{}}  src={item.image} alt={item.id} />
                </div>
                <div style={{width  : "30%", textAlign : "center", marginTop  :"20%"}}>
                    <p style={pStyle}>{item.title}</p>
                    <p style={pStyle}>${item.price}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Product