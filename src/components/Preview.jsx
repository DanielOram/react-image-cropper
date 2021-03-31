import React from 'react';

export default function Preview() {

    return (
        <>
            <div className="crop-preview-container" style={{ width: "100%", height: 200, float: "right", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div 
                    className="crop-preview"
                    style={{width: "100%", height: "inherit", overflow: "hidden", maxHeight: "100%" }}>
                </div>
            </div>
        </>
        
    )
}