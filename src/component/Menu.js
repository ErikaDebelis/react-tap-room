import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function Menu() {
  return (
    <React.Fragment>
      <hr/>
      {props.Menu.map((keg) =>
      <Keg
        brand = {keg.brand}
        name = {keg.name}
        alcoholContent = {keg.alcoholContent}
        price = {keg.price}
        id = {keg.id}
        key = {keg.id}/>
      )}
    </React.Fragment>
  );
}

Menu.propTypes = {
  menu: PropTypes.array,
  onKegSelection:PropTypes.func
}

export default Menu;