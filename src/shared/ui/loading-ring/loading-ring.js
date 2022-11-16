import React from 'react';
import './loading.css'
export const LoadingRing = ({width, height}) => {
    return (<div>
            <div className="lds-ring" style={{width,height}}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
    </div>
    );
};

