import React from "react"
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

const Home = (props) => {


	return (
		
		<div className="container">
			<h1 className="titleOne">Clases de fitness</h1>

			<h3>{props.loggedInStatus}</h3>
		</div>
		);
}

export default Home
