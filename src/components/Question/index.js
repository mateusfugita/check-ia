import React from 'react';

import './styles.css';

export default function Question({ question, index, handleClickFunction }){
    const values = [1, 2, 3, 4, 5];

    return (
        <div className="question-block">
            <label>{question}</label>
            <div className='answers-container'>
                <p className='answers-range-labels'>Pouco provável</p>
                {values.map(value => {
                    return (
                        <button 
                            className='btn-answers'
                            key={value} 
                            name={`q${index}`} 
                            value={value} 
                            onClick={handleClickFunction}
                        ></button>
                    )
                })}
                <p className='answers-range-labels'>Muito provável</p>
            </div>
        </div>
    )
}