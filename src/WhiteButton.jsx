import { Link } from"react-router-dom";
import React from 'react'

function WhiteButton(props) {
  return (
    <div>
      <Link to={props.clickHandler}>
        <button className='btn alert alert-primary rounded-pill border border-dark my-5 m'>
          <h3 className='px-5 py-4'>{props.text}</h3>
        </button>
      </Link>
    </div>
  )
}

export default WhiteButton