import React from 'react';
import Menu from './Menu';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
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
    this.setState({
      editing: true
    });
  }

  handleEditingKegInMenu = (kegToEdit) => {
    const editedMasterMenu = this.state.masterMenu
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterMenu: editedMasterMenu,
      editing: false,
      selectedKeg: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = 
      <EditKegForm 
        keg = {this.state.selectedKeg}
        onEditingKeg = {this.handleEditingKegInMenu}/>
      buttonText = "Return to Menu";
    }
    else if(this.state.selectedKeg !== null) {
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
        <Button variant="outline-secondary" size="md" onClick = {this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

export default KegControl;