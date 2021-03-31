import React from "react";

export default function NavBar() {
    return (
        <>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center"><i className="material-icons hide-on-med-and-down">crop</i>React Cropper</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a data-target="modal1" className="waves-effect waves-light btn btn-large modal-trigger"><i className="material-icons">help_outline</i></a></li>
                    </ul>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {/* <li><a href="https://www.linkedin.com/in/danieloram1/">About Me</a></li> */}
                        <li><a href="https://github.com/DanielOram/react-image-cropper">Github</a></li>
                        <li><a href="https://stackoverflow.com/users/4486146/danoram">StackOverflow</a></li>
                        <li><a href="https://www.linkedin.com/in/danieloram1/">Linked In</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a data-target="modal1" className="waves-effect waves-light btn btn-large modal-trigger"><span>How to Use<i className="material-icons right">help_outline</i></span></a></li>
                {/* <li><a href="">About Me<i className="material-icons right">info_outline</i></a></li> */}
                <li><a href="https://github.com/DanielOram/react-image-cropper">Github<i className="material-icons right">code</i></a></li>
                <li><a href="https://stackoverflow.com/users/4486146/danoram">StackOverflow<i className="material-icons right">code</i></a></li>
                <li><a href="https://www.linkedin.com/in/danieloram1/">Linked In<i className="material-icons right">info_outline</i></a></li>
            </ul>
        </>
    )
}