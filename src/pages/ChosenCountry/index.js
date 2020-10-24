import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import PhotoSlider from '../../components/PhotoSlider';

export default function ChosenCountry(){
    const history = useHistory();
    const [images, setImages] = useState([]);
    const [ptName, setPtName] = useState('');
    const [countryInfo, setCountryInfo] = useState({});

    useEffect(() => {
        if(!history.location.data){
            history.push('/');
        }
        else{
            setImages(history.location.data.images);
            setPtName(history.location.data.ptName);
            setCountryInfo(history.location.data.info);
        }
    }, [history]);

    return (
        <>
            <Header />
            <main className='results-container'>
                <div className='result-text'>
                    <h2>Seu destino escolhido: {ptName}</h2>
                </div>
                <PhotoSlider images={images}/>

                <div className="country-info-container">
                    <h3>Informações sobre o país</h3>
                    <ul>
                        <li><strong>Capital: </strong>{countryInfo['Capital']}</li>
                        <li><strong>Região: </strong>{countryInfo["Região"]}</li>
                        <li><strong>Moeda: </strong>{countryInfo['Moeda']}</li>
                        <li><strong>Língua: </strong>{countryInfo["Língua"]}</li>
                    </ul>
                </div>
            </main>
        </>
    )
}