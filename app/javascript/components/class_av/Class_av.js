import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Class_av() {
	const [ class_avs, setClass_avs ] = useState([])
	

	useEffect(() => {

		axios.get('/api/v1/class_avs')
		.then( res => {
			setClass_avs(res.data)
		})
		.catch( res => console.log(res) )
	}, [class_avs.length])

	const csrfToken = document.querySelector('[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

	function ClassBooking(clas, e) { 
		axios.post('/api/v1/bookings', clas)
			.then((response) => {
				console.log(response.data);
			}).catch((error) => {
	          	console.log(error);
			});
	}
	
	function ClassDelete(id, e) {
		axios.delete(`/api/v1/class_avs/${id}`)
		.then((response) => {
				console.log(response.data);
			}).catch((error) => {
	          	console.log(error);
			});
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
						{class_avs.map(clas => (
							<tr key={clas.id} className="fileFill">
								<td>{clas.name}</td>
								<td>{clas.date}</td>
								<td>{clas.quotas}</td>
								<td><button onClick={(e) => ClassBooking(clas, e)}>Reservar</button></td>
								<td><button onClick={(e) => ClassDelete(clas.id, e)}>Eliminar</button></td>
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
