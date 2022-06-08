import React, { useState, useEffect } from "react";
import "../components/Navbaar.css"
import { BiSearchAlt2, BiHome } from "react-icons/bi";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import logo from '../assets/logo.png';
import user from '../assets/user.jpg';
import MenuItem from "./MenuItem";


const menuItems = [
    {name : "Home", exact: true, to: "/", iconName:"bi bi-house-fill"},
    {name : "Nossa Equipe", exact: true, to: "/", iconName:"bi bi-people-fill"},
    {
        name: "Login",
        exact: true,
        to: "/content",
        iconName: "bi bi-box-arrow-in-right",
        subMenus: [
            { name: "Courses", to: '/content/courses'},
            { name: "Videos", to: '/content/videos'}],
    },
    {name: "Design", to:"/design", iconName:"bi bi-vector-pen"},
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
                            exact={menuItem.exact}
                            to={menuItem.to}
                            subMenus={menuItem.subMenus || []}
                            iconName={menuItem.iconName}
                            onClick={(e) => {
                                if (inactive) {
                                  setInactive(false);
                                }
                              }}
                            />
                        ))}
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