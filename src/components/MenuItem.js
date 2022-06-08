import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai"
import { BiSearchAlt2, BiNews, BiPen } from "react-icons/bi";

const MenuItem = (props) => {
    const { name, subMenus, iconName, onClick, to, exact } = props;
    const [expand, setExpand ] = useState(false);

  return (
    <li onClick={props.onClick}>
        <NavLink 
        to={to}
        onClick={() => setExpand(!expand)} 
        className="menu-item">
            <div className="menu-icon">
                 <i class={iconName}></i>
            </div>
            <span>{name}</span> 
        </NavLink>
    { subMenus && subMenus.length > 0 ? ( 
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
            {subMenus.map((menu, index) => (
                <li key={index}>
                    <NavLink to={menu.to}>{menu.name}</NavLink>
                </li>
            ))}
        </ul> 
    ) : null }
    </li>
  );
};

export default MenuItem