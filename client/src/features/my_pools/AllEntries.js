import React from 'react';
import { Row, Col, Table } from "reactstrap";
import PoolEntry from './PoolEntry';

const AllEntries = () => {
	const entries = [{
        _id: 1, wins: 3, losses: 1, total: 8, standing: "6/40", status: "Active",
		user: {first_name: "Tom"},
        picks: [
            { away: "Giants", home: "Cowboys", outcome: "W", pick: "Giants" },
            { away: "Eagles", home: "Commanders", outcome: "L",  pick: "Eagles" },
            { away: "Bucs", home: "Saints", outcome: "W", pick: "Saints" },
            { away: "Falcons", home: "Panthers", outcome: "W", pick: "Falcons" },
            { away: "Lion", home: "Packers", outcome: "Pending", pick: "Packers" },
            { away: "Bears", home: "Vikings", outcome: "Pending", pick: "Bears" },
            { away: "Rams", home: "Seahawks", outcome: "Pending", pick: "Bears" },
            { away: "49ers", home: "Cardinals", outcome: "Pending", pick: "49ers" }
        ]
    },{
		_id: 2, wins: 2, losses: 2, total: 8, standing: "21/40", status: "Active",
		user: {first_name: "James"},
        picks: [
            { away: "Giants", home: "Cowboys", outcome: "W", pick: "Giants" },
            { away: "Eagles", home: "Commanders", outcome: "L",  pick: "Eagles" },
            { away: "Bucs", home: "Saints", outcome: "W", pick: "Saints" },
            { away: "Falcons", home: "Panthers", outcome: "L", pick: "Falcons" },
            { away: "Lion", home: "Packers", outcome: "Pending", pick: "Packers" },
            { away: "Bears", home: "Vikings", outcome: "Pending", pick: "Bears" },
            { away: "Rams", home: "Seahawks", outcome: "Pending", pick: "Bears" },
            { away: "49ers", home: "Cardinals", outcome: "Pending", pick: "49ers" }
        ]
    },{
		_id: 3, wins: 2, losses: 2, total: 8, standing: "21/40", status: "Active",
		user: {first_name: "Jane"},
        picks: [
            { away: "Giants", home: "Cowboys", outcome: "W", pick: "Giants" },
            { away: "Eagles", home: "Commanders", outcome: "L",  pick: "Eagles" },
            { away: "Bucs", home: "Saints", outcome: "W", pick: "Saints" },
            { away: "Falcons", home: "Panthers", outcome: "L", pick: "Falcons" },
            { away: "Lion", home: "Packers", outcome: "Pending", pick: "Packers" },
            { away: "Bears", home: "Vikings", outcome: "Pending", pick: "Bears" },
            { away: "Rams", home: "Seahawks", outcome: "Pending", pick: "Bears" },
            { away: "49ers", home: "Cardinals", outcome: "Pending", pick: "49ers" }
        ]
    },{
		_id: 4, wins: 2, losses: 2, total: 8, standing: "21/40", status: "Active",
		user: {first_name: "Sam"},
        picks: [
            { away: "Giants", home: "Cowboys", outcome: "W", pick: "Giants" },
            { away: "Eagles", home: "Commanders", outcome: "L",  pick: "Eagles" },
            { away: "Bucs", home: "Saints", outcome: "W", pick: "Saints" },
            { away: "Falcons", home: "Panthers", outcome: "L", pick: "Falcons" },
            { away: "Lion", home: "Packers", outcome: "Pending", pick: "Packers" },
            { away: "Bears", home: "Vikings", outcome: "Pending", pick: "Bears" },
            { away: "Rams", home: "Seahawks", outcome: "Pending", pick: "Bears" },
            { away: "49ers", home: "Cardinals", outcome: "Pending", pick: "49ers" }
        ]
    }]
	console.log('line 54')
	 return (
		<>
			<Row>
				{
					entries.map(entry => {
						return (
							<Col md="4">
								<PoolEntry entry={entry} />
							</Col>
						)
					})
				}

			</Row>
		 </>
	)

}

export default AllEntries
