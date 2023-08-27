import React from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs'
const TableBody = props => (
    <tbody>
        {props.livros.map((livro, index) => (
            <tr key={livro.id}>
                <td>{livro.titulo}</td>
                <td>{livro.autor}</td>
                <td>
                    <button className='remover'
                        onClick={() => props.removerLivro(livro.id)}
                        id={livro.id}
                    >
                        <BsFillTrash3Fill />
                    </button>
                </td>

            </tr>
        ))}
    </tbody>
)

export default TableBody
