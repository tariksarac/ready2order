import React from 'react';
import PropTypes from 'prop-types';
import { Minus, Plus } from 'react-feather';
import './Quantity.css';

const Quantity = ({ qty, onChange }) => {
    return (
        <div className={'Quantity'}>
            <div className={'Quantity-title'}>
                Quantity
            </div>
            <div className={'Quantity-inc-dec'}>
                <button
                    className={'Quantity-button'}
                    onClick={() => qty > 0 && onChange(parseInt(qty, 10) - 1)}
                    type={'button'}>
                    <Minus color={'#5E7785'} size={14} />
                </button>
                <input
                    type={'number'}
                    className={'number-of-dishes'}
                    value={qty}
                    onChange={event => onChange(parseInt(event.target.value, 10))}
                />
                <button
                    className={'Quantity-button'}
                    onClick={() => onChange(parseInt(qty, 10) + 1)}
                    type={'button'}>
                    <Plus color={'#5E7785'} size={14} />
                </button>
            </div>
        </div>
    );
};

Quantity.propTypes = {
    onChange: PropTypes.func
};
Quantity.defaultProps = {};

export default Quantity;
