import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'

const buySchema = Yup.object().shape({
    name : Yup.string().min('5', "You have to write card owner nam").required("Required"),
    cvc : Yup.string().min(3).max(3).required(" CVC is Required"),
    cardNo : Yup.string().min(16).max(16).required("Required")
})  

const pageDivStyle = {
    margin : '10% 45%',
    backgroundColor : 'lightskyblue',
    padding :'2%',
    width : '20%'
}
const inputStyle = {
    width : '90%',
    padding : '4%', 
    margin : '1%',
}
const input2Style = {
    width : '35%',
    padding : '4%', 
    margin : "1%" 
}
const buttonStyle = {
    padding : '2%',
    backgroundColor  :"white",
    border : "1px solid white",
    margin :'1%',
    borderRadius : "10px",
    fontSize : '18px',
    
}
function Buy() {
  return (
    <div style={pageDivStyle}>
        <Formik
        initialValues={{
            name : "",
            cardNo  :"",
            date : "",
            cvc : "",
        }}
        validationSchema = {buySchema}
        onSubmit={(values) => {
          alert("Satın alma işleminiz tamamdır")
      }}
      >
        {
          ({handleSubmit,handleChange, values, errors, touched}) => (
            <form onSubmit={handleSubmit}>
              <input 
                name = "name"
                onChange={(handleChange)}
                value={values.name}
                placeholder ="Card Owner Name and Last Name"
                type="text"
                style={inputStyle}
              />
              <br></br>
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <input 
                name = "cardNo"
                onChange={(handleChange)}
                value={values.cardNo}
                placeholder ="Card No"
                type="number"
                style={inputStyle}
              />
              <br></br>
              {errors.cardNo && touched.cardNo ? <div>{errors.cardNo}</div> : null}
              <input 
                name = "date"
                type="month"
                onChange={(handleChange)}
                placeholder= "Date"
                value = {values.date}
                style={input2Style}
              />
              <input 
                name = "cvc"
                type="password"
                onChange={(handleChange)}
                placeholder= "CVC"
                value = {values.cvc}
                style={input2Style}   
              />
              {errors.cvc && touched.cvc ? <div>{errors.cvc}</div> : null}
              <br></br>
              <button style={buttonStyle}  type='submit'>Buy</button>
            </form>
          )
        }
      </Formik>
        {/*  */}
    </div>
  )
}

export default Buy