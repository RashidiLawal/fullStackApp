import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import './PlaceForm.css'
import useForm from "../../shared/hooks/form-hook";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "One of the most common sky scrappers in the world.",
    imageUrl:
      "https://www.findingtheuniverse.com/wp-content/uploads/2020/07/Empire-State-Building-view-from-uptown_by_Laurence-Norah-2.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Burj Khalifa",
    description: "One of the most common sky scrappers in the world.",
    imageUrl:
      "https://media.istockphoto.com/id/916091586/photo/burj-khalifa-dubai.jpg?s=612x612&w=0&k=20&c=VOBvv191Fippjuesf8ucODgC7AJMOEsY4Kf2XQ45puI=",
    address:
      "1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab Emirates",
    location: {
      lat: 25.197197,
      lng: 55.2743764,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const { placeId } = useParams();
  // or const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm({
    title: {
        value: '',
        isValid: false
    },
    description: {
        value: '',
        isValid: false
    }
  }, false)

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  setFormData()

  const placeUpdateSubmitHandler = event => {
     event.preventDefault();
     console.log(formState.inputs);
  }

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find the place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        type="text"
        id="title"
        element="input"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialIsvalid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialIsvalid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
