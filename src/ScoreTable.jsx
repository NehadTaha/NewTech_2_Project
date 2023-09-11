import React from 'react'

function ScoreTable(props) {
  return (
      <tr>
        <td>{props.name}</td>
        <td>{props.category}</td>
        <td>{props.score}</td>
      </tr>
  )
}

export default ScoreTable