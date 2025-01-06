import React from 'react'
import { useState} from 'react';
import { Table, Button, Row, Col } from 'reactstrap'

function Matchup({match, makeSelection}) {
	console.log('line 5', match)
	const pickSelected = (event) => {
		console.log("id", event.target.name, "value:", event.target.value);
		makeSelection(event.target.name, event.target.value);
	};

	return (
		<>
			<Row className="mb-10">
				<div class="btn-group" data-toggle="buttons">
					<Col xs="4" className="center">
						<input type="radio" name={`${match._id}`} id={`${match.away}`} value={`${match.away}`} onChange={pickSelected}/>
						<label for={`${match.away}`} class="btn btn-default wide"> {`${match.away}`} </label>
					</Col>
					<Col xs="1" className="center">
						@
					</Col>
					<Col xs="4" className="center">
						<input type="radio"  name={`${match._id}`} id={`${match.home}`} value={`${match.home}`} onChange={pickSelected} />
						<label for={`${match.home}`} class="btn btn-defaul wide"> {`${match.home}`} </label>
					</Col>
				</div>
			</Row>
		</>
	)
}

export default Matchup
