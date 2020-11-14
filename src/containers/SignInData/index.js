import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/actions";
import Input from "../../components/UI/Input";
import "./index.css";

class SignIn extends Component {
  state = {
    signInForm: {
      name: {
        label: "Username",
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Введите имя",
        },
        value: "",
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        label: "Password",
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Введите пароль",
        },
        value: "",
        validation: {
          required: true,
          minLength: 8,
          consist: /^(?=.*[a-z])(?=.*\d)/,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    const reg = /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (rules.required) {
      isValid = value.trim("") !== "" && isValid;
    }

    if (rules.email) {
      isValid = reg.test(value) && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= 8 && isValid;
    }

    if (rules.consist) {
      isValid = rules.consist.test(value) && isValid;
    }

    return isValid;
  };

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedSignInForm = { ...this.state.signInForm };
    const updatedInput = updatedSignInForm[inputIdentifier];
    updatedInput.value = event.target.value;
    updatedInput.touched = true;
    updatedInput.valid = this.checkValidity(
      updatedInput.value,
      updatedInput.validation
    );
    updatedSignInForm[inputIdentifier] = updatedInput;
    let formIsValid = true;
    for (let key in updatedSignInForm) {
      formIsValid = updatedSignInForm[key].valid && formIsValid;
    }
    this.setState({ signInForm: updatedSignInForm, formIsValid: formIsValid });
  };

  signIn = () => {
    this.props.onSignInUser(
      this.state.signInForm.name.value,
      this.state.signInForm.password.value
    );
    this.props.history.push("/");
  };

  render() {
    let formElementsArray = [];
    for (let key in this.state.signInForm) {
      formElementsArray.push({
        id: key,
        config: this.state.signInForm[key],
      });
    }
    let inputs = formElementsArray.map((input) => (
      <Input
        key={input.id}
        elConfig={input.config.elementConfig}
        label={input.config.label}
        elType={input.config.elementType}
        value={input.config.value}
        valid={!input.config.valid}
        touched={input.config.touched}
        changed={(event) => this.inputChangedHandler(event, input.id)}
      />
    ));
    return (
      <form>
        <div className="sign_in_container">
          <div className="wrapper">
            <h4>Sign In</h4>
            {inputs}
            <button
              disabled={!this.state.formIsValid}
              style={{ marginTop: "10px" }}
              type="button"
              className="btn btn-success"
              onClick={this.signIn}
            >
              Войти
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignInUser: (email, password) =>
      dispatch(actions.signInUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
