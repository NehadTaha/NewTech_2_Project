import React from 'react'
import { Link } from 'react-router-dom'
import WhiteButton from './WhiteButton'

function SelectCategory() {

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
            <Link to={"/"}><button className='ms-2 mt-2 text-start'>Back </button></Link>
            </div>
            <div className='col-8'>
                <div className='container text-center'>
                    <div className='row'>
                        <div className='col'>
                            <h1 className='pb-4 mt-5'>New Quiz</h1>
                            <h3>Please select a category</h3>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col'>
                            <WhiteButton text='Geography' clickHandler="/play?categoryId=22&categoryName=Geography"/>
                        </div>
                        <div className='col'>
                            <WhiteButton text='History' clickHandler="/play?categoryId=23&categoryName=History"/>
                        </div>
                    </div>
                    <div className='row'>
                    <div className='col'>
                            <WhiteButton text='Politics' clickHandler="/play?categoryId=24&categoryName=Politics"/>
                        </div>
                        <div className='col'>
                            <WhiteButton text='Sports' clickHandler="/play?categoryId=21&categoryName=Sports"/>
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

export default SelectCategory