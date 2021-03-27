import React, {useState} from 'react';

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import Preview from './Preview';
import DownLoadModal from './DownLoadModal';

const defaultSrc = "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export default function CanvasArea() {
    // CanvasArea is in charge of handling all data used by the imagecropper and the preview component
    const [image, setImage] = useState(defaultSrc);

    const onFileChange = (event) => {
        event.preventDefault();
        let files;
        if (event.dataTransfer) {
            files = event.dataTransfer.files;
        } else if (event.target) {
            files = event.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };
    
    return (
        <div className="container">
            <div className="row">
                {/* Empty row to add padding to top of container */}
            </div>
            <div className="row">
                <div className="col xl6">
                    <h2>Canvas Area</h2>
                    <input type="file" onChange={onFileChange} />
                </div>
                <div className="col xl6">
                    <Preview />
                </div>
                
                
            </div>
            <div className="row">
            <Cropper
                src={image}
                style={{ height: 400, width: "100%" }}
                preview=".crop-preview" />
            </div>
            
            
            
            <DownLoadModal />
        </div>
    )
}