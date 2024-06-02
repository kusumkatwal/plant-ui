import "./Sidebar.css";
import { CiShoppingCart } from "react-icons/ci";
import { PiPottedPlantLight } from "react-icons/pi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { CiHome } from "react-icons/ci";

import 'bootstrap-icons/font/bootstrap-icons.css';

import {NavLink} from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="nav">
           <ul>
                <li>
                    <NavLink to='/'>
                    <CiHome />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/plant'>
                        <PiPottedPlantLight />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/cart'>
                    <CiShoppingCart />
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/adjust'>
                    <HiOutlineAdjustments />
                    </NavLink>
                </li>
            </ul>
           </div>
        </div>
    );
}

export default Sidebar;