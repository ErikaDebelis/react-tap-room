import React from 'react';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit, onClickingSellPint } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h4>Brand: {keg.brand}</h4>
      <h4>Name: {keg.name}</h4>
      <h4>Alcohol Content: {keg.alcoholContent}</h4>
      <h4>Price: {keg.price}</h4>
      <h6>{keg.pintsRemaining} pints remaining</h6>
      {keg.pintsRemaining > 0 &&
        <Button variant="outline-success" onClick={() => onClickingSellPint(keg.id)} >Sell Pint</Button>
      }
      {keg.pintsRemaining === 0 &&
        <h6>Sold Out!</h6>
      }
      <Button variant="outline-warning" size="sm" onClick = {props.onClickingEdit}>Update Keg</Button>
      <Button variant="outline-danger" size="sm" onClick = {() => onClickingDelete(keg.id) }>Delete Keg</Button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSellPint: PropTypes.func
};

export default KegDetail;