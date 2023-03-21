import React from 'react';
import "./Loading.css";

const Loading = () => {
    return (
        <div className="main">
            <div className="spinner">
                <div className="bubble-1"></div>
                <div className="bubble-2"></div>
                <div className="bubble-3"></div>
            </div>
        </div>
    )
}

export default Loading;