import React from 'react'
import {Formik} from 'formik'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'

const SignUpSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too Short!').max(25, "Too Long!").required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(25, "Too Long!").required('Required'),
    email : Yup.string().email("Invalid email").required('Required'),
    password: Yup.string()
          .required('Please Enter your password')
          .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
})
function Signup() {
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
        <h1>Welcome!</h1>
        <Formik
            initialValues = {{
                name : "",
                lastName  : "",
                email  : "",
                password  : "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={(values) => {
                alert(`Hoş Geldiniz, ${values.name} ${values.lastName}`)
            }}
        >
            {
                ({handleSubmit, handleChange, values, errors, touched}) => (
                    <form onSubmit={handleSubmit}>
                        <input 
                            name = "name"
                            type="text"
                            onChange = {(handleChange)}
                            value={values.name}
                            placeholder="Name"
                            style={inputStyle}
                            required
                        />
                        <br></br>
                        {errors.name && touched.name ? (<div>{errors.name}</div>) : null}
                        <input 
                            name = "lastName"
                            type="text"
                            onChange = {(handleChange)}
                            value={values.lastName}
                            placeholder="Last Name"
                            style={inputStyle}
                            required
                        />
                        <br></br>
                        {errors.lastName && touched.lastName ? (<div>{errors.lastName}</div>) : null}
                        <input 
                            name = "email"
                            type="email"
                            onChange = {(handleChange)}
                            value={values.email}
                            placeholder="E-mail"
                            style={inputStyle}
                            required
                        />
                        <br></br>
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <input 
                            name = "password"
                            type="password"
                            onChange = {(handleChange)}
                            value={values.password}
                            placeholder="Password"
                            style={inputStyle}
                            required
                        />
                        <br></br>
                        {errors.password && touched.password ? <div>{errors.password}</div> : null}
                        {/* <NavLink to="/"><button style={buttonStyle} type='submit'>Submit</button></NavLink> */}
                        <button style={buttonStyle} type='submit'>Submit</button>
                    </form>
                )
            }
        </Formik>
    </div>
  )
}

export default Signup