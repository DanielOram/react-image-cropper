import React from 'react';

export default function InfoModal() {
    return (
        <div>
            {/* Modal Content */}
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>React Cropper</h4>
                    <p>Double click the cropping canvas to toggle between moving the selected image and creating a cropping area.</p>
                    <p>Press 'RESET' to return the cropping canvas back to it's default position and aspect ratio.</p>
                    <p>Press 'FREEFORM' to be able to manually change the aspect ratio of the crop.</p>
                    <p>Scroll to zoom in and out.</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        </div>
        
    )
}



