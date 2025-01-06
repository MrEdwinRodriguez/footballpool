import { useState} from 'react';
import Matchup from './Matchup';
import { Button, Col, Row} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';


const MakePicks = () => {
	let [picks, updatePicks] = useState({});
	let [buttonDisabled, toggle] = useState(true);
	let [saveButtonDisabled, toggleSaveButton] = useState(true);

	const matchups = [
		{
			_id: 1,
			away: "Giants",
			home: "Jets",
			time: "1:00 pm",
			date: "Sunday 09/18/2025"
		},
		{
			_id: 2,
			away: "Bucs",
			home: "Falcons",
			time: "1:00 pm",
			date: "Sunday 09/18/2025"
		},
		{
			_id: 3,
			away: "Cheifs",
			home: "Chargers",
			time: "1:00 pm",
			date: "Sunday 09/18/2025"
		},
		{
			_id: 4,
			away: "Saints",
			home: "Dolphins",
			time: "1:00 pm",
			date: "Sunday 09/18/2025"
		},
	]
	const makeSelection = (id, selection) => {
		console.log('line 36', id, selection)
		toggleSaveButton(false);
		const newPicks = {
			...picks
		};
		newPicks[id] = selection;
		updatePicks(newPicks);
		if (Object.keys(newPicks).length === matchups.length) toggle(!buttonDisabled);
	};

	const submitPicks = () => {
		console.log(picks)
		console.log("Submitting picks");
		toast("Your picks have been Submitted..");
	};
	const savePicks = () => {
		console.log(picks)
		console.log("savings picks");
		toast("Your picks have been saved.");
	};


	return (
		<>
			{<ToastContainer/>}
			{
				matchups.map(match => {
					return <Matchup match={match} makeSelection={makeSelection} />
				})
			}

			<Row>

				<Col className="center">
					<Button color="primary" onClick={savePicks} disabled={saveButtonDisabled} >Save Picks</Button>
				
				</Col>
				<Col className="center">
					
					<Button color="primary" onClick={submitPicks} disabled={buttonDisabled} >Submit Picks</Button>
				</Col>


			</Row>
		</>
	)
}

export default MakePicks
