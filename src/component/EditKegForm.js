import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      brand: event.target.brand.value,
      name: event.target.name.value,
      alcoholContent: event.target.alcoholContent.value,
      price: event.target.price.value,
      pintsRemaining: event.target.pintsRemaining.value,
      id: keg.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {handleEditKegFormSubmission}
      buttonText = "Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
}

export default EditKegForm;