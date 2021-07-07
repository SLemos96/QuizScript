import React, { useState } from 'react';
import Cabine from './Cabine.js'
import Resultado from './Resultado.js'
// import Resultado from './Resultado.js'

const statement = 'qual time ganha'; //Título da pergunta
const options =[
    {
        count: 0,
        opcao: 'time X'
    },
    {
        count: 0,
        opcao: 'time Y'
    },
    {
        count: 0,
        opcao: 'time Z'
    }
]

export default function Card(props){
    const [estado, setEstado] = useState('open');

    function vote(voto){
        // alert("Voce votou:"+voto+" quantidade antiga: "+options[voto].count);
        options[voto].count = options[voto].count + 1;
        // alert("Nova quantidade: "+options[voto].count)
        setEstado('closed'); //fechando a votação após receber o voto
    }

    if(estado === 'open'){ //aberto
        return (
            <div>
                <Cabine 
                    statement={statement}
                    options={options}
                    onVote={vote}
                />
            </div>
            )
    }else{ //fechado
        return (
            <div>
                <Resultado 
                    statement={statement}
                    options={options}
                />
            </div>
            )
    }
    
}