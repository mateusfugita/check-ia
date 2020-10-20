import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import Header from '../../components/Header';
import Question from '../../components/Question';
import api from '../../services/api';

export default function Home(){
    const questions = [
        'Eu não falo muito', 
        'Eu me sinto confortável perto das pessoas', 
        'Eu fico estressado facilmente', 
        'Estou relaxado na maior parte do tempo', 
        'Tenho pouca preocupação com os outros', 
        'Estou interessado nas pessoas', 
        'Estou sempre preparado', 
        'Deixo meus pertences por aí', 
        'Eu tenho um vocabulário rico', 
        'Tenho dificuldade em compreender ideias abstratas', 
        'Continente que nasceu'
    ];
    const history = useHistory();
    let answers = Array(questions.length);
    const [token, setToken] = useState('');

    useEffect(() => {
        const data = {
            username: process.env.REACT_APP_USERNAME,
            password: process.env.REACT_APP_PASSWORD
        };

        api.post('user/authenticate', data).then(response => {
            setToken(response.data.token);
        });
    }, []);

    async function handleSubmit(){
        if(!answers.includes(undefined)){
            let data = {};

            data.country = await api.post('country/predict', { answers }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(async (response) => {
                const countryNames = await handleRequest('GET', `country?name=${response.data.country}`, null);
                data.ptName = countryNames.country.ptName;
                data.abbreviation = countryNames.country.abbreviation;
                return response.data.country;
            });

            data.images = await handleRequest('GET', `country/images/${data.country}`, null);

            history.push({
                pathname: '/result',
                data: data,
            });
        }
        else{
            alert('Responda todas as perguntas para continuar');
        }
    }

    async function handleRequest(method, url, data){
        const responseFromAPI = await api({
            method,
            url,
            data,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            return response.data;
        });
        return responseFromAPI;
    }

    function setAnswerForQuestion(e){
        answers[e.target.name.substring(1)] = e.target.value;

        const buttonsFromSelectedQuestion = document.getElementsByName(e.target.name);
        buttonsFromSelectedQuestion.forEach(btn => {
            if(btn.className.includes(' active')){
                btn.className = btn.className.replace(' active', '');
            }
        })

        e.target.className += ' active';
    }

    return (
        <>
            <Header />
            <main className='questions-container'>
                <p className='subtitle'>Descubra qual será seu próximo destino de acordo com o seu perfil</p>
                {questions.map((question, index) => {
                    return (
                        <Question key={index} question={question} index={index} handleClickFunction={setAnswerForQuestion}></Question>
                    )
                })}
                <button className='send-answers' onClick={handleSubmit}>Enviar</button>
            </main>
        </>
    )
}