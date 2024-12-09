import React, {useState, useContext} from "react";
import useForm from "../../shared/hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Button from '../../shared/components/FormElements/Button'
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";
import "./Auth.css";

const Auth = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);
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
    if (isLoginMode) { 
    } else {
      try {
        const response = await fetch('http://localhost:5000/api/users/signup', {
          method:'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          })
        });
        const responseDta = await response.json();
        console.log(responseDta);
        
      } catch (error) {
        console.log(error);
      }
     
    }
    // console.log(formState.inputs); // send this to the Backend
    auth.login();
  };

  const switchModeHandler = () => {
    if (!isLoginMode) {
        setFormData( {
            ...formState.inputs,
            name: undefined
        }, formState.inputs.email.isValid && formState.inputs.password.isValid);
    } else {
        setFormData( {
            ...formState.inputs,
            name: {
                value:"",
                isValid: false
            }
        }, false)
    }
    setIsLoginMode(prevMode => !prevMode)
  }
  return (
    <Card className="authentication">
        <h2>
            Login Required
        </h2>
        <hr />
      <form onSubmit={authSubmitHandler}>
        {
        !isLoginMode && <Input 
        element="input"
        id="name"
        type="text"
        label="Your Name"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a name"
        onInput={inputHandler}
        />
        }
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
        <Button type="submit" disabled={!formState.isValid} >
            { isLoginMode ? "LOGIN" : "SIGNUP" }
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler} >
        { isLoginMode ? "SWITCH TO SIGNUP" : "SWITCH TO LOGIN" }
      </Button>
    </Card>
  );
};

export default Auth;
