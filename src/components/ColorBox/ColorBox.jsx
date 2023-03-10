import React from "react";
import './ColorBox.css'
import Favorite from "../Favorite/Favorite";

const ColorBox = ({ hexColorCode }) => {
    
    return (
        <div className="colorbox" style={{backgroundColor: hexColorCode}}>
            <Favorite />
            <div className="colorbox-colorname">
                {hexColorCode}
            </div>
        </div>
    )
}

export default ColorBox