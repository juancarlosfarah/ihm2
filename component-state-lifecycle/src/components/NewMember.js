import React, { Component } from 'react';
import { TextField, Button, withStyles } from '@material-ui/core';

class NewMember extends Component {
  static styles = {
    root: {
      display: 'flex',
      justifyContent: 'space-around',
    }
  };

  state = {
    name: '',
    id: '',
  };

  handleChangeName = ({ target: { value } }) => {
    this.setState({
      name: value,
    })
  };

  handleChangeId = ({ target: { value } }) => {
    this.setState({
      id: value,
    })
  };

  handleClickClear = () => {
    this.setState({
      name: '',
      id: '',
    });
  };

  handleClickAdd = () => {
    const { currentMembers, setMembers, setExpanded } = this.props;
    const { name, id } = this.state;
    const newMember = { name, id };
    const newMembers = [ ...currentMembers, newMember ];
    setMembers(newMembers);
    setExpanded(false);
  };

  render() {
    const { classes } = this.props;
    const { name, id } = this.state;

    const addDisabled = !name || !id;
    const clearDisabled = !name && !id;

    return (
      <div
        className={classes.root}
      >
        <TextField
          label="Name"
          color="secondary"
          value={name}
          onChange={this.handleChangeName}
        />
        <TextField
          label="ID"
          color="secondary"
          value={id}
          onChange={this.handleChangeId}
        />
        <Button
          color="secondary"
          variant="outlined"
          onClick={this.handleClickClear}
          disabled={clearDisabled}
        >
          Clear
        </Button>
        <Button
          color="primary"
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

const StyledComponent = withStyles(NewMember.styles)(NewMember);

export default StyledComponent;
