import React from 'react'
import{useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {getProduct} from "../../redux/slices/productsSlice"
import {useSelector, useDispatch } from "react-redux"


function Product() {
    const {id} = useParams();
    const [products, setData] = useState([])
    const dispatch = useDispatch();


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
    }, [dispatch])

    

    const pStyle = {
        fontSize: "48px",
        fontWeight : "bold",

    }
    const buttonStyle = {
        fontSize : "36px",
        border :  "0 solid black",
        backgroundColor : "white",
        color : "orange",
        textAlign : "center"
    }
    return (
    <div>
        {products && products.filter((item) => item.id == id).map((item) => (
            <div key={item.id} style={{display : "flex", justifyContent : "space-around"}}>
                <div>
                    <img style={{}}  src={item.image} alt={item.id} />
                </div>
                <div style={{width  : "30%", textAlign : "center", marginTop  :"10%"}}>
                    <p style={pStyle}>{item.title}</p>
                    <p style={pStyle}>${item.price}</p>
                    <button onClick={() => dispatch(getProduct({id : id, img : item.image, price : item.price , title:item.title, category:item.category }))} style={buttonStyle}>Get Basket</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Product