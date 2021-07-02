import React from 'react';
import Cabine from './Cabine.js'
// import Resultado from './Resultado.js'

const statement = 'qual time ganha'; //Título da pergunta
const options = ['time A', 'time B', 'time C']; //Alternativas

export default function Card(props){

    function vote(){
        
    }

    return (
        <div>
            <Cabine 
                statement={statement}
                options={options}
                onVote={vote}
            />
        </div>
        )
}