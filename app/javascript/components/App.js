import React, { useState } from 'react'
import { Routes, Route, Redirect, Link } from 'react-router-dom'
import Layout from './Layout'
import Class_av from './class_av/Class_av'
import Booking from './booking/Booking'
import Home from './home/Home'
import ClassForm from './class_av/ClassForm'
import Login from './user/Login'
import Registration from './user/Registration'
import "./App.css"

function App(props) {

	const[state, setState] = useState({loggedInStatus: "Sin iniciar session", user: {}});

	const handleLogin = (data) => {
		setState({
			loggedInStatus: "Session iniciada",
			user: data.user
		});
	}

	const handleLogout = () => {
		setState({
			loggedInStatus: "Sin iniciar session",
			user: {}
		});
	}
	return (
		
  	<Routes>
  	  	<Route path="/" element={<Layout />}>
			<Route index element={<Home handleLogin={handleLogin} handleLogout={handleLogout} loggedInStatus={state.loggedInStatus} />} />
		  	<Route path="class_avs" element={<Class_av />} />
		  	<Route path="bookings" element={<Booking />} />
		  	<Route path="create" element={<ClassForm />} />
		  	<Route path="sessions" element={<Login />} />
		  	<Route path="registrations" element={<Registration />} />
		</Route>
	</Routes>
	);
}

export default App
