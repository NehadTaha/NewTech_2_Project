import React from 'react'
import { useEffect, useState } from 'react'
import { token, top10Route } from './constants'
import GreyButton from './GreyButton'
import ScoreTable from './ScoreTable'
import { useNavigate } from "react-router-dom";

function LeaderBoard() {

  const [scores, setScores] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    //Call upon component
    fetchScores();

  }, [])

  async function fetchScores(){
    const options = {
      method: "GET",
      headers: {
        "AUthorization": token
      }
    }
    
    const response = await fetch(top10Route, options)

    const data = await response.json()

    setScores(data);
  }

  function replay(){
    navigate('/selectCategory');
  }

  return (
    <div className='container'>
        <div className='row my-5'>
            <div className='col-2'></div>
            <div className='col'>
                <div className='container text-center'>
                    <div className='row mb-5'>
                        <div className='col'>
                            <h1>Top Scores</h1>
                        </div>
                    </div>
                    <div className='row mt-5'>
                      <div className='col'>
                          <table className='table bg-light table-bordered border-dark'>
                            <thead>
                            <tr className='alert alert-dark border-dark'>
                                <th><b>Name</b></th>
                                <th><b>Category</b></th>
                                <th><b>Score</b></th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                scores.map((score, index) => {
                                  return <ScoreTable key={index} name={score.name} category = {score.categoryName} score = {score.score}/>
                                })
                              }
                            </tbody>
                        </table>
                      </div>
                    </div>
                </div>

            </div>
            <div className='col-2'>
              <GreyButton text='Replay' onClick={()=>replay()}/>
            </div>
        </div>
    </div>
  )
}

export default LeaderBoard