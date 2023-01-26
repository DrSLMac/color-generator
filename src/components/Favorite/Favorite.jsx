import React, { useState } from 'react'
import './Favorite.css'
import clear_heart from '../../assets/clear_heart.png'
import red_heart from '../../assets/red_heart.png'

const Favorite = () => {
    const [isFavorite, setFavorite] = useState(false)

    const handleFavorite = () => {
        return isFavorite ? setFavorite(false) : setFavorite(true);
    }

    const heartImg = () => {
        return !isFavorite ? <img src={clear_heart} /> : <img src={red_heart} />
    }

    return (
        <div>
            <button className='fav-btn' onClick={() => { 
                handleFavorite()
                console.log("isFavorite? ", isFavorite)
            }}>
                {heartImg()}
            </button>
        </div>
    )
}

export default Favorite