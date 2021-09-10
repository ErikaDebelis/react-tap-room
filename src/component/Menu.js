import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function Menu() {
  return (
    <React.Fragment>
      {props.Menu.map((keg) =>
      <Keg
        brand = {keg.brand}
        name = {keg.name}
        alcoholContent = {keg.alcoholContent}
        price = {keg.price} />
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  menu = PropTypes.array
}

export default Menu;