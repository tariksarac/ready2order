import React from 'react';
import PropTypes from 'prop-types';
import TableContainer from './TableContainer/TableContainer';
import { RestConsumer } from '../RestProvider/RestProvider';
import './Restaurant.scss'

const Restaurant = props => {
    return (
        <RestConsumer>
            {({ tables, orders }) => (
                <div className={'Restaurant'}>
                    {tables.map((item, index) => <TableContainer table={item} key={index} orders={orders}/>)}
                </div>
            )}
        </RestConsumer>
    );
};

Restaurant.propTypes = {};
Restaurant.defaultProps = {};

export default Restaurant;
