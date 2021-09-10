import React from 'react';
import PropTypes from "prop-types";
import Keg from './Keg';
import Button from 'react-bootstrap/Button';

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h4>Brand: {keg.brand}</h4>
      <h4>Name: {keg.name}</h4>
      <h4>Alcohol Content: {keg.alcoholContent}</h4>
      <h4>Price: {keg.price}</h4>
      <Button variant="outline-warning" size="sm" onClick = {props.onClickingEdit}>Update Keg</Button>
      <Button variant="outline-danger" size="sm" onClick = {() => onClickingDelete(keg.id) }>Delete Keg</Button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;