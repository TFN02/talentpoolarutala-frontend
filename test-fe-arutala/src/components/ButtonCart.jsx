import React from 'react'
import { LuPlus } from 'react-icons/lu'

const ButtonCart = ({buttonName, disabled, className, onClick}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`btn border-none bg-green-600 text-white font-bold btn-sm normal-case ${className}`} >
                <LuPlus />
            {buttonName}
        </button>
    )
}

export default ButtonCart