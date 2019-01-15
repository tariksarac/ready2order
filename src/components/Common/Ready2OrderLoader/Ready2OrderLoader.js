import React from 'react';
import Loader from 'react-loader-spinner';

const loaderStyle = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    width: '100px',
    height: '100px',
    Zindex: '9999',

    transform: 'translate(-50%, -50%)',

    color: 'darkred',
}

const Ready2OrderLoader = (props) => {
    return (
        <div style={ loaderStyle }>
            <Loader
                type="Circles"
                color="#3c4146"
                height="50"
                width="50"
            />
        </div>
    );
};

Ready2OrderLoader.propTypes = {};
Ready2OrderLoader.defaultProps = {};

export default Ready2OrderLoader;
