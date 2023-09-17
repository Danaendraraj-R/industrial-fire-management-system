import React, { useState } from "react";
import "./Navbar.css";

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">

<h2>Industrial Fire Detection, Alert and Management System</h2>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">

                        </li>
                        <li className="nav-item">

                        </li>
                        <li className="nav-item">

                        </li>
                        <li className="nav-item">

                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}

export default NavBar;