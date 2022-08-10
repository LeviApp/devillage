import React from 'react'
import logo from '../assets/img/deVillageLogo.png'
import '../SCSS/Nav.scss'
function Nav() {
    return (
        <nav className='nav'>
            <img src={logo}></img>
            <section>
                {/* <NavLink activeClassName="selected" className='navlink' to="/quotes">
                    View Quotes
                </NavLink>
                <NavLink activeClassName="selected" className='navlink' to="/new">
                    Add Quote
                </NavLink>
                {/* <Tabs>
                    <Tab id="tab-1" to="/quotes" label="View Quotes"></Tab>
                    <Tab id="tab-2" to="/new" label="Add Quote"></Tab>
                </Tabs> */}
            </section> 
        </nav>
    )
}

export default Nav
