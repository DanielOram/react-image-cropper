import React from 'react';
import Preview from './Preview';
import DownLoadModal from './DownLoadModal';

export default function CanvasArea() {
    return (
        <div>
            <h2>Canvas Area</h2>
            <Preview />
            <DownLoadModal />
        </div>
    )
}