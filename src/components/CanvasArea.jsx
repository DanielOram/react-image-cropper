import React from 'react';
import Preview from './Preview';
import DownLoadModal from './DownLoadModal';

export default function CanvasArea() {
    // CanvasArea is in charge of handling all data used by the imagecropper and the preview component

    return (
        <div>
            <h2>Canvas Area</h2>
            <Preview />
            <DownLoadModal />
        </div>
    )
}