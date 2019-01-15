import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { STATUS_LIST } from '../../../../utils/constants';
import './TableStatus.scss';

class TableStatus extends React.Component {
    static defaultProps = {};

    static propTypes = {
        status: PropTypes.string,
    };

    state = {
        selectedOption: this.props.table.status,
    };

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        this.props.changeTableStatus({ ...this.props.table, status: selectedOption.value });
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <div className={'TableStatus'}>
                <label>Change table status</label>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={STATUS_LIST}
                    placeholder={'Change status'}
                    className={'table-status'}
                />
            </div>
        );
    }
}

export default TableStatus;
