import React, { useState } from 'react'
import { addScore, token } from './constants';
import GreyButton from './GreyButton'
import { useNavigate } from "react-router-dom";

function Result(props) {
  const [userName, setUsername] = useState('');
  const navigate = useNavigate();  

  async function addUserScore(){

    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({
        score: props.score,
        name: userName,
        categoryId: parseInt(props.category.id),
        categoryName: props.category.name
      })
    }
        
    await fetch(addScore, options)

    navigate('/leaderBoard')

  }

  function replay(){
    navigate('/selectCategory');
  }

  return (
    <div className='container'>
        <div className='row my-5'>
            <div className='col-2'>

            </div>
            <div className='col'>
                <div className='container text-center'>
                    <div className='row mb-5'>
                        <div className='col'>
                            <h1>Completed!</h1>
                            <h3>Your score is <span>{props.score}</span> / 10</h3>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col mt-3'>
                            <div className='pt-4'>
                            Name <input value={userName} onChange={e => setUsername(e.target.value)} type="text"/>
                            </div>
                        </div>
                        <div className='col mt-3'>
                            <GreyButton text='Save score to leaderboard' onClick={()=>addUserScore()} />
                        </div>
                    </div>
                    <div className='row mt-5'>
                      <div className='col'>
                        <GreyButton text='Replay' onClick={()=>replay()}/>
                      </div>
                    </div>
                </div>

            </div>
            <div className='col-2'>

            </div>
        </div>
    </div>
  )
}

export default Result