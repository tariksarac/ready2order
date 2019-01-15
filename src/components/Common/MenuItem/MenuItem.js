import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.scss'

const MenuItem = ({title, onClickAction, activeItem}) => {
    return (
        <div className={` MenuItem ${activeItem && ' active'}`} onClick={() => onClickAction(title)}>{title}</div>
    );
};

MenuItem.propTypes = {
    title: PropTypes.string,
    onClickAction: PropTypes.func
};
MenuItem.defaultProps = {};

export default MenuItem;



