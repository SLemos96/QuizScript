import React from 'react';
import Cabine from './Cabine.js'
import Resultado from './Resultado.js'
// import Resultado from './Resultado.js'

var estado = 0; // 0 = open <> 1 = closed
const statement = 'qual time ganha'; //Título da pergunta
// const options = ['time A', 'time B', 'time C']; //Alternativas
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

    function vote(voto){
        alert("Voce votou:"+voto+" quantidade antiga: "+options[voto].count);
        options[voto].count = options[voto].count + 1;
        alert("Nova quantidade: "+options[voto].count)
    }

    function alteraEstadoVotacao(){
        if(estado === 0){ //se a votação estiver aberta, ele fecha
            estado = 1;
        }
        else{ //se tiver fechado ele abre;
            estado = 0;
        }
    }

    if(estado === 0){ //aberto
        return (
            <div>
                <Cabine 
                    statement={statement}
                    options={options}
                    onVote={vote}
                />
                <button onClick='alteraEstadoVotacao'>Alterar estado da votação</button>
            </div>
            )
    }else{ //fechado
        return (
            <div>
                <Resultado 
                    statement={statement}
                    options={options}
                />
                <button onClick='alteraEstadoVotacao'>Alterar estado da votação</button>
            </div>
            )
    }
    
}