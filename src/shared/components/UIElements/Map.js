import React, { useRef, useEffect} from 'react';
import { CSSTransition } from "react-transition-group";



import './Map.css';

const Map = props => {
  const mapRef = useRef();
  
  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
     center:center,
      zoom:zoom,
      mapId:'f09499750268525b'
    });
    
  
    // new window.google.maps.Marker({ position: center, map: map });
    new window.google.maps.marker.AdvancedMarkerElement({ position: center, map: map });

  }, [center, zoom]);  

  return (
    <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        nodeRef={mapRef}
      >
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
    </CSSTransition>
  );
};

export default Map;
