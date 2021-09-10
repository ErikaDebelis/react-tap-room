import React from 'react';
import Menu from './Menu';
import Button from 'react-bootstrap/Button';

class KegControl extends React.Component {

  constructor(prop) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm />
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <Menu />
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}