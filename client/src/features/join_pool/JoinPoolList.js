import { NavLink } from 'react-router-dom';
import { Table, Row, Col } from 'reactstrap';

const JoinPoolList = () => {
    const tableHeaders = ["#", "Name", "League", "Week", "Entry", "Contestants", "Pool Total", "Deadline"];
    const rows = [
		{
			_id: 1,
			name: "My League",
			league: "NFL", 
			week: "Week 1",
			entry: "$5",
			contestants: "35",
			pool_total: "$175",
			deadline: "09/17/2025"
		},
		{
			_id: 2,
			name: "My League",
			league: "NFL", 
			week: "Week 2",
			entry: "$5",
			contestants: "20",
			pool_total: "$100",
			deadline: "09/24/2025"
		},
		{
			_id: 3,
			name: "My League",
			league: "NFL", 
			week: "Week 3",
			entry: "$5",
			contestants: "20",
			pool_total: "$100",
			deadline: "10/01/2025"
		}
	]
	const headerHtml =  (
		<tr>
			{tableHeaders.map((item, index) => (
				<th key={index}>{item}</th>
			))};
		</tr>
	);
	if (rows && rows.length > 0) {

		return (
			<Table responsive>
				<thead>{headerHtml}</thead>
				<tbody>
					{	
						rows.map(row => {
							return (
								<tr>
									<th>
										{row._id}
									</th>
									<td>
										<NavLink className='nav-link' to={`/join/${row._id}`}>{row.name}</NavLink>
									</td>
									<td>
										{row.league}
									</td>
									<td>
										{row.week}
									</td>
									<td>
										{row.entry}
									</td>
									<td>
										{row.contestants}
									</td>
									<td>
										{row.pool_total}
									</td>
									<td>
										{row.deadline ? row.deadline : ""}
									</td>
								</tr>
							)
						})
					}
				</tbody>
			</Table>
		)
	} else {
		return (
			<Row>
				<Col sm="3"></Col>
				<Col className="center">
					<h1>There Are No Pools To Join</h1>
					<NavLink className='nav-link' to={`/create`}>Create Pool</NavLink>
				</Col>
				<Col sm="3"></Col>
			</Row>
		)
	}
}

export default JoinPoolList
