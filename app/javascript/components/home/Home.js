import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function Home() {
	return(

		<div >
			<h1>Clases de fitness</h1>	
		  	<ul>
				<li>
				  	<Link to="/class_avs">Clases Disponibles</Link>
				</li>

				<li>
				  	<Link to="/bookings">Mis Reservas</Link>
				</li>

				<li>
					<Link to="/create">Crear clase fitness</Link>
				</li>
	
         	</ul>
		</div>
	)
}

export default Home
