import React from 'react'

const TableFooter = (props) => {
  return (
    <tfoot>
        <tr>
            <td colSpan="4">
            A quantidade de livros na tabela  é {props.qtdelivros}
            </td>
        </tr>
    </tfoot>
  )
}

export default TableFooter
