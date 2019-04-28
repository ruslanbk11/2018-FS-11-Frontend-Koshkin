import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Avatar.css';
import avatar from '../../static/avatar.png';

export default () => {

    const [zoomed, setZoomed] = useState(false);
    const shadowElement = <div className={styles.shadowStyle}></div>;

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
