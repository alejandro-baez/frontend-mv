import React from 'react'
import {Route, Routes} from "react-router-dom"
//Box component is layout comp that wraps and packages style functions in material ui
import {Box} from "@mui/material"

import './App.css'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <Box width="400px" sx={{width:{xl: '1488px'}}} m="auto">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exercise/:id" element={<ExerciseDetail />}/>
        </Routes>
        
    </Box>
  )
}

export default App