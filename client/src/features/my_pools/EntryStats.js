import React from 'react';
import { Table, Row, Col } from "reactstrap";

function EntryStats({entry}) {
	return (
		<>
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
                                {entry.wins}
                            </td>
                            <th className='center'>
                                {entry.losses}
                            </th>
                            <td className='center'>
                                {(entry.picks.length) - entry.wins - entry.losses}
                            </td>
                            <td className='center'>
                                {entry.standing}
                            </td>
                            <td className='center'>
                                {entry.status} {/* Active/Eliminated */}
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col  xs="2"></Col>
            </Row>
		</>
	)
}

export default EntryStats
