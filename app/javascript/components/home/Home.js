import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
	return(

		<div>
		  <ul>
			<li>
      			<Link to="/">Home</Link>
   			</li>

			<li>
			  <Link to="/class_avs">Clases Disponibles</Link>
			</li>

			<li>
			  <Link to="/bookings">Mis Reservas</Link>
			</li>
	
          </ul>

		</div>
	)

}

export default Home
