import React from 'react';
import './sign-in.styles.scss';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FromInput
            label="Email"
            id="email"
            type="email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <FromInput
            label="Password"
            id="password"
            type="password"
            name="password"
            value={password}
            required
          />
          <CustomButton type="submit" value="Submit Form">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;