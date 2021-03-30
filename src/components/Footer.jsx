import React from "react";

export default function Footer() {
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Created by Daniel Oram.</h5>
                <p className="grey-text text-lighten-4">A webapp for cropping and downloading images using React.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">About Me</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/DanielOram/react-image-cropper">Github</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://stackoverflow.com/users/4486146/danoram">StackOverflow</a></li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2021 Daniel Oram
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>
    )
}