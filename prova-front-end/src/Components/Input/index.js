import React from 'react'
import './input.css'

const Input = ({ label,placeholder, ...props}) => {

  return (
    <>
      <label>{label}: </label>
      <input {...props} placeholder = {placeholder} ></input>
    </>
  )
}



export default Input