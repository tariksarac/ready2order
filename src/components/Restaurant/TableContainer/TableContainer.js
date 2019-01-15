import React from 'react';
import PropTypes from 'prop-types';
import './TableContainer.scss';
import Table from './Table/Table';
import Chair from './Chair/Chair';
import {customStyles, TABLE_COLOR, TABLE_SIZE} from '../../../utils/constants';
import Modal from 'react-modal';
import TableModalContent from '../TableModal/TableModalContent';

class TableContainer extends React.Component {
    static defaultProps = {
        table: { size: 'regular' },
    };

    static propTypes = {
        table: PropTypes.object,
        orders: PropTypes.object,
    };

    state = {
        modalIsOpen: false,
    };

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };

    render() {
        const { table, orders } = this.props;
        return (
            <div>
                {table.size === TABLE_SIZE.big && (
                    <div
                        onClick={this.openModal}
                        className={'TableContainer big'}
                        style={{ backgroundColor: TABLE_COLOR[table.status] }}>
                        <h5 style={{ top: '160px' }}>{table.status}</h5>

                        <Chair
                            chairStyle={{
                                marginRight: '75px',
                                marginLeft: '75px',
                            }}
                            horizontal
                        />
                        <Chair />
                        <Table
                            tableStyle={{
                                marginBottom: '0px',
                                borderBottom: '0px',
                                borderBottomLeftRadius: '0',
                                borderBottomRightRadius: '0',
                            }}
                            shape={table.shape}
                        />
                        <Chair
                            chairStyle={{
                                marginRight: '5px',
                            }}
                        />
                        <Chair />
                        <Table
                            tableStyle={{
                                marginTop: '0px',
                                borderTop: '0px',
                                borderTopLeftRadius: '0',
                                borderTopRightRadius: '0',
                            }}
                            shape={table.shape}
                        />
                        <Chair
                            chairStyle={{
                                marginRight: '5px',
                            }}
                        />
                        <Chair
                            chairStyle={{
                                marginRight: '75px',
                                marginLeft: '75px',
                            }}
                            horizontal
                        />
                    </div>
                )}
                {table.size === TABLE_SIZE.regular && (
                    <div
                        className={'TableContainer'}
                        style={{ backgroundColor: TABLE_COLOR[table.status] }}
                        onClick={this.openModal}>
                        <h5>{table.status}</h5>
                        <Chair
                            chairStyle={{
                                marginRight: '75px',
                                marginLeft: '75px',
                            }}
                            horizontal
                        />
                        <Chair />
                        <Table shape={table.shape} />
                        <Chair />
                        <Chair horizontal />
                    </div>
                )}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal">
                    <TableModalContent closeModal={this.closeModal} table={table} orders={orders}/>
                </Modal>
            </div>
        );
    }
}

export default TableContainer;
