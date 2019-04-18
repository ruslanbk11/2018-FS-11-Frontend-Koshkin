import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Avatar.css';
import avatar from '../../static/avatar.png';

export default () => {

    const shadowStyle = {
        zIndex: 3,
        position: 'fixed',
        height: '100%',
        width: '100%',
        backgroundColor: '#222f3e',
        opacity: 0.5,
        top: 0,
};

    const [zoomed, setZoomed] = useState(false);
    const shadowElement = <div style={shadowStyle}></div>;

    return (
        <div>
            {
              zoomed &&
              <div>{ReactDOM.createPortal(shadowElement, document.body)}</div>
            }
            <img
              onClick={() => setZoomed(!zoomed)}
              alt="noav"
              src={avatar}
              className={zoomed ? styles.zoomed : styles.not_zoomed}>
            </img>
        </div>

    )

}
