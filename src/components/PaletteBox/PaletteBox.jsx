import React, { useState } from "react";
import ColorBox from "../ColorBox/ColorBox";
import './PaletteBox.css'

const PaletteBox = ({ colorArray }) => {
    // console.log("colorArray in PaletteBox: ", colorArray)
    // const [randomColor, setRandomColor] = useState("#df8e8e")


    const makePalette = colorArray.map((hexCode) => {
        // const { hexCode } = hexCode
        // console.log("what is the code? ", hexCode)
        return <ColorBox 
            key={Math.random()}
            hexColorCode={hexCode}
        />
    })

    return (
        <div className="hex-wrapper">
            {makePalette}
        </div>
    )
}

export default PaletteBox