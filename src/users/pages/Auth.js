import React from 'react'
import useForm from '../../shared/hooks/form-hook'
import { VALIDATOR_EMAIL, VALIDATOR_MIN } from '../../shared/util/validators'
// import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'


const Auth = () => {

    const [formState, inputHandler] = useForm({
        email: {
            value:"",
            isValid: false
        },
        password: {
            value:"",
            isValid: false
        }
    })
    
    const authenticationHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);// send this to the Backend
    }
  return (
    <form className="place-form" onSubmit={authenticationHandler}>
        <Input
            id="email"
            element="input"
            type="text"
            label="Email"
            errorText="The Email Provided is Incorrect"
            validators={[VALIDATOR_EMAIL()]}
            onInput={inputHandler}
        />
        <Input
            id="password"
            element="input"
            type="text"
            label="Password"
            errorText="You Have Enter a Wrong Password"
            validators={[VALIDATOR_MIN(7)]}
            onInput={inputHandler}
        />
    </form>
  )
}

export default Auth