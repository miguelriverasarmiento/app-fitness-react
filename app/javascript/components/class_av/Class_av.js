import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Class_av() {

	const [ class_avs, setClass_avs ] = useState([])
	const [ class_av, setClass_av ] = useState({name: '', date: '', quotas: ''});
	
	useEffect(() => {

			axios.get('/api/v1/class_avs')
			.then( res => {
				setClass_avs(res.data)
			})
			.catch( res => console.log(res) )
	}, [class_avs.length])

		const csrfToken = document.querySelector('[name="csrf-token"]').content;
	        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

	    let navigate = useNavigate();

	function ClassBooking(class_av, e) {

		let quotas = class_av.quotas

			if(quotas>=1){
				
				let quo = quotas -= 1;
				let id = class_av.id;
				const updateClas = { name: class_av.name, date: class_av.date, quotas: quo }
				
				axios.put(`/api/v1/class_avs/${id}`, updateClas)
				.then((res) => {
					console.log(res.data)
				})
				.catch( res => console.log(res))
			}else{
			    window.alert('Los cupos para esta clase se han acabado');
				return;
				}
			
			axios.post('/api/v1/bookings', class_av)
				.then((response) => {
					console.log(response.data);
				}).catch( res => console.log(res))

		navigate('/bookings');

		}

	function ClassDelete(id, e) {
		axios.delete(`/api/v1/class_avs/${id}`)
		.then((response) => {
               const class_avsList = class_avs.filter(class_av => class_av.id !== id);
               setClass_avs(class_avsList);

           }).catch((error) => {
               console.log(error.response.data)
           });
		}

	function sortClas(){
    	return class_avs.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
    	}

	return(

		<React.Fragment>
			<div className="classPage">
				<h1 className="classTitle">Clases Disponibles</h1>

				<table>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Fecha</th>
							<th>Cupos</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{sortClas().map(class_av => (
							<tr key={class_av.id} className="fileFill">
								<td>{class_av.name}</td>
								<td>{class_av.date}</td>
								<td>{class_av.quotas}</td>
								<td><button onClick={(e) => ClassBooking(class_av, e)}>Reservar</button></td>
								<td><button onClick={(e) => ClassDelete(class_av.id, e)}>Eliminar</button></td>
							</tr>
						))}
					</tbody>
				</table>

			</div>
			
			<div className="homeLink">
				<Link to="/">Home</Link>
			</div>

		</React.Fragment>

		);

	}

export default Class_av
