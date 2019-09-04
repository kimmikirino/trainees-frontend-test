import React from 'react'

const Input = ({ label,placeholder, ...props}) => {

  return (
    <section>
      <label>{label}: </label>
      <input {...props} placeholder = {placeholder} ></input>
    </section>
  )
}



export default Input