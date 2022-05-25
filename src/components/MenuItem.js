import React, { useState } from 'react'
import { AiFillDashboard } from "react-icons/ai"
import { BiSearchAlt2, BiNews, BiPen } from "react-icons/bi";

const MenuItem = (props) => {
    const { name, subMenus } = props;
    const [expand, setExpand ] = useState(false);

  return (
    <li>
        <a onClick={() => setExpand(!expand)} className="menu-item">
            <div className="menu-icon">
                 <i><BiNews/></i>
            </div>
            <span>{name}</span> 
        </a>
    { subMenus && subMenus.length > 0 ? ( 
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
            {subMenus.map((menu, index) => (
                <li key={index}>
                    <a>{menu.name}</a>
                </li>
            ))}
        </ul> 
    ) : null }
    </li>
  );
};

export default MenuItem