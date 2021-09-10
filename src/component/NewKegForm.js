import React from 'react';
import { v4 } from 'uuid';

function NewKegForm() {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      brand: event.target.brand.value,
      name: event.target.name.value,
      alcoholContent: event.target.alcoholContent.value,
      price: event.target.price.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
      <input
        type="text"
        name="brand"
        placeholder="Brand" />
      <input
        type="text"
        name="name"
        placeholder="Name" />
      <input
        type="text"
        name="alcoholContent"
        placeholder="Alcohol Content" />
      <input
        type="text"
        name="price"
        placeholder="Price" />
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;