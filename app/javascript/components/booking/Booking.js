import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Booking() {
	const [ bookings, setBookings ] = useState([])
	
	useEffect(() => {

		axios.get('/api/v1/bookings')
		.then( res => {
			setBookings(res.data)
		})
		.catch( res => console.log(res) )
	}, [bookings.length])

	const csrfToken = document.querySelector('[name="csrf-token"]').content;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

	function DeleteBoo(id, e) {
		axios.delete(`/api/v1/bookings/${id}`)
		.then((response) => {
				console.log(response.data);
			}).catch((error) => {
	          	console.log(error);
			});
	}

	return(	
		<React.Fragment>
			<div>
				<h1>Clases Reservadas</h1>
				
				<table>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Fecha</th>
						</tr>
					</thead>
					<tbody>
						{bookings.map(boo => (
							<tr key={boo.id}>
								<td>{boo.name}</td>
								<td>{boo.date}</td>
								<td><button onClick={(e) => DeleteBoo(boo.id, e)}>Eliminar</button></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div>
				<Link to="/">Home</Link>
			</div>

		</React.Fragment>
		);
	}

export default Booking
