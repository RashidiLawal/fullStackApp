import React, {useReducer} from "react";
import "./Input.css";

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {

            }
        default:
            return state;
    }
}

const Input = (props) => {
  useReducer(inputReducer)
  const onchangeHandler = event => {};

  const element =
    props.element === "input" ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={onchangeHandler}/>
    ) : (
      <textarea id={props.id} rows={props.row || 3} onChange={onchangeHandler}/>
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
