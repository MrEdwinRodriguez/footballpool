import CommonTable from "../common/CommonTable";
import { NavLink } from 'react-router-dom';
import { Row, Col } from "reactstrap";


function MyPools() {
    const tableHeaders = ["#", "Name", "League", "Week", "Entry", "Contestants", "Pool Total", "Outcome"];
    const rows = [
		{
			_id: 1,
			name: "My League",
			league: "NFL", 
			week: "Week 1",
			entry: "$5",
			contestants: "35",
			pool_total: "$175",
			outcome: 1
		},
		{
			_id: 2,
			name: "My League",
			league: "NFL", 
			week: "Week 2",
			entry: "$5",
			contestants: "20",
			pool_total: "$100",
			outcome: 8
		},
		{
			_id: 3,
			name: "My League",
			league: "NFL", 
			week: "Week 3",
			entry: "$5",
			contestants: "20",
			pool_total: "$100",
			outcome: "Pending"
		}
	]
    
	if (rows && rows.length > 0) {
		return (
		  <div>
			<CommonTable rows={rows} tableHeaders={tableHeaders}></CommonTable>
		  </div>
		)
	} else {
		return (
			<Row>
				<Col sm="3"></Col>
				<Col className="center">
					<h1>You Have Not Joined Any Pools.</h1>
					<Row>
						<Col><NavLink className='nav-link' to={`/create`}>Create Pool</NavLink></Col>
						<Col><NavLink className='nav-link' to={`/joinpool`}>Join Pool</NavLink></Col>
					</Row>
					
					
				</Col>
				<Col sm="3"></Col>
			</Row>
		)
	}
}

export default MyPools
