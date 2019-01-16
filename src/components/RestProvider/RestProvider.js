import React from 'react';
import {dishes, ORDER_STATUS, orders, tables} from '../../utils/constants';

import uuidv1 from 'uuid';

const RestContext = React.createContext();

class RestProvider extends React.Component {
    state = { tables: tables, dishes: dishes, orders: orders };

    createOrder = (dish, table, qnt) => {
        let order = { ...dish, id: uuidv1(), table: table, qnt, time_created: new Date(), status: ORDER_STATUS[0] };
        this.setState({ orders: [...this.state.orders, order] });
    };

    changeTableStatus = (table) => {
        this.setState({tables: [...this.state.tables.filter(item=>item.number !== table.number), table]})
    }

    handleChangeOrderStatus = (order) => {
        this.setState({orders: [...this.state.orders.filter(item=>item.id !== order.id), order]})
    }

    render() {
        return (
            <RestContext.Provider
                value={{
                    tables: this.state.tables.sort((a,b) => a.number-b.number),
                    dishes: this.state.dishes,
                    orders: this.state.orders.sort((a,b)=> b.time_created-a.time_created),
                    createOrder: this.createOrder,
                    changeTableStatus: this.changeTableStatus,
                    handleChangeOrderStatus: this.handleChangeOrderStatus,
                }}>
                {this.props.children}
            </RestContext.Provider>
        );
    }
}

const RestConsumer = RestContext.Consumer;

export { RestProvider, RestConsumer };
