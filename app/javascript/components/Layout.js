import React from "react"
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = (props) => {

	let navigate = useNavigate();

	const loginClick = () => {
		navigate('/sessions');
	}

	const registrationsClick = () => {
    	navigate('/registrations');
 	}

 	const logoutClick = () => {
		navigate('/');
	}

	return (
		<main>
			<nav className="nav">
				<Link to="/">Home</Link> | {" "}
				<Link to="/class_avs">Clases Disponibles</Link> | {" "}
				<Link to="/bookings">Mis Reservas</Link> | {" "}
				<Link to="/create">Crear clase fitness</Link> | {" "}
				<button onClick={() => loginClick()}>Login</button> | {" "}
				<button onClick={() => registrationsClick()}>Registrarse</button> | {" "}
				<button onClick={() => logoutClick()}>Logout</button>
			</nav>
			<section>
				<Outlet />
			</section>
		</main>
		);
}

export default Layout
