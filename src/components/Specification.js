import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryFull, faCalendarAlt, faCamera, faMobileAlt, faTabletAlt, faServer, faMicrochip, faSimCard, faWifi, faMagic, faDesktop, faHdd, faLaptopCode, faLaptop, faBalanceScale } from '@fortawesome/free-solid-svg-icons'

function Specification({ spec,cat }) {
    let speckey = Object.keys(spec);
    let icons = { "Connectivity": faWifi, "Design": faMagic, 
    "Released": faCalendarAlt, "Battery": faBatteryFull,"Operating system":faLaptopCode,
     "Camera": faCamera, "OS": faMobileAlt, "Display": faTabletAlt, 
     "Storage": faServer, "Hardware": faMicrochip, "Cellular": faSimCard,
     "Display size/resolution":faDesktop, "Networking":faWifi, "PC Memory":faHdd,
     "PC CPU":faMicrochip,"Graphics":faLaptop,"Optical drive":faHdd,"Memory":faServer,"CPU":faMicrochip,"Weight":faBalanceScale
     }
    return (
        <div className="row">
            <div className="col-sm-6">

                {speckey.map((e, index) => {
                    if (index % 2 === 0) {
                        return <div className="card mt-2 mb-3" style={{ backgroundColor: "#e9eaea" }} key={index}>
                            <div className="card-body">
                                <h6 className="card-title"><FontAwesomeIcon icon={icons[e]} /> {e}</h6>
                                {e === "Released" || e === "OS" || cat==="Laptop" ? <ul><li>{spec[e]}</li></ul> : <ul>{Object.keys(spec[e]).map((el,index) => {
                                    if(spec[e][el]){
                                        return <li key={index}>
                                                 {el}: {spec[e][el]}
                                             </li>
                                    }else{
                                        return null
                                    }
                                    
                                })}</ul>}
                            </div>
                        </div>
                    }else{
                        return null
                    }
                })}

            </div>
            <div className="col-sm-6">
                {speckey.map((e, index) => {
                    if (index % 2 !== 0) {
                        return <div className="card mt-2 mb-3" style={{ backgroundColor: "#e9eaea" }} key={index}>
                            <div className="card-body">
                                <h6 className="card-title"><FontAwesomeIcon icon={icons[e]} /> {e}</h6>
                                {e === "Released" || e === "OS" || cat==="Laptop" ? <ul><li>{spec[e]}</li></ul> : <ul>{Object.keys(spec[e]).map((el,index) => {
                                    return <li key={index}>
                                        {el}: {spec[e][el]}
                                    </li>
                                })}</ul>}
                            </div>
                        </div>
                    }else{
                        return null
                    }
                })}
            </div>
        </div>
    );
}

export default React.memo(Specification);