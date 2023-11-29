import { Col, Row, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DropdownItemComponent from './DropdownItemComponent';
import { getFullWeekSchedule } from './weeklyPoolSlice';

function WeeklyPoolMain() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [caretDirection, updateCaretDirection] = useState('down');
	const [currentWeek, updateCurrentWeek] = useState('Select Week');
	const weekArray  = Array(18).fill().map((v,i)=>i+1);
	const dispatch = useDispatch();
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

	useEffect(() => {
		dispatch(getFullWeekSchedule(currentWeek))
	}, [currentWeek])

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
		</>
	)
}

export default WeeklyPoolMain
