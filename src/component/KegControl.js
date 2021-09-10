import React from 'react';
import Menu from './Menu';
import KegDetail from './KegDetail';
import Button from 'react-bootstrap/Button';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterMenu: [],
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
    }
  }

  handleAddingNewKegToMenu = (newKeg) => {
    const newMasterMenu = this.state.masterMenu.concat(newKeg);
    this.setState({masterMenu: newMasterMenu, formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterMenu.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMasterMenu = this.state.masterMenu.filter(keg => keg.id !== id);
    this.setState({
      masterMenu: newMasterMenu,
      selectedKeg: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedKeg != null) {
      currentlyVisibleState =
        <KegDetail
          keg = {this.state.selectedKeg}
          onClickingDelete = {this.handleDeletingKeg}
          onClickingEdit = {this.handleEditClick}/>
      buttonText = "Return to Menu";
    }
    else if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToMenu} />
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <Menu menu = {this.state.masterMenu} onKegSelection = {this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;