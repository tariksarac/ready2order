import React from 'react';
import PropTypes from 'prop-types';
import './Order.scss';
import * as moment from 'moment';
import Select from 'react-select';
import { ORDER_STATUS } from '../../../utils/constants';

class Order extends React.Component {
    static defaultProps = {};

    static propTypes = {
        order: PropTypes.object,
    };

    state = {
        order: this.props.order,
    };

    render() {
        let { order, ordersPage, handleChangeOrderStatus } = this.props;
        return (
            <div className={'Order'}>
                <div className={'time'}>{`Ordered ${moment(order.time_created).format(
                    'MMMM Do YYYY, h:mm:ss a',
                )}`}</div>
                <div className={'dish'}>
                    <img
                        alt={'dish'}
                        src={
                            'https://food-images.files.bbci.co.uk/food/recipes/simple_fish_dish_98008_16x9.jpg'
                        }
                    />
                    <div className={'name'}>{order.dish && order.dish.name}</div>
                    <div className={'qty'}>{`Quantity: ${order.qty}`}</div>
                    {!ordersPage && <div className={'qty'}>{order.status.value}</div>}
                    {ordersPage && (
                        <Select
                            value={order.status}
                            onChange={status => handleChangeOrderStatus({ ...order, status: status })}
                            options={ORDER_STATUS}
                            className={'select-order-status'}
                        />
                    )}
                    {ordersPage && <div className={'status'}>{`Table ${order.table}`}</div>}
                </div>
                <div className={'comment'}>{order.comment}</div>
            </div>
        );
    }
}

export default Order;
