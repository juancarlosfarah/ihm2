import React, { Component } from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';

class NewMember extends Component {
  static styles = {
    root: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  };

  state = { name: '', id: '' };

  handleChangeName = (event) => {
    const { target: { value } } = event;
    this.setState({ name: value });
  };

  handleChangeId = (event) => {
    const { target: { value } } = event;
    this.setState({ id: value });
  };

  renderTextFields() {
    const { name, id } = this.state;
    return [
      <TextField
        key="name"
        label="Name"
        color="secondary"
        value={name}
        onChange={this.handleChangeName}
      />,
      <TextField
        key="id"
        label="ID"
        color="secondary"
        value={id}
        onChange={this.handleChangeId}
      />
    ];
  }

  handleClickClear = () => {
    this.setState({
      name: '',
      id: '',
    });
  };

  handleClickAdd = () => {
    const { currentMembers, setCurrentMembers, setExpanded } = this.props;
    const { name, id } = this.state;
    const newMember = { name, id };
    const newMembers = [ ...currentMembers, newMember ];
    setCurrentMembers(newMembers);
    setExpanded(false);
  };

  render() {
    const { classes } = this.props;
    const { name, id } = this.state;

    const addDisabled = !(name && id);
    const clearDisabled = !name && !id;

    return (
      <div className={classes.root}>
        { this.renderTextFields() }
        <Button
          color="secondary"
          variant="outlined"
          onClick={this.handleClickClear}
          disabled={clearDisabled}
        >
          Clear
        </Button>
        <Button
          color="secondary"
          variant="contained"
          disabled={addDisabled}
          onClick={this.handleClickAdd}
        >
          Add
        </Button>
      </div>
    );
  }
}

export default withStyles(NewMember.styles)(NewMember);
