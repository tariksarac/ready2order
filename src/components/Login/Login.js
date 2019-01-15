import React from 'react';
import PropTypes from 'prop-types';
import './Login.scss';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';
import { setCurrentUser, sleep } from '../../utils/helper';
import { AuthConsumer } from '../AuthProvider/AuthProvider';

class Login extends React.Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        username: '',
        password: '',
    };

    render() {
        let { username, password } = this.state;
        return (
            <div className={'Login'}>
                <AuthConsumer>
                    {({ login }) => (
                        <div>
                            <img
                                src={
                                    'https://my.ready2order.at/images/logo-full.png?cf0c3a42066b90125ec65231aeca67f0'
                                }
                            />
                            <div className={'login-form'}>
                                <Input
                                    type={'text'}
                                    label={'USERNAME'}
                                    onChange={e => this.setState({ username: e.target.value })}
                                    value={username}
                                />
                                <Input
                                    type={'password'}
                                    label={'PASSWORD'}
                                    onChange={e => this.setState({ password: e.target.value })}
                                    value={password}
                                />
                                <Button buttonText={'LOG IN'} onClickAction={login} />
                            </div>
                        </div>
                    )}
                </AuthConsumer>
            </div>
        );
    }
}

export default Login;
