
import { useParams } from 'react-router-dom';

const Pool = () => {

    const { id } = useParams();
  return (
    <div>
        Pool: {id}
    </div>
  )
}

export default Pool
