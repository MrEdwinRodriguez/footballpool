import { useState } from 'react';
import {
	Row,
	Col,
    Card,
   	CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
	Button, 
	ListGroup, ListGroupItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NucampLogo from '../logo.svg';
import BlueHelmet from '../app/assets/img/blue_helmet.png';
import RedHelmet from '../app/assets/img/red_helmet.png';
import Football from '../app/assets/img/football.png';


import React from 'react'

const Dashboard = () => {
  return (
	<div >
		<Row>
			{/* <Col md="3 "><img src={Football} alt='nucamp logo' className='float-start dashboard-football right ' /></Col> */}
			<Col md="3"></Col>
			<Col md="6"><h1 className='font-size-100 center'>Play Book Picks</h1></Col>
			<Col md="3"></Col>
			{/* <Col md="3"><img src={Football} alt='nucamp logo' className='float-start dashboard-football' /></Col> */}
		</Row>
		<Row>
			<Col md="3 "><img src={BlueHelmet} alt='nucamp logo' className='float-start dashboard-helmet ' /></Col>
			<Col md="3" className="margin-top-70">
				<NavLink className='nav-link' to='/create'>
					<Card style={{margin: "auto"}}>
						<CardBody>
							<CardTitle tag="h5" className="center cw">
								<i className="fa fa-plus cw" aria-hidden="true"></i> Create Pool
							</CardTitle>
						</CardBody>
					</Card>
				</NavLink>
			</Col>
			<Col md="3" className="margin-top-70">
				<NavLink className='nav-link' to='/joinpool'>
					<Card style={{margin: "auto"}}>
						<CardBody>
							<CardTitle tag="h5" className="center cw">
							<i className="fa fa-hand-o-right" aria-hidden="true"></i> Join Pool
							</CardTitle>
						</CardBody>
					</Card>
				</NavLink>
			</Col>
			<Col md="3"><img src={RedHelmet} alt='nucamp logo' className='float-start dashboard-helmet' /></Col>
		</Row>
		<Row>
			<Col sm="3"></Col>
			<Col sm="6">
				<NavLink className='nav-link' to='/mypools'>
					<Card>
						<CardBody>
							<CardTitle tag="h5" className="center cw">
							<i class="fa fa-th-list" aria-hidden="true"></i> My Pools
							</CardTitle>
						</CardBody>
					</Card>
				</NavLink>
			
			</Col>
			<Col sm="3"></Col>
		</Row>
		{/* <Card style={{margin: "auto", width: "50%"}}>
			<CardBody>
			<img className='wide' alt="Sample" src="https://cdn.fantasypros.com/wp-content/images/full_132220/716x326.jpg"/>
				<CardTitle tag="h5">
					Welcome to My Office Pool
				</CardTitle>
				<CardSubtitle
				className="mb-2 text-muted"
				tag="h6"
				>Your Office Football Pool Home
				</CardSubtitle>
				<CardText>
					<ListGroup>
						<ListGroupItem>
							<NavLink className='nav-link' to='/footballpool'>
								Football Pool (Traditional)
							</NavLink>
						</ListGroupItem>
						<ListGroupItem>
							<NavLink className='nav-link' to='/footballpoolweighted'>
								Football Pool (weighted)
							</NavLink>
						</ListGroupItem>
						<ListGroupItem className='padl30'>
							Playoff Football Pool (COMING SOON)
						</ListGroupItem>
						<ListGroupItem className='padl30'>
							Super Bowl Squares (COMING SOON)
						</ListGroupItem>
					</ListGroup>
				</CardText>
			</CardBody>
		</Card> */}
	</div>
  )
}

export default Dashboard
