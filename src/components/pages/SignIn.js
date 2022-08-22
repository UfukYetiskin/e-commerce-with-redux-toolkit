import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'


const signınSchema= Yup.object().shape({
  email : Yup.string().email("Invalid email").required('Required'),
  password: Yup.string()
          .required('Please Enter your password')
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
})


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
        validationSchema ={signınSchema}
        onSubmit={(values) => {
          alert(`Hoş Geldiniz, ${values.email}`)
      }}
      >
        {
          ({handleSubmit,handleChange, values, errors, touched}) => (
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
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <input 
                name = "password"
                onChange={(handleChange)}
                value={values.password}
                placeholder ="Password"
                type="password"
                style={inputStyle}
              />
              <br></br>
              {errors.password && touched.password ? <div>{errors.password}</div> : null}
              <button style={buttonStyle} type='submit'>Submit</button>
            </form>
          )
        }
      </Formik>
    </div>
  )
}

export default SignIn