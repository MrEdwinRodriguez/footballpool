import { useSelector, useDispatch } from 'react-redux';
import {Link, } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, FormGroup, Label, Button, Table } from 'reactstrap';

const CommonTable = ({tableHeaders, rows}) => {
	const headerHtml =  (
		<tr>
			{tableHeaders.map((item, index) => (
				<th key={index}>{item}</th>
			))};
		</tr>
	);
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
								{row.is_submitted ? <Link className='nav-link' to={`/mypool/${row._id}`}>{row.name}</Link> : <Link className='nav-link' to={`/makepicks/${row._id}`}>{row.name}</Link>}
				
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
								{row.is_submitted ? <Link className='nav-link' to={`/mypool/entries/${row._id}`}>{row.contestants}</Link> : <Link className='nav-link' to={`/makepicks/${row._id}`}>{row.contestants}</Link>}
							</td>
							<td>
								{row.pool_total}
							</td>
							<td>
								{row.outcome ? row.outcome : (row.deadline ? row.deadline : "")}
							</td>
						</tr>
					)
				})
			}
		</tbody>
	</Table>
  )
}

export default CommonTable
