import React, {useState, useEffect} from 'react';
import { Col, Row, Button,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem} from 'reactstrap';
import Game from './Game';
const EliminatorMain = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [caretDirection, updateCaretDirection] = useState('down');
	const [currentWeek, updateCurrentWeek] = useState('Select Week')
	const toggle = () => {
		setDropdownOpen(!dropdownOpen);
		updateCaretDirection(dropdownOpen ? 'up': "down");
	};
	useEffect(()=> {
		updateCaretDirection(dropdownOpen ? 'up': "down");
	}, [dropdownOpen]);

	const selectWeek = (e) => {
		console.log(typeof e.target.value)
		updateCurrentWeek(`Week ${e.target.value}`);
	}
	const pickTeam = (e) => {
		console.log('called')
	};

  return (
	  <>
	   <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={caretDirection}>
			<DropdownToggle caret>{currentWeek}</DropdownToggle>
			<DropdownMenu >
			<DropdownItem value={1} onClick={selectWeek}>Week 1</DropdownItem>
			<DropdownItem value={2} onClick={selectWeek}>Week 2</DropdownItem>
			<DropdownItem value={3} onClick={selectWeek}>Week 3</DropdownItem>
			<DropdownItem value={4} onClick={selectWeek}>Week 4</DropdownItem>
			<DropdownItem value={5} onClick={selectWeek}>Week 5</DropdownItem>
			<DropdownItem value={6} onClick={selectWeek}>Week 6</DropdownItem>
			<DropdownItem value={7} onClick={selectWeek}>Week 7</DropdownItem>
			</DropdownMenu>
		</Dropdown>
		<Game pickTeam={pickTeam} home={"New York Giants"} visitor={"New York Giants"}/>
		<Game pickTeam={pickTeam} home={"Dallas Cowboys"} visitor={"Tampa Bay Bucs"}/>
		<Game pickTeam={pickTeam} home={"Philadelphia Eagles"} visitor={"New England Patriots"}/>
		{/* <Row style={{"padding-top": "30px"}}>
			<Col xs="2"></Col>
			<Col xs="2">Sunday 12/12/2023</Col>
			<Col xs="2"><Button data-team={'Giants'} onClick={pickTeam}>New York Giants </Button><span style={{"float": "right"}}>@</span></Col>
			<Col xs="2"><Button  data-team={'Jets'} onClick={pickTeam}>New York Jets</Button></Col>
			<Col xs="1">Jets -4</Col>
		</Row> */}
	</>
  )
}

export default EliminatorMain
