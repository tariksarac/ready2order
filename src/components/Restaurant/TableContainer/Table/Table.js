import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss'

const Table = ({tableStyle, shape}) => {
    return (
        <div style={tableStyle} className={`Table ${shape && shape}`}></div>
    );
};

Table.propTypes = {
    tableStyle: PropTypes.object,
    shape: PropTypes.string
};
Table.defaultProps = {};

export default Table;
