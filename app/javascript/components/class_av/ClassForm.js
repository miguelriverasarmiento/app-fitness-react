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
			<div className="classPage">
				<h1 className="titleForm">Crear clase fitness</h1>
				<div className = "formBox">
			  		<form onSubmit={handleSubmit} >
			  			<div className="row">
			  				<div className="laIn-01">
			  					<label>Nombre de clase: </label>
			  				</div>
			  				<div className="laIn-02">
                        		<input type="text" name='name' onChange={handleChange} value={class_av.name} placeholder="Nombre de la clase" />
                        	</div>			  				
				  		</div>
			  			<br />
			  			<div className="row">
			  				<div className="laIn-01">
			  					<label>Fecha de inicio: </label>
			  				</div>
			  				<div className="laIn-02">
		  						<input type="date" name='date' onChange={handleChange} value={class_av.date} placeholder="Fecha de inicio de clase" />
		  					</div>
				  		</div>
			  			<br />
			  			<div className="row">
			  				<div className="laIn-01">
			  					<label> Reservas disponibles: </label>
			  				</div>
			  				<div className="laIn-02">
			  					<input type="number" name='quotas' onChange={handleChange} value={class_av.quotas} placeholder="Cupos de clase" />
			  				</div>
			  			</div>
			  			<br />
			  			<br />
			  			<div className="row">
			  			<button type="submit">Crear clase</button>
			  			</div>
			  		</form>
				</div>
			</div>

			<div className="homeLink">
				<Link to="/class_avs">Volver</Link>
			</div>

		</React.Fragment>
		);
	}

export default ClassForm
