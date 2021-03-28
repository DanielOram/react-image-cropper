import React from 'react';
import './Preview.css';

export default function Preview() {
    const previewWidth = 200;
    const previewHeight = 200;

    return (
        <div className="crop-preview-container" style={{ width: "100%", height: 200, float: "right", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div 
                className="crop-preview"
                style={{width: "100%", height: "inherit", overflow: "hidden", maxHeight: "100%" }}>
            </div>
        </div>
        
    )
}