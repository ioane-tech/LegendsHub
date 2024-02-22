import React from 'react'

import { Routes, Route} from "react-router-dom"

import Home from '../home/Home';
import BgVideo from '../bg-video/BgVideo';
import LoginPage from '../Registration/LoginPage';

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<><Home/><BgVideo /></>}/>
            <Route path='/registration' element={<><LoginPage/></>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes