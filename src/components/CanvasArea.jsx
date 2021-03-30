import React, {useState} from 'react';

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import Preview from './Preview';
import InfoModal from './InfoModal';

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
            {/* <div className="row">
                <div className="col xl6 l6 m4 s4">
                    <div className="row">
                        <div className="col xl12">
                            <div className="">
                                <div className= "btn file-field input-field">
                                    <span>Choose Image</span>
                                    <input type="file" onChange={onFileChange} />
                                </div>
                            </div>
                        </div>
                        <div className="col xl12" style={{display: "none"}}>
                            <div className= "file-path-wrapper">
                                <input className= "file-path validate" type = "text"
                                    placeholder = "File Name" />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
                
                
            </div>
             */}



            <div className="row">
                    {/* <CropperComponent src={image} aspectRatio={aspectRatio} /> */}
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
                            <div className="col xl8 l8">
                            <Cropper
                                src={image}
                                style={{ height: 400, width: "100%" }}
                                preview=".crop-preview"
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

            {/* Divs for responsiveness testing */}
            {/* <div className="row">
                <div style={{backgroundColor: "blue", color: "white"}} className="col xl12 l1 m12 s1">
                    Responsiveness testing
                </div>
            </div> */}

            {/* Modal */}
            <InfoModal />
            
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

// Not used
const CroppedImage = (cropData, containerData) => {
    return (
        <div style={{width: "100%", height: containerData.height}}>
            <img id="croppedImage" style={{ maxWidth: "100%" }} src={cropData} alt="cropped" />
        </div>
    )
}