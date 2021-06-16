import React from 'react'
import "./Css/SideBarOption.css"

function SideBarOption({ u_name,title,Icon}) {
    return (
        <div>
            <div className="sidebar__uname">
                <h5>{u_name}</h5>
            </div>
            <div className="sidebar__option">
                {Icon && <Icon className="sidebar__icon" />}
                {Icon ? <h5>{title}</h5> : null}
            </div>
        </div>
    )
}

export default SideBarOption
