import React from 'react'
import {Formik} from 'formik'
import { NavLink } from 'react-router-dom'
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
            onSubmit={(values) => {
                alert(JSON.stringify(values))
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
                        <NavLink to="/"><button style={buttonStyle} type='submit'>Submit</button></NavLink>
                    </form>
                )
            }
        </Formik>
    </div>
  )
}

export default Signup