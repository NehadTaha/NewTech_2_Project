import React from 'react'

function GreyButton(props) {
  return (
    <div>
        <button onClick={props.onClick} className='btn alert alert-danger px-5 py-4 m-1'>
          <h3>{props.text}</h3>
        </button>
    </div>
  )
}

export default GreyButton