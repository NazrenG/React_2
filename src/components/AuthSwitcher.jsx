import { Component } from "react";
import SignIn from "./SignInForm";
import SignUp from "./SignUpForm";

class AuthSwitch extends Component {
  state = {
    isCheckSignIn: false,
    isCheckSignUp: false,
  };

  switchSignIn = () => {
    this.setState((prevState) => ({
      isCheckSignIn: !prevState.isCheckSignIn,
      isCheckSignUp: false,
    }));
  };

  switchSignUp = () => {
    this.setState((prevState) => ({
      isCheckSignUp: !prevState.isCheckSignUp,
      isCheckSignIn: false,
    }));
  };

  render() {
    const { isCheckSignIn, isCheckSignUp } = this.state;
    return (
      <div>
        <h1>Authorization app</h1>
        <button onClick={this.switchSignIn}>Sign In</button>
        <button onClick={this.switchSignUp}>Sign Up</button>

        {isCheckSignIn && <SignIn />}
        {isCheckSignUp && <SignUp />}
      </div>
    );
  }
}

export default AuthSwitch;
