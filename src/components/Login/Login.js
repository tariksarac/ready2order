import React from 'react';
import './Login.scss';
import Input from '../Common/Input/Input';
import Button from '../Common/Button/Button';
import { AuthConsumer } from '../AuthProvider/AuthProvider';

class Login extends React.Component {

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
                                alt={'logo'}
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
                                <div className={'buttons'}>
                                    {/*<Button buttonText={'HOW TO USE APP'} onClickAction={()=> this.props.history.push('/how-to-use')} blue/>*/}
                                    <Button buttonText={'LOG IN'} onClickAction={login} />
                                </div>

                            </div>
                        </div>
                    )}
                </AuthConsumer>
            </div>
        );
    }
}

export default Login;
