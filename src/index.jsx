import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Play from './Play';
import SelectCategory from './SelectCategory';
import Result from './Result';
import LeaderBoard from './LeaderBoard';
import Multiplayer from './Multiplayer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route index element={<Welcome />}/>
        <Route path='/selectCategory' element={<SelectCategory/>}/>
        <Route path='/play' element={<Play/>}/>
        <Route path='/leaderBoard' element={<LeaderBoard/>}/>
        <Route path='/multiplayer' element={<Multiplayer/>}/>
      </Routes>
    </BrowserRouter>
)

