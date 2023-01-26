import React from 'react'
import ColorThumbnail from '../ColorThumbnail/ColorThumbnail'
import './SavedColor.css'

const SavedColors = () => {

    return (
        <div className='saved-wrapper'>
            <div className='thumbnail-container'>
                <ColorThumbnail/>
                <ColorThumbnail/>
                <ColorThumbnail/>
                <ColorThumbnail/>
                <ColorThumbnail/>
            </div>
        </div>
    )
}

export default SavedColors