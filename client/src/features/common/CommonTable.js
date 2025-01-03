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
								<Link className='nav-link' to={`/mypool/${row._id}`}>{row.name}</Link>
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
