import './Sidebar.css'
import {Link} from 'react-router-dom'
import { Home,PersonPin,LocalHospital} from '@material-ui/icons'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__container">
        <Link className="sidebar__links" to="/">
        <li className="sidebar__item">
          <Home/>
          Home
        </li>
        </Link>
        <Link className="sidebar__links" to="/addpro">
        <li className="sidebar__item">
          <LocalHospital/>
          View Product
        </li>
        </Link>

        <Link className="sidebar__links" to="/addpro">
        <li className="sidebar__item">
          <PersonPin/>
         Users
        </li>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar