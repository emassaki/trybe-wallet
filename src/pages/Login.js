import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { emailChange } from '../actions';

import '../styles/Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loginValidation = this.loginValidation.bind(this);
  }

  handleClick() {
    const { handleEmail, history } = this.props;
    const { email } = this.state;

    handleEmail(email);
    history.push('/carteira');
  }

  handleChange({ target }) {
    this.setState(
      {
        [target.name]: target.value,
      },
      () => {
        this.loginValidation();
      },
    );
  }

  loginValidation() {
    const { email, password } = this.state;
    let disabled = false;
    const EMAIL_VALIDATION = /^[\w]+@([\w]+\.)+[\w]{2,4}$/gi;
    const MIN_PASSWORD_LENGTH = 6;
    disabled = !(EMAIL_VALIDATION.test(email) && password.length >= MIN_PASSWORD_LENGTH);
    this.setState({ disabled });
  }

  render() {
    const { email, password, disabled } = this.state;
    return (
      <main className="login-main">
        <header className="login-header">
          <h1>Trybe Wallet</h1>
        </header>
        <form className="login-form">
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            data-testid="email-input"
            placeholder="user@email.com"
            className="login-input"
          />
          <input
            type="password"
            name="password"
            value={ password }
            onChange={ this.handleChange }
            data-testid="password-input"
            placeholder="******"
            className="login-input"
          />
          <button
            type="submit"
            disabled={ disabled }
            className="login-btn"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleEmail: (payload) => dispatch(emailChange(payload)),
});

export default connect(null, mapDispatchToProps)(Login);

Login.propTypes = {
  handleEmail: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
