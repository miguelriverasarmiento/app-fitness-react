import React, { useState, useEffect } from 'react'
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

	const list = bookings.map( item => {
		return (<li key={item.id}>{item.clas_id}</li>)
	})

	return(
		<div>
			<div>
				<h1>Clases Reservadas</h1>
			</div>
			<div>
				<ul>{list}</ul>
			</div>
		</div>
		)
	}

export default Booking
