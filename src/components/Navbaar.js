import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Navbaar.css"
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import logo from '../assets/logo.png';

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

                <div className="divider">

                </div>
            </div>
       </>
    );
}

export default Navbaar