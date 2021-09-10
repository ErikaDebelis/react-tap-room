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
        {props.pintsRemaining === 0 && <h4>Sold Out!</h4> }
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  pintsRemaining: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;