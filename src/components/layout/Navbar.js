import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="Main navigation">
            <div className="navbar-container">
                <NavLink
                    to="/"
                    className="navbar-brand"
                    aria-label="Event Planner - Go to home"
                >
                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />

                    <h1>Event Planner</h1>
                </NavLink>

                <div className="navbar-nav" role="menubar">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        role="menuitem"
                        end>
                        <span>Event List</span>
                    </NavLink>

                    <NavLink
                        to="/create-event"
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        role="menuitem">
                        <span>Create Event</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
