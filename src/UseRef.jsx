import React, { useRef, useState } from 'react'

const UseRef = () => {
const inputElement = useRef();
const [text,setText] = useState("");
const handleClick = () => {
    inputElement.current.focus();
    setText(inputElement.current.value);
}
  return (
    <div className="container">
        <h2>useRef Hook</h2>
        <div className="form-group">
            <input type="text" ref={inputElement} className="mx-2"/>
            <button onClick={handleClick} className='btn btn-primary'>Click to focus</button>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default UseRef