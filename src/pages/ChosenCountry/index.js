import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import PhotoSlider from '../../components/PhotoSlider';

export default function ChosenCountry(){
    const history = useHistory();
    const [images, setImages] = useState([]);
    const [ptName, setPtName] = useState('');

    useEffect(() => {
        if(!history.location.data){
            history.push('/');
        }
        else{
            setImages(history.location.data.images);
            setPtName(history.location.data.ptName);
        }
    }, [history]);

    return (
        <>
            <Header />
            <main className='results-container'>
                <div className='result-text'>
                    <h3>Seu destino escolhido: {ptName}</h3>
                </div>
                <PhotoSlider images={images}/>
            </main>
        </>
    )
}