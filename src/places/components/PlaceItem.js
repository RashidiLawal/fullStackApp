import React from "react";
import "./PlaceItem.css";

const PlaceItem = (props) => {
    
        return (
          <li className="place-item">
            <div className="place-item__image">
                <image src={props.image} alt={props.title}/>
            </div>
          </li>
        );
      
};

export default PlaceItem;
