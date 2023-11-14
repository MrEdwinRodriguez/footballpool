import React from 'react';
import { Row, Col, Button} from 'reactstrap'

function Game({pickTeam, home, visitor}) {
	const handleClick = (e) => {
		console.log(e.target.getAttribute("data-team"))
		pickTeam()
	}
	return (
		<Row style={{"padding-top": "30px"}}>
			<Col xs="2" md="2"></Col>
			<Col xs="12" md="2">Sunday 12/12/2023</Col>
			<Col xs="6" md="3"><Button data-team={visitor} onClick={handleClick}>{visitor}</Button><span style={{"float": "right"}}>@</span></Col>
			<Col xs="6" md="3"><Button  data-team={home} onClick={handleClick}>{home}</Button></Col>
			<Col xs="12" md="2">Jets -4</Col>
		</Row>
  	)
}

export default Game
