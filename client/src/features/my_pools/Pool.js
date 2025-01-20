
import { useParams } from 'react-router-dom';
import { Table, Row, Col } from 'reactstrap';
import PoolEntry from './PoolEntry';

const Pool = () => {
    const poolObj = {
        wins: 2,
        losses: 2,
		total: 8,
        standing: "21/40",
        status: "Active",
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
    }
    const { id } = useParams();
    return (
        <>
            {/* summary table */}
            <Row> 
                <Col  xs="2"></Col>
                <Col >
                    <Table bordered>
                        <thead>
                            <tr>
                            <th className='center'>
                                Wins
                            </th>
                            <th className='center'>
                                Loses
                            </th>
                            <th className='center'>
                                Remaining
                            </th>
                            <th className='center'>
                                Ranking
                            </th>
                            <th className='center'>
                                Status
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className='center'>
                                {poolObj.wins}
                            </td>
                            <th className='center'>
                                {poolObj.losses}
                            </th>
                            <td className='center'>
                                {(poolObj.picks.length) - poolObj.wins - poolObj.losses}
                            </td>
                            <td className='center'>
                                {poolObj.standing}
                            </td>
                            <td className='center'>
                                {poolObj.status} {/* Active/Eliminated */}
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col  xs="2"></Col>
            </Row>
            {/* End summary table */}

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* picks table */}

            <Row>
				<Col  xs="2"></Col>
                <Col >
					<PoolEntry entry={poolObj} myEntries={true} />
				</Col>
                <Col  xs="2"></Col>
            </Row>

        </>
    )
}

export default Pool
