import React, {useState} from 'react';


import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import Preview from './Preview';
import InfoModal from './InfoModal';
import DefaultImage from '../img/oranges.jpg';

const defaultSrc = DefaultImage;

export default function CanvasArea() {
    // CanvasArea is in charge of handling all data used by the imagecropper and the preview component
    const [image, setImage] = useState(defaultSrc);

    const [aspectRatio, setAspectRatio] = useState(1);

    // in order to stop error when using useEffect the initial state includes an empty function for reset.
    const [cropper, setCropper] = useState(
        {
            reset: () => {}
        }
    );
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
                    {hasCropped && 
                        <div className="center-align">
                            <div className="row">
                                <div className="col xl12 l12 m12 s12">
                                    <div className="crop-preview-container" style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "50vh" }}>
                                        <img id="croppedImage" style={{ maxWidth: "100%" }} src={cropData} alt="cropped" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col xl12 l12 m12 s12">
                                    <a className="waves-effect waves-light btn btn-large" style={{width: "100%"}} href={image} download="cropped.png">Download Image</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col xl12 l12 m12 s12">
                                    <a className="waves-effect waves-light btn teal darken-4" style={{width: "100%"}} onClick={() => setHasCropped(false)}>Back</a>
                                </div>
                            </div>
                        </div>
                        
                    }
                    {!hasCropped && 
                        <div className="col xl12">
                            <div className="col xl8 l8 m12 s12">
                            <Cropper
                                src={image}
                                style={{ height: 400, width: "100%" }}
                                preview=".crop-preview"
                                // responsive={true}
                                initialAspectRatio={aspectRatio}
                                aspectRatio={aspectRatio}
                                onInitialized={(instance) => {
                                    setCropper(instance);
                                }} 
                            />
                            </div>
                            <div className="col xl4 l4 m12 s12">
                                <div className="hide-on-med-and-down">
                                    <Preview />
                                </div>
                                <div className="">
                                    <div className="">
                                        <div className= "btn file-field input-field teal darken-4" style={{width: "100%"}}>
                                            <span>Choose Image</span>
                                            <input type="file" onChange={onFileChange} />
                                        </div>
                                    </div>
                                </div>
                                <div className="" style={{display: "none"}}>
                                    <div className= "file-path-wrapper">
                                        <input className= "file-path validate" type = "text"
                                            placeholder = "File Name" />
                                    </div>
                                </div>

                                {!hasCropped && 
                                    <>
                                        <div className="row">
                                            <div className="col xl12 l12 m12 s12">
                                                <a className="waves-effect waves-light btn col xl3 l3 m3 s3" style={{textAlign: 'center'}} onClick={() => handleAspectRatioChange(1)}>1:1</a>
                                                <a className="waves-effect waves-light btn col xl3 l3 m3 s3" style={{textAlign: "center"}} onClick={() => handleAspectRatioChange(4/3)}>4:3</a>
                                                <a className="waves-effect waves-light btn col xl3 l3 m3 s3" style={{textAlign: "center"}} onClick={() => handleAspectRatioChange(9/16)}>9:16</a>
                                                <a className="waves-effect waves-light btn col xl3 l3 m3 s3" style={{textAlign: "center"}} onClick={() => handleAspectRatioChange(16/9)}>16:9</a>
                                                <a className="waves-effect waves-light btn col xl6 l6 m6 s6" onClick={() => handleAspectRatioChange({})}>freeform</a>
                                                <a className="waves-effect waves-light btn col xl6 l6 m6 s6" onClick={handleReset}>reset</a>
                                            </div>
                                        </div>
                                    </>
                                }
                                <div className="row">
                                    <div className="col xl12 l12 m12 s12">
                                        {!hasCropped &&
                                            <a className="black-text waves-effect waves-light btn teal lighten-4" style={{width: "100%"}} onClick={getCropData}>Crop Image</a>
                                        }
                                        
                                    </div>
                                    
                                </div>

                            </div>
                            
                        </div>
                    }
                    
            </div>
            <InfoModal />  
        </div>
    )
}