import React, {useState} from 'react';

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import Preview from './Preview';
// import DownLoadModal from './DownLoadModal';

const defaultSrc = "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export default function CanvasArea() {
    // CanvasArea is in charge of handling all data used by the imagecropper and the preview component
    const [image, setImage] = useState(defaultSrc);

    const [aspectRatio, setAspectRatio] = useState(1);

    const [cropper, setCropper] = useState();
    const [cropData, setCropData] = useState("#");

    const [hasCropped, setHasCropped] = useState(false);

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
        setHasCropped(false);
    };

    const getCropData = () => {
        if (cropper !== "undefined") {
            console.log('getCropData');
            setHasCropped(true);
            setCropData(cropper.getCroppedCanvas().toDataURL());
        }
      };

    const handleAspectRatioChange = (newAspectRatio) => {
        cropper.setAspectRatio(newAspectRatio);
    };

    const handleReset = () => {
        setHasCropped(false);
        cropper.reset();
    }
    
    return (
        <div className="container">
            <div className="row">
                {/* Empty row to add padding to top of container */}
            </div>
            <div className="row">
                <div className="col xl6">
                    <h2>Canvas Area</h2>
                    <input type="file" onChange={onFileChange} />

                    
                    <br></br>
                    <a className="waves-effect waves-light btn" onClick={() => handleAspectRatioChange(1)}>1:1</a>
                    <a className="waves-effect waves-light btn" onClick={() => handleAspectRatioChange(4/3)}>4:3</a>
                    <a className="waves-effect waves-light btn" onClick={() => handleAspectRatioChange(9/16)}>9:16</a>
                    <a className="waves-effect waves-light btn" onClick={() => handleAspectRatioChange(16/9)}>16:9</a>
                    <a className="waves-effect waves-light btn" onClick={() => handleAspectRatioChange({})}>freeform</a>
                    <a className="waves-effect waves-light btn" onClick={handleReset}>reset</a>
                    {/* Modal Trigger */}
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1" onClick={getCropData}>Crop Image</a>
                    {hasCropped && 
                        <a className="waves-effect waves-light btn" onClick={() => setHasCropped(false)}>Back</a>
                    }
                    {/* <label>Aspect Ratio</label>
                    <input type="text" id="fname" name="fname" />
                    <input type="text" id="lname" name="lname" /> */}
                </div>
                <div className="col xl6">
                    <Preview />
                </div>
                
                
            </div>
            <div className="row">
                    {/* <CropperComponent src={image} aspectRatio={aspectRatio} /> */}
                    {hasCropped &&
                        <img id="croppedImage" style={{ maxWidth: "100%" }} src={cropData} alt="cropped" />
                    }
                    {!hasCropped && 
                        <Cropper
                            src={image}
                            style={{ height: 400, width: "100%" }}
                            preview=".crop-preview"
                            initialAspectRatio={aspectRatio}
                            aspectRatio={aspectRatio}
                            onInitialized={(instance) => {
                                setCropper(instance);
                            }} />
                    }
                    
            </div>
            
            
            {/* <DownLoadModal croppedImage={cropData}/> */}
        </div>
    )
}

// pass attributes to this component -> figure out if component will be redrawn with new aspectRatio
const CropperComponent = ({src, aspectRatio}) => {
    return (
        <Cropper
                src={src}
                style={{ height: 400, width: "100%" }}
                preview=".crop-preview"
                initialAspectRatio={aspectRatio}
                aspectRatio={aspectRatio}
                onInitialized={(instance) => {
                    
                  }} />
    )
}