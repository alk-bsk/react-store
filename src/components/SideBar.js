import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLaptop,  faMobile,  faStore } from '@fortawesome/free-solid-svg-icons'
import {NavLink,useLocation} from 'react-router-dom';

export default function SideBar({toggled}){

    const note="All the information ..."

    return(
        <nav id="sidebar" className={toggled}>
            <div className="sidebar-header">
                <h3><span>ABC Store</span></h3>
                <strong>ABC</strong>
            </div>

            <ul className="list-unstyled components">
            <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="true" className="dropdown-toggle">Category</a>
                <ul className="collapse list-unstyled show" id="homeSubmenu">
                    <li >
                        <NavLink to="/" className={useLocation().pathname==='/'?'sel':''}  ><FontAwesomeIcon  className="mr-2" icon={faStore} /><span>All</span></NavLink>
                    </li>
                    <li >
                        <NavLink to="/phone" className={useLocation().pathname==='/phone'?'sel':''}  ><FontAwesomeIcon  className="mr-2 ml-1" icon={faMobile} /><span> Phone</span></NavLink>
                    </li>
                    <li >
                        <NavLink to="/laptop" className={useLocation().pathname==='/laptop'?'sel':''}><FontAwesomeIcon  className="mr-1" icon={faLaptop} /><span>Laptop</span></NavLink>
                    </li>
                </ul>
            </li>
            </ul>

           
            <ul className="list-unstyled CTAs" style={{marginTop: '73%'}}>
                
                <li style={{overflowWrap: 'anywhere'}}>
                 <span><h6>Note:</h6><i>{note}</i></span>
                </li>
               
            </ul>
        </nav>
    );
}