import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = (props) => {

	const[user, setUser] = useState({email: "", password: ""});

	let navigate = useNavigate();

	const handleChange = (e) => {
    	e.preventDefault()

	    	setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
    	e.preventDefault()
    	
    	const csrfToken = document.querySelector('[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

		axios.post('/api/v1/sessions', user, { withCredentials: true })
			.then((response) => {
				console.log(response.data);
			}).catch((error) => {
	          	console.log(error);
			})
			navigate('/', { replace: true });
	}

	return (

		<React.Fragment>	
			<div className="classPage">
				<h1 className="titleForm">Login</h1>
				<div className = "formBox">

			  		<form onSubmit={handleSubmit} >

			  			<br />
			  			<div className="row">
			  				<div className="laIn-01">
			  					<label>Email: </label>
			  				</div>
			  				<div className="laIn-02">
		  						<input 
			  						type="email" 
			  						name="email"
			  						required
			  						onChange={handleChange} 
			  						value={user.email} 
			  						placeholder="Email" 
		  						/>
		  					</div>
				  		</div>
			  			<br />

			  			<div className="row">
			  				<div className="laIn-01">
			  					<label>password: </label>
			  				</div>
			  				<div className="laIn-02">
			  					<input 
				  					type="password" 
				  					name="password"
				  					required
				  					onChange={handleChange} 
				  					value={user.password} 
				  					placeholder="Password" 
			  					/>
			  				</div>
			  			</div>
			  			
			  			<br />
			  			<br />

			  			<div className="row">
			  				<button type="submit">Iniciar session</button>
			  			</div>

			  		</form>

				</div>
			</div>

			<div className="homeLink">
				Crear cuenta? <Link to="/registrations">Registrarse</Link>
			</div>

		</React.Fragment>
		);
	}

export default Login
