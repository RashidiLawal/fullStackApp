import React, { useState, useContext } from "react";
import useForm from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import "./Auth.css";

const Auth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formState, inputHandler, setFormData] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const auth = useContext(AuthContext);

  const authSubmitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (isLoginMode) {
      try {
        const response = await fetch("http://localhost:5000/api/users/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });
        const responseDta = await response.json();

        if (!response.ok) {
          throw new Error(responseDta.message);
        }
        setIsLoading(false);
        auth.login();
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "Something went wrong. Please, try again!");
      }
    } else {
      
      try {
        const response = await fetch("http://localhost:5000/api/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
        });
        const responseDta = await response.json();

        if (!response.ok) {
          throw new Error(responseDta.message);
        }
        setIsLoading(false);
        auth.login();
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "Something went wrong. Please, try again!");
      }
    }
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
    <ErrorModal error={error} onClear={errorHandler}/>
    <Card className="authentication">
      {isLoading && <LoadingSpinner asOverlay />}
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          errorText="The Email Provided is Incorrect"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          errorText="Enter a Valid Password, at least 5 characters"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        {isLoginMode ? "SWITCH TO SIGNUP" : "SWITCH TO LOGIN"}
      </Button>
    </Card>
    </>
  );
};

export default Auth;
