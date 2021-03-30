import React from "react";

export default function NavBar() {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center"><i class="material-icons">crop</i>React Cropper</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a data-target="modal1" class="waves-effect waves-light btn btn-large modal-trigger"><i class="material-icons">help_outline</i></a></li>
                    </ul>
                    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#">About Me</a></li>
                        <li><a href="https://github.com/DanielOram/react-image-cropper">Github</a></li>
                        <li><a href="https://stackoverflow.com/users/4486146/danoram">StackOverflow</a></li>
                    </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                <li><a data-target="modal1" class="waves-effect waves-light btn btn-large modal-trigger"><span>How to Use<i class="material-icons right">help_outline</i></span></a></li>
                <li><a href="#">About Me<i class="material-icons right">info_outline</i></a></li>
                <li><a href="https://github.com/DanielOram/react-image-cropper">Github<i class="material-icons right">code</i></a></li>
                <li><a href="https://stackoverflow.com/users/4486146/danoram">StackOverflow<i class="material-icons right">code</i></a></li>
            </ul>
        </>
    )
}