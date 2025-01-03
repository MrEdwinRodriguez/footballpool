import CommonTable from "../common/CommonTable";
import { NavLink } from 'react-router-dom';


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
    
  return (
    <div>
      <CommonTable rows={rows} tableHeaders={tableHeaders}></CommonTable>
    </div>
  )
}

export default MyPools
