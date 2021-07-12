import React from 'react'

export default function Resultado(props) {
    const options = props.options.map((option, index) => (
        <p>
            {option.opcao} - {option.count} votos
        </p>
        ))

  return (
    <div>
        {/* <h1>{props.statement}</h1> */}
        {options}
  </div>
  )
}