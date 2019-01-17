import React from 'react';
import TableContainer from './TableContainer/TableContainer';
import { RestConsumer } from '../RestProvider/RestProvider';
import './Restaurant.scss'

const Restaurant = () => {
    return (
        <RestConsumer>
            {({ tables, orders }) => (
                <div className={'Restaurant'}>
                    <div className={'title'}>Restaurant</div>
                    <div className={'tables'}>
                        {tables.map((item, index) => <TableContainer table={item} key={index} orders={orders}/>)}
                    </div>
                </div>
            )}
        </RestConsumer>
    );
};

export default Restaurant;
