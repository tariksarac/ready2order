import React from 'react';
import PropTypes from 'prop-types';
import './Chair.scss'

const Chair = ({horizontal, chairStyle}) => {
    return (
        <div style={chairStyle} className={`Chair ${horizontal && 'horizontal'}`}>
            <div className={'dark'}/>
            <div className={'white'}/>
        </div>
    );
};

Chair.propTypes = {
    horizontal: PropTypes.bool,
    chairStyle: PropTypes.object
};
Chair.defaultProps = {
    horizontal: false
};

export default Chair;
