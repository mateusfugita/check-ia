import React from 'react';

import './styles.css';

export default function PhotoSlider({ images }){
    return (
        <div id="slider">
            <figure>
                {images.slice(0, 4).map((image, index) => {
                    return (
                        <img key={index} src={image.image.replace('w=1080', 'h=400')} alt={image.alt}></img>
                    )
                })}
            </figure>
        </div>
    )
}