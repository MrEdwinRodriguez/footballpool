import { useState } from 'react';
import {
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

import React from 'react'

const Dashboard = () => {
  return (
	<div >
		<Card style={{margin: "auto", width: "50%"}}>
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
		</Card>
	</div>
  )
}

export default Dashboard
