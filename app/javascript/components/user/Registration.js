import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Registration = (props) => {

	const [user, setUser] = useState({name: "", email: "", password: "", password_confirmation: ""});

	let navigate = useNavigate();

	const handleChange = (e) => {
    	e.preventDefault()

	    	setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
    	e.preventDefault()
    	
    	const csrfToken = document.querySelector('[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

		axios.post('/api/v1/registrations', user, { withCredentials: true })
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
				<h1 className="titleForm">Registrarse</h1>
				<div className = "formBox">

			  		<form onSubmit={handleSubmit} >

			  			<div className="row">
			  				<div className="laIn-01">
			  					<label>Nombre: </label>
			  				</div>
			  				<div className="laIn-02">
                        		<input 
	                        		type="text" 
	                        		name="name"
	                           		onChange={handleChange} 
	                        		value={user.name} 
	                        		placeholder="Nombre completo"
	                        		required
                        		/>
                        	</div>			  				
				  		</div>
			  			<br />

			  			<div className="row">
			  				<div className="laIn-01">
			  					<label>Email: </label>
			  				</div>
			  				<div className="laIn-02">
		  						<input 
			  						type="email" 
			  						name="email"
			  						onChange={handleChange} 
			  						value={user.email} 
			  						placeholder="Email"
			  						required
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
				  					onChange={handleChange} 
				  					value={user.password} 
				  					placeholder="Password"
				  					required
			  					/>
			  				</div>
			  			</div>
			  			<br />

			  			<div className="row">
			  				<div className="laIn-01">
			  					<label>Confirmar password: </label>
			  				</div>
			  				<div className="laIn-02">
			  					<input 
				  					type="password" 
				  					name="password_confirmation"
				  					onChange={handleChange} 
				  					value={user.password_confirmation} 
				  					placeholder="Confirmar password"
				  					required 
			  					/>
			  				</div>
			  			</div>
			  			<br />
			  			<br />

			  			<div className="row">
			  				<button type="submit">Registrar</button>
			  			</div>

			  		</form>

				</div>
			</div>

			<div className="homeLink">
				Tiene una cuenta? <Link to="/sessions">Login</Link>
			</div>

		</React.Fragment>
		);
	}

export default Registration
