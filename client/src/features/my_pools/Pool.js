
import { useParams } from 'react-router-dom';
import { Table, Row, Col } from 'reactstrap';

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
            Pool: {id}
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
                <Col>
                <h1 className='center'>My Picks</h1>
                    <Table >
                        <thead>
                            <tr>
                            <th>
                                Away Team
                            </th>
                            <th className='center'>
                                vs
                            </th>
                            <th>
                                Home Team
                            </th>
                            <th className='center'>
                                Outcome
                            </th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                poolObj.picks.map(pick => {
									let status = null;
									if (pick.outcome === "L" || pick.outcome === "W") status = pick.outcome;
                                    return (
                                        <tr className={pick.outcome === "W" ? "table-success" : ""}>
                                            <th>
                                                {pick.away}
                                            </th>
                                            <td className='center'>@</td>
                                            <td>
                                                {pick.home}
                                            </td>

											<td className='center'>
												{status && pick.outcome === "L" ? <i class="fa fa-times wrong" aria-hidden="true"></i> : ""}
												{status && pick.outcome === "W" ? <i class="fa fa-check" aria-hidden="true"></i> : ""}
												{!status ? "Pending" : ""}
											</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col  xs="2"></Col>
            </Row>

        </>
    )
}

export default Pool
