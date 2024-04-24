import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <div className='container '>
                <div className='d-flex justify-content-between align-item-center'>
                    <div className='logo'>
                        <Link to='/' className='brand' >Sathishkumar</Link>
                    </div>

                    <nav className='nav nav-pills'>
                        <NavLink to='/'
                        className={(navData) => navData.isActive ? 'nav-link active' :'nav-link'}
                         >Home</NavLink>
                        <NavLink to='about' className={(navData) => navData.isActive ? 'nav-link active' :'nav-link'} >About</NavLink>
                        <NavLink className={(navData) => navData.isActive ? 'nav-link active' :'nav-link'} to='products'>Products</NavLink>
                        <NavLink className={(navData) => navData.isActive ? 'nav-link active' :'nav-link'} to='posts'>Posts</NavLink>

                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header


