import React, {useState} from 'react';

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import Preview from './Preview';
import DownLoadModal from './DownLoadModal';

const defaultSrc = "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export default function CanvasArea() {
    // CanvasArea is in charge of handling all data used by the imagecropper and the preview component
    const [image, setImage] = useState(defaultSrc);
    return (
        <div>
            <h2>Canvas Area</h2>
            <Cropper
                src={image}
                style={{ height: 400, width: "100%" }} />
            <Preview />
            <DownLoadModal />
        </div>
    )
}