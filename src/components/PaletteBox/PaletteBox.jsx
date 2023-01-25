import React, { useState } from "react";
import ColorBox from "../ColorBox/ColorBox";
import './PaletteBox.css'

const PaletteBox = () => {
    // const [randomColor, setRandomColor] = useState("#df8e8e")

    // const generateColor = () => {
    //     let hexColor = Math.random().toString(16).substring(2,8)
    //     setRandomColor(`#${hexColor}`)
    //     return randomColor
    // }
    
    // let colorArray = []
    // const makePalette = () => {
    //     for (let i = 0; i < 5; i++) {
    //         colorArray.push(generateColor())
    //     }
    // }

    // console.log("colorArray: ", colorArray)

    return (
        <div>
            <ColorBox />
            <ColorBox />
        </div>
    )
}

export default PaletteBox