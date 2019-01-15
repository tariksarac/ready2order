import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ buttonStyle, buttonText, blue, onClickAction, type, disabled, buttonIcon, style }) => {
    const color = blue ? 'blue' : 'gray';

    return (
        <div className={'Button'} style={style}>
            <button
                type={type}
                className={`button ${color}`}
                style={{ ...buttonStyle}}
                onClick={() => onClickAction()}
                disabled={disabled}
            >
                {buttonIcon && <img style={{paddingRight: '10px'}} className={'button-icon'} src={buttonIcon} alt={''}/> }
                {buttonText}
            </button>

        </div>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
    buttonStyle: PropTypes.object,
    onClickAction: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    buttonIcon: PropTypes.string
};
Button.defaultProps = {
    buttonText: 'Enter text',
    buttonStyle: {},
    onClickAction: () => {},
    type: 'button',
    disabled: false,
};

export default Button;
