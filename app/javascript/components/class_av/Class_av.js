import React, { useState, useEffect } from 'react'
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

	const list = class_avs.map( item => {
		return (<li key={item.id}>{item.name}</li>)
	})

	return(
			<div>
				<h1>Clases Disponibles</h1>
				
				<ul>{list}</ul>
			</div>
		);
	}

export default Class_av
