import React, { useEffect } from 'react'
import { useContext } from 'react';
import { SocketContext } from './SocketContent'
import { useNavigate } from 'react-router-dom';
import GreyButton from "./GreyButton";


function CreateQuiz() {
    //Use this in every component that emits or listens to ws events
    const socket = useContext(SocketContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (socket) {
            socket.emit('reach10', { count: 20 })

        } else {
            navigate('/Multiplayer/create')
            console.log("No socket found");
        }

    }, [])
    return (
        <div className="container mt-5 pt-5 text-center" style={{ minheight: "100vh" }}>
            
                <div className='row text-center mb-5'>
                    <div className='col-12'>
                        <h1 className='mt-5 '>Create Quiz</h1>
                    </div>
                </div>
                <div className='row mb-3'>
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm fw-bold">Time</label>
                    <div class="col-sm-2">
                        <input type="number" class="form-control form-control-sm" id="colFormLabelSm"></input>
                    </div>
                </div>
                <div className='row mb-3'>
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm fw-bold">Number of Questions</label>
                    <div class="col-sm-2">
                        <input type="number" class="form-control form-control-sm" id="colFormLabelSm"></input>
                    </div>
                </div>
                <div className='row mb-3'>
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm fw-bold">Category</label>
                    <div className='col-3'>

                        <select className="form-select form-select-lg mb-3 col-3" aria-label=".form-select-lg example">
                            <option selected>Select the Category</option>
                            <option value="film">Film</option>
                            <option value="television">Television</option>
                            <option value="videoGames">Video Games</option>
                            <option value="generalKnowledge">General Knowledge</option>
                        </select>
                    </div>
                </div>
                <div className='row mb-3'>
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm fw-bold">Difficulty</label>
                    <div className='col-3'>

                        <select className="form-select form-select-lg mb-3 col-3" aria-label=".form-select-lg example">
                            <option selected>Select the Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-3'>
                        <GreyButton text ="Create"onClick={() => { }} ></GreyButton>
                    </div>
                    <div className='col-3'>
                        <GreyButton text="Back" onClick={() => { }}></GreyButton>
                    </div>
                </div>
                <div className='row mb-3'>
                </div>

            </div>
        



    )
}

export default CreateQuiz

