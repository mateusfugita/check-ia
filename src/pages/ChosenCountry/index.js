import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import PhotoSlider from '../../components/PhotoSlider';
import handleRequest from '../../utils/handleRequest';

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
            const token = history.location.data.token;
            setPtName(history.location.data.ptName);

            handleRequest('GET', `country/info/${history.location.data.abbreviation}`, null, token).then(response => {
                setCountryInfo(response);
            });

            handleRequest('GET', `country/images/${history.location.data.country}`, null, token).then(response => {
                setImages(response);
            });
        }
    }, [history]);

    return (
        <>
            <Header />
            <main className='results-container'>
                <div className='result-text'>
                    <h2>Seu destino escolhido: {ptName}</h2>
                </div>
                {images && <PhotoSlider images={images}/>}

                {countryInfo['Capital'] && (
                    <div className="country-info-container">
                        <h3>Informações sobre o país</h3>
                        <ul>
                            <li><strong>Capital: </strong>{countryInfo['Capital']}</li>
                            <li><strong>Região: </strong>{countryInfo["Região"]}</li>
                            <li><strong>Moeda: </strong>{countryInfo['Moeda']}</li>
                            <li><strong>Língua: </strong>{countryInfo["Língua"]}</li>
                        </ul>
                    </div>
                )}
            </main>
        </>
    )
}