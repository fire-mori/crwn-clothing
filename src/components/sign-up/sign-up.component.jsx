import React from 'react';
import './sign-up.styles.scss';
import FromInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      displayName, email, password, confirmPassword,
    } = this.state;
    if (password !== confirmPassword) {
      alert('password don\'t match');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      displayName, email, password, confirmPassword,
    } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form
          className="sign-up-form"
          onSubmit={this.handleSubmit}
        >
          <FromInput
            label="Display Name"
            id="displayName"
            type="text"
            name="displayName"
            value={displayName}
            required
            onChange={this.handleChange}
          />
          <FromInput
            label="Email"
            id="emailSignUp"
            type="email"
            name="email"
            value={email}
            required
            onChange={this.handleChange}
          />
          <FromInput
            label="Password"
            id="passwordSignUp"
            type="password"
            name="password"
            autocomplete="new-password"
            value={password}
            required
            onChange={this.handleChange}
          />
          <FromInput
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            autocomplete="new-password"
            value={confirmPassword}
            required
            onChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign up</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
