import React from 'react'

const ButtonOutline = ({buttonName}) => {
  return (
    <button className='btn btn-outline btn-sm px-12 normal-case text-green-600 hover:bg-green-600' >{buttonName}</button>
  )
}

export default ButtonOutline