import React from 'react';

export default function DownLoadModal(croppedImage) {
    return (
        <div>
            {/* Modal Content */}
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>Modal Header</h4>
                    <p>A bunch of text</p>
                    <img style={{ width: "100%" }} src={croppedImage} alt="cropped" />
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </div>
        </div>
        
    )
}



