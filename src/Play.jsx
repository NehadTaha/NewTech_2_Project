import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Question from './Question';

import Spinner from './Spinner';

import Result from './Result';

import { openTDhost } from './constants';
import { useContext } from 'react';
import { SocketContext } from './SocketContent'
 

 

function HostPlay() {
const socket = useContext(SocketContext);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const [questions, setQuestions] = useState([]);

  const [quizFinished, setQuizFinished] = useState(false);

  const [score, setScore] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const numberOfQuestions = parseInt(localStorage.getItem('numberOfQuestions'), 10);

 

  const selectedCategory = {

    name: localStorage.getItem('category'),

    id: localStorage.getItem('categoryId'),

  };

 

  const difficulty = localStorage.getItem('difficulty');

  const time = parseInt(localStorage.getItem('time'), 10);

 

  useEffect(() => {

    socket.on('quizQuestions', (quizQuestions) => {
        setQuestions(quizQuestions);
    });

    

 

    const url = `${openTDhost}?amount=${numberOfQuestions}&category=${selectedCategory.id}&difficulty=${difficulty}`;

 

    setIsLoading(true);

 

    async function fetchTrivia() {

      try {

        const triviaResponse = await fetch(url);

        const body = await triviaResponse.json();

 

        if (body.results) {

          setQuestions(body.results);

          setIsLoading(false);

        }

      } catch (error) {

        console.error('Error fetching trivia:', error);

        setIsLoading(false);

      }

    }

 

    fetchTrivia();

  }, [selectedCategory.id, numberOfQuestions, difficulty]);

 

  useEffect(() => {

    if (activeQuestionIndex < numberOfQuestions - 1) {

      const timer = setTimeout(() => {

        setActiveQuestionIndex((value) => value + 1);

      }, time * 1000);

 

      return () => clearTimeout(timer); // Clear timer if component unmounts

    } else {

      setQuizFinished(true);

    }

  }, [activeQuestionIndex, numberOfQuestions, time]);

 

  function selectAnswerHandler(answer) {

    setIsLoading(true);

 

    if (answer.correct) {

      setScore((value) => value + 1);

    }

 

    if (activeQuestionIndex === numberOfQuestions - 1) {

      setQuizFinished(true);

    } else {

      setTimeout(() => {

        setActiveQuestionIndex((value) => value + 1);

        setIsLoading(false);

      }, 500);

    }

  }

 

  return (

    <div>

      <div className='container rounded p-4 my-2' style={{ backgroundColor: "#c0deff" }}>

        <div className="row">

          {isLoading ? (

            <Spinner light={true} size={4}></Spinner>

          ) : questions.length === 0 ? (

            <></>

          ) : (

            <>

              {!quizFinished ? (

                <div className="container-">

                  <div className="row">

                    <div className='text-center pb-3 h4'>~{selectedCategory.name} Quiz~</div>

                    <div className="col-12 text-center h2">Question {activeQuestionIndex + 1}/{numberOfQuestions}</div>

                  </div>

                  <div className="row">

                    <Question

                      question={questions[activeQuestionIndex].question}

                      correct_answer={questions[activeQuestionIndex].correct_answer}

                      incorrect_answers={questions[activeQuestionIndex].incorrect_answers}

                      selectAnswerHandler={selectAnswerHandler}

                    />

                  </div>

                  <div>

                    <Link to={"/"}><button disabled>Stop</button></Link>

                  </div>

                </div>

              ) : (

                <div className="container text-center">

                  <Result score={score} category={selectedCategory} />

                </div>

              )}

            </>

          )}

        </div>

      </div>

    </div>

  );

}

 

export default HostPlay;