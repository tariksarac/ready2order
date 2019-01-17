import React from 'react';
import PropTypes from 'prop-types';
import './OrderedList.scss';
import Order from './Order/Order';
import { RestConsumer } from '../RestProvider/RestProvider';

class OrderedList extends React.Component {
    static defaultProps = {};

    static propTypes = {
        orders: PropTypes.array,
    };

    state = {
        currentPage: 0,
    };

    getNumberOfPages = (list, itemsPerPage) => {
        const numberOfPages = Math.ceil(list.length / itemsPerPage);
        return Array.from(Array(numberOfPages).keys());
    };

    paginatedList = (list, itemsPerPage) => {
        const { currentPage } = this.state;

        return list.slice(
            currentPage * parseInt(itemsPerPage, 0),
            (currentPage + 1) * parseInt(itemsPerPage, 0),
        );
    };

    onClickPageNumber = page => {
        this.setState({ currentPage: page });
    };

    render() {
        const { currentPage } = this.state;
        return (
            <RestConsumer>
                {({ orders, handleChangeOrderStatus }) => (
                    <div className={'OrderedList-container'}>
                        <div className={'OrderedList'}>
                            <div className={'title'}>Ordered</div>

                            {this.paginatedList(orders, 5).map((item, index) => (
                                <Order
                                    order={item}
                                    key={index}
                                    ordersPage
                                    handleChangeOrderStatus={handleChangeOrderStatus}
                                />
                            ))}
                        </div>

                        <PageNumbers
                            items={this.getNumberOfPages(orders, 5)}
                            currentPage={currentPage}
                            onClickPageNumber={this.onClickPageNumber}
                        />
                    </div>
                )}
            </RestConsumer>
        );
    }
}

export default OrderedList;

const PageNumbers = ({ items, currentPage, onClickPageNumber }) => {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <Item
                        key={index}
                        item={item}
                        currentPage={currentPage}
                        onClickPageNumber={onClickPageNumber}
                    />
                );
            })}
        </ul>
    );
};

// Page number...
const Item = ({ item, currentPage, onClickPageNumber }) => {
    return (
        <li onClick={() => onClickPageNumber(item)}>
            {item === currentPage ? <p>{item + 1}</p> : <a href="#">{item + 1}</a>}
        </li>
    );
};
