import React from 'react';
import PropTypes from "prop-types";
import Keg from './Keg';

function KegDetail(props) {
  const { keg } = props;

  return(
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h4>keg.brand</h4>
      <h4>keg.name</h4>
      <h4>keg.alcoholContent</h4>
      <h4>keg.price</h4>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;