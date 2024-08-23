import React from "react";
import useForm from "../../shared/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../shared/util/validators";
import Button from '../../shared/components/FormElements/Button'
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler] = useForm({
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the Backend
  };
  return (
    <Card className="authentication">
        <h2>
            Login Required
        </h2>
        <hr />
      <form className="place-form" onSubmit={authSubmitHandler}>
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
            LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
