import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ClassForm = (props) => {

	let navigate = useNavigate();
	
    const [class_av, setClass_av] = useState({name: '', date: '', quotas: ''});

    const handleChange = (e) => {
    	e.preventDefault()

	    	setClass_av({ ...class_av, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
    	e.preventDefault()
    	
    	const csrfToken = document.querySelector('[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken


		axios.post('/api/v1/class_avs', class_av)
			.then((response) => {
				console.log(response.data);
			}).catch((error) => {
	          	console.log(error);
			});
			navigate('/class_avs');
	}

		return (

		<React.Fragment>	
			<div>
				<h1>Crear clase fitness</h1>
				<div>
			  		<form onSubmit={handleSubmit} >
			  			<label>Nombre de clase: </label>
                        <input type="text" name='name' onChange={handleChange} value={class_av.name} placeholder="Nombre de la clase" />			  				
				  	
			  			<br />
			  			<label>Fecha de inicio: </label>
		  				<input type="date" name='date' onChange={handleChange} value={class_av.date} placeholder="Fecha de inicio de clase" />
				  	
			  			<br />
			  			<label> Reservas disponibles: </label>
			  			<input type="number" name='quotas' onChange={handleChange} value={class_av.quotas} placeholder="Cupos de clase" />
			  		
			  			<br />
			  			<br />
			  			<button type="submit">Crear clase</button>
			  		</form>
				</div>
			</div>

			<div>
				<Link to="/class_avs">Volver</Link>
			</div>

		</React.Fragment>
		);
	}

export default ClassForm
