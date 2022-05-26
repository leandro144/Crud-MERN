import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Navbaar.css"
import { BiSearchAlt2, BiNews, BiPen } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai"
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import logo from '../assets/logo.png';
import user from '../assets/user.jpg';
import MenuItem from "./MenuItem";

const menuItems = [
    {name : "Dashboard", to: "/", iconClassName:"bi bi-speedometer2"},
    {
        name: "Content",
        to: "/content",
        iconClassName: "bi bi-speedometer2",
        subMenus: [{ name: "Courses"}, { name: "Videos"}],
    },
    {name: "Design", to:"/design", iconClassName:"bi bi-vector-pen"},
];

const Navbaar = (props) => {

    const [inactive, setInactive] = useState(false);
    
    useEffect(() => {
        if(inactive) {
            document.querySelectorAll(".sub-menu").forEach((el) => {
                el.classList.remove('active');
            });
        }

        props.onCollapse(inactive);

    }, [inactive]);

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
                            <i><BiSearchAlt2 /></i>
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
                            iconClassName={menuItem.iconClassName}
                            onClick={(e) => {
                                if (inactive) {
                                  setInactive(false);
                                }
                              }}
                            />
                        ))}
                        {/* <li>
                            <a className="menu-item">
                                <div className="menu-icon">
                                   <i class="bi bi-speedometer2"></i>
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
                                   <i class="bi bi-vector-pen"></i>
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