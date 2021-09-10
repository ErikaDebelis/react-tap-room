import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function Menu(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.menu.map((keg) =>
      <Keg
        whenKegClicked = {props.onKegSelection}
        brand = {keg.brand}
        name = {keg.name}
        alcoholContent = {keg.alcoholContent}
        price = {keg.price}
        quantity = {keg.quantity}
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