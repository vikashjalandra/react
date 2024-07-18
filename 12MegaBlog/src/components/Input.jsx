import React, { useId, forwardRef } from 'react'

const Input = forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...prpos
}, ref) {
    const id =useId()
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}>
                {label}
            </label>
            }
            <input 
            type={type}
            className={`px-3 py-2 rounded-none bg-white text-black outline-none focus:bg-gray-200 w-full border border-gray-400 ${className}`}
            ref={ref} {...prpos}
            id={id} />
        </div>
    )
})

export default Input
