import React, { useEffect } from 'react'
import { useContext } from 'react';
import { SocketContext } from './SocketContent'
import { useNavigate } from 'react-router-dom';
import GreyButton from "./GreyButton";
import { useState } from 'react';


function CreateQuiz() {
    //Use this in every component that emits or listens to ws events
    const socket = useContext(SocketContext);
    const navigate = useNavigate();
    const [time, setTime] = useState(0);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    
   
    function navToLobby(){
        navigate('/multiplayer/lobby')
    }
 

    function navToChoice(){
        navigate('/multiplayer/choice')
    }
    function handleCategoryId(){
        if(category === "geography"){
            return 22;
        }
        else if(category === "history"){
            return 23;
        }
        else if(category === "politics"){
            return 24;
        }
        else if(category === "sports"){
            return 21;
        }
    }
    function onClickHandler(){
        //socket.emit('save_settings', {time, numberOfQuestions, category, difficulty})
        navToLobby();
        socket.emit('save_settings', {time, numberOfQuestions, category, difficulty})
        //local storage the category and the category id from the url provided and the difficulty and the number of questions and the time
        
        

    }
    localStorage.setItem("category", category);
        localStorage.setItem("difficulty", difficulty);
        localStorage.setItem("numberOfQuestions", numberOfQuestions);
        localStorage.setItem("time", time);
        localStorage.setItem("categoryId", handleCategoryId());
        
       

    // Creating an event to the server to save the time, the number of questions, category and difficulty
            
    return (
        <div className="container mt-5 pt-5 text-center" style={{ minheight: "100vh" }}>
            
                <div className='row text-center mb-5'>
                    <div className='col-12'>
                        <h1 className='mt-5 '>Create Quiz</h1>
                    </div>
                </div>
                
                <div className='row mb-3'>

                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm fw-bold" >Time</label>
                    <div class="col-sm-2">
                        <input type="number"
                        class="form-control form-control-sm"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}></input>
                    </div>
                </div>
                <div className='row mb-3'>
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm fw-bold">Number of Questions</label>
                    <div class="col-sm-2">
                        <input type="number" 
                        class="form-control form-control-sm" 
                        id="colFormLabelSm"
                        value={numberOfQuestions}
                        onChange={(e)=>{setNumberOfQuestions(e.target.value)}}></input>
                    </div>
                </div>
                <div className='row mb-3'>
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm fw-bold">Category</label>
                    <div className='col-3'>

                        <select className="form-select form-select-lg mb-3 col-3" 
                        aria-label=".form-select-lg example"
                        value={category}
                        onChange={(e)=>{setCategory(e.target.value)}}
                        >
                            <option selected>Select the Category</option>
                            <option value="geography" 
                            clickHandler="/play?categoryId=22&categoryName=Geography">Geography</option>
                            
                            <option value="history"clickHandler="/play?categoryId=23&categoryName=History">History</option>
                            <option value="politics"clickHandler="/play?categoryId=24&categoryName=Politics">Politics</option>
                            <option value="sports"clickHandler="/play?categoryId=21&categoryName=Sports">Sports</option>
                        </select>
                    </div>
                </div>
                <div className='row mb-3'>
                    <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm fw-bold">Difficulty</label>
                    <div className='col-3'>

                        <select className="form-select form-select-lg mb-3 col-3" 
                        aria-label=".form-select-lg example"
                        value={difficulty}
                        onChange={(e)=>{setDifficulty(e.target.value)}}
                        >
                            <option selected>Select the Difficulty</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className='row mb-3'>
                    <div className='col-3'>
                        <GreyButton text ="Create"onClick={() => {onClickHandler()}} ></GreyButton>
                    </div>
                    <div className='col-3'>
                        <GreyButton text="Back" onClick={() => { navToChoice()}}></GreyButton>
                    </div>
                </div>
                <div className='row mb-3'>
                </div>

            </div>
       
    )
}
    
   
    



    
    


export default CreateQuiz

