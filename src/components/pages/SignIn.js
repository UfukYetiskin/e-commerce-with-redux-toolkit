import React from 'react'
import {Formik} from 'formik'
function SignIn() {
  const mainDiv = {
    textAlign: 'center',
    border : "1px solid orange",
    width : '40%',
    margin : '5% auto'
}
const inputStyle = {
    fontSize : "18px",
    padding : "2%",
    margin  :'2%',
    borderRadius : '10px'
}
const buttonStyle = {
    padding : '2%',
    color : "white",
    backgroundColor : "orange",
    border : "1px solid orange",
    margin : '2%',
    borderRadius : "10px",
    fontSize  :"16px",
}
  return (
    <div style={mainDiv}>
      
      <h1>Sign In</h1>
      <Formik
        initialValues={{
          email  : "",
          password : "",
        }}
        onSubmit={(values) => {
          alert(`Hoş Geldiniz, ${values.email}`)
      }}
      >
        {
          ({handleSubmit,handleChange, values}) => (
            <form onSubmit={handleSubmit}>
              <input 
                name = "email"
                onChange={(handleChange)}
                value={values.email}
                placeholder ="Email"
                type="email"
                style={inputStyle}
              />
              <br></br>
              <input 
                name = "password"
                onChange={(handleChange)}
                value={values.password}
                placeholder ="Password"
                type="password"
                style={inputStyle}
              />
              <br></br>
              <button style={buttonStyle} type='submit'>Submit</button>
            </form>
          )
        }
      </Formik>
    </div>
  )
}

export default SignIn