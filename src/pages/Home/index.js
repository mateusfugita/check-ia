import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import Question from '../../components/Question';

export default function Home(){
    const questions = ['Pergunta 1', 'Pergunta 2'];
    const history = useHistory();

    function handleSubmit(){
        history.push('/result');
    }

    function setAnswerForQuestion(e){
        console.log(e.target.value);
        console.log(e.target.name);
    }

    return (
        <>
            <header>
                <h1 className='title'>Check-IA</h1>
                <p className='subtitle'>Descubra qual será seu próximo destino de acordo com o seu perfil</p>
            </header>
            <main>
                {questions.map((question, index) => {
                    return (
                        <Question question={question} index={index} handleClickFunction={setAnswerForQuestion}></Question>
                    )
                })}
                <button className='send-answers' onClick={handleSubmit}>Enviar</button>
            </main>
        </>
    )
}