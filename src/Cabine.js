import React from 'react'

export default function Cabine(props) {
    const options = props.options.map((option, index) => (
        <button
            key={option.opcao}
            onClick={() => props.onVote(index)}
        >
            {option.opcao}
        </button>
        ))

  return (
    <div>
        <h1>{props.statement}</h1>
        {options}
  </div>
  )
}