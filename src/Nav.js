import React from 'react'
import './Nav.css'
import logo from './logo.png';
import SearchIcon from '@material-ui/icons/Search'
import { Link } from 'react-router-dom'

function Nav() {

    return (
        <nav className="nav">
            <Link to="/">
                <img className="nav__logo" src={logo} alt="Logo" />
            </Link>
            <div className="nav__search">
                <input type="text" className="nav__searchInput" />
                <SearchIcon className="nav__searchIcon" />
            </div>
        </nav>



    )
}

export default Nav

