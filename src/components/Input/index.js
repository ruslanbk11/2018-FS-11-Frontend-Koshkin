import React from 'react';
import './styles.css';

const input = props => {
    let inputElement = null;
    switch (props.elementType) {
        case('input'):
            inputElement = <input
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value}/>;
            break;
        case('textarea'):
            inputElement = <textarea
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value}/>;
            break;
        default:
            inputElement = <input
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value}/>;
            break;
    }


    return (
        <div className='Input'>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    );
};
export default input;
