import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { RestConsumer } from '../../../RestProvider/RestProvider';
import Input from '../../../Common/Input/Input';
import Button from '../../../Common/Button/Button';
import './SelectDish.scss';
import Quantity from "./Quantity/Quantity";

class SelectDish extends React.Component {
    static defaultProps = {};

    static propTypes = {
        table: PropTypes.number
    };

    state = {
        dish: null,
        comment: '',
        qty: 0
    };

    handleChange = dish => {
        this.setState({ dish });
    };

    handleChangeQuantity = qty => {
        this.setState({ qty });
    };

    onCommentChange = e => {
        this.setState({ comment: e.target.value });
    };

    render() {
        const { dish, comment, qty } = this.state;
        const { table } = this.props;
        return (
            <RestConsumer>
                {({ dishes, createOrder }) => (
                    <div className={'SelectDish'}>
                        <div className={'dish'}>
                            <div>
                                <label>Create order</label>
                                <Select value={dish} onChange={this.handleChange} options={dishes} className={'select-dish'}/>
                            </div>

                            <Quantity onChange={this.handleChangeQuantity} qty={qty}/>
                        </div>

                        <Input placeholder={'Special requests'} onChange={this.onCommentChange} value={comment} />
                        <Button
                            buttonText={'Add to orders'}
                            onClickAction={() => this.state.dish && createOrder(this.state, table, 1)}
                            style={{ marginLeft: 'auto', marginRight: '0' }}
                        />
                    </div>
                )}
            </RestConsumer>
        );
    }
}

export default SelectDish;
