import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
    <h4>{props.brand}</h4>
    <h6>{props.name}</h6>
    <h6>{props.alcoholContent}</h6>
    <h6>{props.price}</h6>
    </React.Fragment>
  )
}

Keg.PropTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default Keg;