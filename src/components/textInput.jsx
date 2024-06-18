import React from 'react'

const bgColor = "red";
const color = "green";

const TextInput = ({ id, label, placeholder }) => {
    return (
        <>
            <label
                htmlFor={id}
                style={{
                    backgroundColor: bgColor,
                    color: color,
                }}
            >
                {label}
            </label>
            <input type="text" className="border" id={id} placeholder={placeholder} />
        </>
    )
}

export default TextInput