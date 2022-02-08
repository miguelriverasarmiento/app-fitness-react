import React, { Component } from 'react'
import axios from 'axios'

export default class ClassForm extends Component {
    constructor(props) {
    	super(props)
    	this.state = {

    		name: '',
    		date: '',
    		quotas: ''
    	};
    	
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
    	this.setState({ 
    		[e.target.name]: e.target.value
    	})
    }
    handleSubmit(e) {
    	e.preventDefault()

    	const csrfToken = document.querySelector('[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    	const lesson = {
    		name: this.state.name,
    		date: this.state.date,
    		quotas: this.state.quotas
    	};

		axios.post('/api/v1/class_avs', lesson)
			.then((response) => {
				console.log(response.data);
			}).catch((error) => {
	          	console.log(error);
			});
		
	}

	render() {
		return (
			<div>
				<h1>Crear clase fitness</h1>
				<div>
			  		<form onSubmit={this.handleSubmit} >
			  			<label>Nombre de clase: </label>
                        <input type="text" name='name' value={this.state.name} onChange={this.handleChange} placeholder="Nombre de la clase" />			  				
				  		
			  			<br />
			  			<label>Fecha de inicio: </label>
		  				<input type="date" name='date' value={this.state.date} onChange={this.handleChange} placeholder="Fecha de inicio de clase" />
				  			
			  			<br />
			  			<label> Reservas disponibles: </label>
			  			<input type="number" name='quotas' value={this.state.quotas} onChange={this.handleChange} placeholder="Cupos de clase" />
			  		
			  			<br />
			  			<br />
			  			<button type="submit">Crear clase</button>
			  		</form>
				</div>
			</div>
		);
	}
}
