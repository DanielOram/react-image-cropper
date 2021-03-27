import React from "react";

export default function NavBar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">React Image Cropper</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}