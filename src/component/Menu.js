import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function Menu() {
  return (
    <React.Fragment>
      <hr/>
      {props.Menu.map((keg, index) =>
      <Keg
        brand = {keg.brand}
        name = {keg.name}
        alcoholContent = {keg.alcoholContent}
        price = {keg.price}
        key = {index} />
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  menu = PropTypes.array
}

export default Menu;