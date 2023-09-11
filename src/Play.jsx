import React, { useEffect, useState } from 'react'
import Question from './Question';
import Spinner from './Spinner';
import Result from './Result';
import { openTDhost } from './constants';
import { useSearchParams, Link } from 'react-router-dom';

function Play() {

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [quizFinished, setQuizFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(undefined);
    const [query, setQuery] = useSearchParams();

    const numberOfQuestions = 10;

    useEffect(() => {
        const name = query.get("categoryName");
        const id = query.get("categoryId");

        setSelectedCategory({name,id});
    },[])
    
    useEffect(() => {
        
        if (!selectedCategory) {
            return
        }

        const url = `${openTDhost}?amount=${numberOfQuestions}&category=${selectedCategory.id}&difficulty=easy`

        setIsLoading(true);

        async function fetchTrivia() {

            const triviaResponse = await fetch(url);

            const body = await triviaResponse.json();

            if (body.results) {
                setQuestions(body.results);
            }

            setTimeout(() => {
                setIsLoading(false);
            }, 500)
        }

        fetchTrivia();

    }, [selectedCategory])

    function selectAnswerHandler(answer) {
        setIsLoading(true);

        if (answer.correct) {
            setScore((value) => value + 1); // increment score
        }

        if (activeQuestionIndex === numberOfQuestions - 1) {
            // last question
            setQuizFinished(true);
        } else {
            // next question
            setActiveQuestionIndex((value) => value + 1);
        }

        setTimeout(() => {
            setIsLoading(false);
        }, 200)
    }

    return (
        <div className='container rounded p-4 my-2' style={{ backgroundColor: "#c0deff" }}>
            <div className="row">
                {
                    isLoading ? <Spinner light={true} size={4}></Spinner>
                        : (questions.length === 0 ? <></> :
                            <>
                                {!quizFinished ?
                                    <div className="container-">
                                        <div className="row">
                                            <div className='text-center pb-3 h4'>~{query.get("categoryName")} Quiz~</div>
                                            <div className="col-12 text-center h2">Question {activeQuestionIndex + 1}/{numberOfQuestions}</div>
                                        </div>
                                        <div className="row">
                                            <Question question={questions[activeQuestionIndex].question} correct_answer={questions[activeQuestionIndex].correct_answer} incorrect_answers={questions[activeQuestionIndex].incorrect_answers} selectAnswerHandler={selectAnswerHandler}
                                            ></Question>
                                        </div>
                                        <div>
                                        <Link to={"/"}><button >Stop</button></Link>
                                        </div>
                                    </div> : <>
                                        {/* Score/result component */}
                                        <div className="container text-center">
                                            <Result score={score} category={selectedCategory} />
                                        </div>
                                    </>
                                }
                            </>)}
            </div>

        </div>
    )
}

export default Play