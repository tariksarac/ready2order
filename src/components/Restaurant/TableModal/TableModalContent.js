import React from 'react';
import PropTypes from 'prop-types';
import Order from '../../OrderedList/Order/Order';
import SelectDish from './SelectDish/SelectDish';
import TableStatus from './TableStatus/TableStatus';
import { RestConsumer } from '../../RestProvider/RestProvider';
import './TableModalContent.scss';
import Button from '../../Common/Button/Button';

const TableModalContent = ({ table, closeModal, orders }) => {
    return (
        <RestConsumer>
            {({ changeTableStatus }) => (
                <div className={'TableModalContent'}>
                    <h2>{`Table number ${table.number}`}</h2>

                    <TableStatus table={table} changeTableStatus={changeTableStatus} />

                    <SelectDish table={table.number} closeModal={closeModal} />

                    <div className={'orders'}>
                        {orders
                            .filter(item => item.table === table.number)
                            .map((item, index) => <Order key={index} order={item} table={table.number} />)}
                    </div>

                    <Button
                        onClickAction={closeModal}
                        buttonText={'Close'}
                        style={{ marginLeft: '0', marginRight: 'auto', marginTop: '10px' }}
                    />
                </div>
            )}
        </RestConsumer>
    );
};

TableModalContent.propTypes = {
    table: PropTypes.object,
    closeModal: PropTypes.func,
};
TableModalContent.defaultProps = {};

export default TableModalContent;
