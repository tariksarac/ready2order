import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss'

const Input = ({value, onChange, type, name, label, placeholder}) => {
    return (
        <div className={'input-container '}>
            <label>{label}</label>
            <input className={'Input'} value={value} onChange={onChange} type={type} name={name} placeholder={placeholder}/>
        </div>
    );
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string
};
Input.defaultProps = {
    value: '',
    onChange: ()=>{},
    type: 'text',
    name: ''
};

export default Input;
