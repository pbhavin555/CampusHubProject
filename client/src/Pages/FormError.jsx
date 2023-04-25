import React from 'react'

const FormError = ({ error }) => {
  return (
    error && <div className="invalid-feedback">{error}</div>
  )
}

export default FormError
