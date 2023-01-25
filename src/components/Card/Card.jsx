import React, { useState } from 'react'
import PaletteBox from '../PaletteBox/PaletteBox'
import './Card.css'

const Card = () => {
    const [randomColor, setRandomColor] = useState("#ffffff")
    const [colorArray, setColorArray] = useState([])
    
    // const generateColor = () => {
    //     let hexColor = Math.random().toString(16).substring(2,8)
    //     document.body.style.backgroundColor = `#${hexColor}`;
    //     setRandomColor(`#${hexColor}`)
    //     return randomColor
    // }
    // let generatedColor = generateColor()

    const makePalette = () => {
        let hexColor = Math.random().toString(16).substring(2,8)
        if (colorArray.length < 5) {
            setRandomColor(`#${hexColor}`)
            setColorArray([randomColor, ...colorArray])
        }




        for (let i = 0; i < 5; i++) {
                console.log("colorArray: ", colorArray)
                return colorArray
            }
        }


   

    return (
        <div className='card-wrapper'>
            <h1>Random Hex Color Gen</h1>
            
            <div className='hex-wrapper' >
                <h2 className='hex'></h2>
                <PaletteBox />
            </div>
            <hr className='divider'></hr>
            <button className='button'
                onClick={() => {
                    makePalette()
                    
                    }}
            >
                🎨 Generate Color
            </button>
        </div>
    )
}

export default Card

// style={{backgroundColor: randomColor}}