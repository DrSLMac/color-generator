import React, { useEffect, useState } from 'react'
import PaletteBox from '../PaletteBox/PaletteBox'
import './Card.css'

const Card = () => {
    const [randomColor1, setRandomColor1] = useState()
    const [randomColor2, setRandomColor2] = useState()
    const [randomColor3, setRandomColor3] = useState()
    const [randomColor4, setRandomColor4] = useState()
    const [randomColor5, setRandomColor5] = useState()
    const [colorArray, setColorArray] = useState(['#', '#9d912d', '#34e50e', '#0f1958','#932f57'])
   
    const makePalette = () => {
        // let hexColor = Math.random().toString(16).substring(2,8)
        setRandomColor1(`#${Math.random().toString(16).substring(2,8)}`)
        setRandomColor2(`#${Math.random().toString(16).substring(2,8)}`)
        setRandomColor3(`#${Math.random().toString(16).substring(2,8)}`)
        setRandomColor4(`#${Math.random().toString(16).substring(2,8)}`)
        setRandomColor5(`#${Math.random().toString(16).substring(2,8)}`)
        setColorArray([randomColor1,randomColor2,randomColor3,randomColor4,randomColor5])
    }

    useEffect(() => {
        makePalette()
    }, [])

    console.log("colorArray in the card: ", colorArray)
    return (
        <div className='card-wrapper'>
            <h1>Random Hex Color Generator</h1>
            
            <div className='palette-container' >
                <PaletteBox colorArray={colorArray}/>
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