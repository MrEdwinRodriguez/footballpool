import React from 'react';
import { Table, Row, Col } from 'reactstrap';
import EntryStats from './EntryStats';

function PoolEntry({entry, myEntries}) {

  	return (
		<>
			{entry.user && entry.user.first_name ? <h4 className='center'>{ entry.user.first_name}</h4> : <h1 className='center'>My Picks</h1>}
            { !myEntries ? <EntryStats entry={entry}/> : "" }
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
                            entry.picks.map(pick => {
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
		</>
  	)
}

export default PoolEntry
