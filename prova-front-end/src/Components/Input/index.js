import React from 'react'

const Input = ({ label, ...props}) => {

  return (
    <section>
      <label>{label}: </label>
      <input {...props} placeholder='Usuario'></input>
    </section>
  )
}



export default Input