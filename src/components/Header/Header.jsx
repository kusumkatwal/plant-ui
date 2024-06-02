import { CiFilter } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { PiSquaresFourThin } from "react-icons/pi";
import { PiArrowSquareOutThin } from "react-icons/pi";

import './Header.css';
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <ul>
          <li>
            <PiSquaresFourThin />    </li>
          <li>
            <CiFilter />    </li>
          <li>
          <PiArrowSquareOutThin />    </li>
        </ul>
      </div>


      <div className="header-right">
       <form>
       <input className="input" type="text" placeholder="Search" />
        <button type="submit" className="search-icon">
          <IoIosSearch />
        </button>
       </form>
      </div>
    </div>
  );
}