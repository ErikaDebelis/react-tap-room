import React from 'react';
import { v4 } from 'uuid';

function NewKegForm() {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
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

export default NewKegForm;