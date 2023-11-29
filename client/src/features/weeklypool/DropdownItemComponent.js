import React from 'react';
import { DropdownItem } from 'reactstrap';

function DropdownItemComponent({value, selectWeek}) {
  return (
<DropdownItem value={value} onClick={selectWeek}>Week {value}</DropdownItem>
  )
}

export default DropdownItemComponent;