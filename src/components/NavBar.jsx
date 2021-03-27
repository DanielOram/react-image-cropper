import React from "react";

export default function NavBar() {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo center">React Image Cropper</a>
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}