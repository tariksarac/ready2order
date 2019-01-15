import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Button from '../Common/Button/Button';
import './Header.scss';
import { AuthConsumer } from '../AuthProvider/AuthProvider';
import MenuItem from '../Common/MenuItem/MenuItem';

class Header extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        active: this.props.location.pathname.substr(1),
    };

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({ active: this.props.location.pathname.substr(1) });
        }
    }

    goHome = () => {
        if (this.props.location.path !== '/') {
            this.props.history.push('/');
        }
    };

    goToLocation = location => {
        this.setState({ active: location });
        this.props.history.push(`/${location}`);
    };

    render() {
        let { active } = this.state;
        return (
            <AuthConsumer>
                {({ isAuth, logout }) => (
                    <header className="Header">
                        <div
                            className={'logo'}
                            onClick={() => {
                                this.goHome();
                            }}>
                            READY2ORDER
                        </div>

                        {isAuth && (
                            <div className={'menu-items'}>
                                <MenuItem
                                    title={'tables'}
                                    onClickAction={this.goToLocation}
                                    activeItem={active === 'tables'}
                                />
                                <MenuItem
                                    title={'orders'}
                                    onClickAction={this.goToLocation}
                                    activeItem={active === 'orders'}
                                />

                                <MenuItem
                                    title={'users'}
                                    onClickAction={this.goToLocation}
                                    activeItem={active === 'users'}
                                />
                                <Button buttonText={'LOG OUT'} onClickAction={logout} />
                            </div>
                        )}
                    </header>
                )}
            </AuthConsumer>
        );
    }
}

export default withRouter(Header);
