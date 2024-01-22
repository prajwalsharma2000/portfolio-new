import React from 'react'
import "./navbar.css"
import { AiOutlineUser, AiOutlineRise, AiOutlineFileSearch, AiOutlineLaptopl, AiOutlineMail, AiOutlineFilePdf } from "react-icons/ai";
import { BsClipboard2Data, BsFillMortarboardFill, BsClipboard2DataFill   } from "react-icons/bs";

const Navbar = () => {
  return (
    <div class='navbar'>
        <div className='profile-pic-div'>
            <img className='profile-pic' src='assets\profile-pic.png'/>
        </div>
        <hr />
        <div>
            <ul>
                <li>
                    <div><AiOutlineUser className='nav-icon'/></div>
                    <p>About</p>
                </li>
                <li>
                    <div><AiOutlineRise className='nav-icon'/></div>
                    <p>Experience</p>
                </li>
                <li>
                    <div><AiOutlineFileSearch className='nav-icon'/></div>
                    <p>Projects</p>
                </li>
                <li>
                    <div><BsClipboard2DataFill className='nav-icon'/></div>
                    <p>Skills</p>
                </li>
                <li>
                    <div><BsFillMortarboardFill className='nav-icon'/></div>
                    <p>Experience</p>
                </li>
                <li>
                    <div><AiOutlineMail className='nav-icon'/></div>
                    <p>Contact</p>
                </li>
                <li>
                    <div><AiOutlineFilePdf className='nav-icon'/></div>
                    <p>Resume</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar