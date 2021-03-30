import React from "react";

export default function NavBar() {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center"><i class="material-icons">crop</i>React Cropper</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a class="waves-effect waves-light btn btn-large"><i class="material-icons">help_outline</i></a></li>
                    </ul>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Github</a></li>
                    </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                <li><a class="waves-effect waves-light btn btn-large"><span>How to Use<i class="material-icons right">help_outline</i></span></a></li>
                <li><a href="#">About Me<i class="material-icons right">info_outline</i></a></li>
                <li><a href="#">Github<i class="material-icons right">code</i></a></li>
            </ul>
        </>
    )
}