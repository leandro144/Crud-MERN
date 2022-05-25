import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbaar.css"
import { BiSearchAlt2, BiNews, BiPen } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai"
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import logo from '../assets/logo.png';
import user from '../assets/user.jpg';
import MenuItem from "./MenuItem";

const menuItems = [
    {name : "Dashboard", to: "/"},
    {
        name: "Content",
        to: "/content",
        subMenus: [{ name: "Courses"}, { name: "Videos"}],
    },
    {name: "Design", to:"/design"},
];

const Navbaar = (props) => {

    const [inactive, setInactive] = useState(false);

    return (
       <>
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
                <div className="top-section">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div onClick= {() => {setInactive(!inactive);}} className="toggle-menu-btn">
                    {inactive ? (
                       <i>< BsFillArrowRightSquareFill /></i>
                    ) : (
                        <i>< BsFillArrowLeftSquareFill /></i>
                    )}    
                    </div>

                    <div className="search-controller">
                        <button className="search-btn">
                            <i>< BiSearchAlt2 /></i>
                        </button>
                        <input type="search" placeholder="Faça uma busca" />
                    </div>
                </div>

                <div className="divider"></div>
                
                <div className="main-menu">
                    <ul>
                        {menuItems.map((menuItem, index) => (
                            <MenuItem 
                            key={index}
                            name={menuItem.name}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus || []}
                            />
                        ))}
                        {/* <li>
                            <a className="menu-item">
                                <div className="menu-icon">
                                    <i><AiFillDashboard/></i>
                                </div>
                              <span>Dashboard</span>  
                            </a>
                        </li>
                        <MenuItem 
                            name={"Content"}
                            subMenus={[{ name: "Courses"}, { name: "Videos"}]}
                        />
                        <li>
                            <a className="menu-item">
                                <div className="menu-icon">
                                    <i><BiPen/></i>
                                </div>
                               <span>Design</span> 
                            </a>
                        </li> */}
                    </ul>
                </div>

                <div className="side-menu-footer">
                        <div className="avatar" >
                            <img src={user} alt="" />
                        </div>
                        <div className="user-info">
                            <h5>Leandro Castro</h5>
                            <p>Leadro_castro980@hotmail.com</p>
                        </div>
                </div>
            </div>
       </>
    );
}

export default Navbaar;