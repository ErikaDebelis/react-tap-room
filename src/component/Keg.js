import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h4>Brand: {props.brand}</h4>
        <h6>Name: {props.name}</h6>
        <h6>Alcohol Content: {props.alcoholContent}</h6>
        <h6>Price: {props.price}</h6>
        <h6>Quantity: {props.quantity}</h6>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  alcoholContent: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;