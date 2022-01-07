import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Class_av from './class_av/Class_av'
import Booking from './booking/Booking'
import Home from './home/Home'

function App() {
	return (
		
  	  <Routes>
		<Route exact path="/" element={<Home />} />	
	  	<Route exact path="/class_avs" element={<Class_av />} />
	  	<Route exact path="/bookings" element={<Booking />} />
	  </Routes>
        
	);
}

export default App
