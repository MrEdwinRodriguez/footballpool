import React, {useState, useEffect} from 'react';
import { Col, Row, Button,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem} from 'reactstrap';
import Game from './Game';
import DropdownItemComponent from './DropdownItemComponent';
const EliminatorMain = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [caretDirection, updateCaretDirection] = useState('down');
	const [currentWeek, updateCurrentWeek] = useState('Select Week');
	const weekArray  = Array(18).fill().map((v,i)=>i+1);
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
			<DropdownMenu style={{"maxHeight": "200px", "overflow":"auto"}}>
				{weekArray.map(week => {
					console.log(week)
					return <DropdownItemComponent value={week} selectWeek={selectWeek} />
				})}
			</DropdownMenu>
		</Dropdown>
		{/* TODO:  iterate through matchups and return Game */}
		<Game pickTeam={pickTeam} home={"New York Giants"} visitor={"New York Giants"}/>
		<Game pickTeam={pickTeam} home={"Dallas Cowboys"} visitor={"Tampa Bay Bucs"}/>
		<Game pickTeam={pickTeam} home={"Philadelphia Eagles"} visitor={"New England Patriots"}/>

	</>
  )
}

export default EliminatorMain
