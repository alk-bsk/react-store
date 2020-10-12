import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignLeft,faAlignJustify,faSearch } from '@fortawesome/free-solid-svg-icons'
import {NavLink, useLocation} from 'react-router-dom';

function Header({toggled,setToggled,search,setSearch}){

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">

        <button type="button" id="sidebarCollapse" className="btn btn-style" onClick={()=>toggled===''?setToggled("active"):setToggled('')}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </button>
            {/* <div className="logo-image"></div> */}
            <NavLink to="/"><h3 className="ml-5">Product catalog</h3></NavLink>

            <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faAlignJustify} />
            </button>
           
            <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
            
             <ul className="nav navbar-nav ml-auto" >
             {useLocation().pathname.includes('item')?null:
              <li className="nav-item active">
              <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id=""><FontAwesomeIcon icon={faSearch} /></span>
              </div>
              <input type="text" placeholder="Search here" className="form-control" value={search} onChange={e=>setSearch(e.target.value.toLowerCase())} />
            </div>
              </li>
            
            }
             
            </ul> 
          </div>
          
        </div>
    </nav>
    );
}

export default React.memo(Header);