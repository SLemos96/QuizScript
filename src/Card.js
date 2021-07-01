import React from 'react';
import Cabine from './Cabine.js'
// import Resultado from './Resultado.js'

const statement = 'Vai dar certo'; //Título da pergunta
const options = ['sim', 'não', 'talvez']; //Alternativas

export default function Card(props){
    return (
        <div>
            <Cabine 
                statement={statement}
                options={options}
            />
        </div>
        )
}