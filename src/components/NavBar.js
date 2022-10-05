import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='nav'style={{display: 'flex',justifyContent: 'space-evenly'}}>
            <Link to='/'>Home</Link>
            <Link to='/parks'>Parks</Link>
        </nav>
    )
}

export default NavBar