import React from 'react'

const ButtonOutline = ({buttonName, className, disabled}) => {
  return (
    <button 
    disabled={disabled}
    className={`btn btn-outline btn-sm normal-case ${className}`} >{buttonName}</button>
  )
}

export default ButtonOutline