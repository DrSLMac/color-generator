import React, { useState } from 'react'
import './Card.css'

const Card = () => {
    const [randomColor, setRandomColor] = useState("#ffffff")
    
    const generateColor = () => {
        let hexColor = Math.random().toString(16).substring(2,8)
        document.body.style.backgroundColor = `#${hexColor}`;
        setRandomColor(`#${hexColor}`)
        return randomColor
    }

    return (
        <div className='card-wrapper'>
            <h1>Random Hex Color Gen</h1>
            
            <div className='hex-wrapper' style={{backgroundColor: randomColor}}>
                <h2 className='hex'>{randomColor}</h2>
            </div>
            <hr className='divider'></hr>
            <button className='button'
                onClick={() => {generateColor()}}
            >
                🎨 Generate Color
            </button>
        </div>
    )
}

export default Card