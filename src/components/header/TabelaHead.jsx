import React from 'react'

const TabelaHead = (props) => {
    return (
       <th> Titulo
        <div className='container-linhas'>
            <div onClick={()=> props.ordenarCrescente()}>&#129093;</div>
            <div onClick={()=> props.ordenarDecrescente()}>&#129095;</div>
        </div>
       </th>
    )
}

export default TabelaHead
