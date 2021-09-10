import React from 'react';
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

export default EditKegForm;