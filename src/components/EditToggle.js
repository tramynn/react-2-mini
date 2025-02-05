import React, { Component } from 'react';

export default class EditToggle extends Component {
  render(props) {
    return (
      <select className="dropDownContainer ml0" onChange={ e => props.updateEditStatus(e.target.value)} >
        <option value="true"> Allow Edit </option>
        <option value="false"> Disable Edit </option>
      </select>
    );
  }
}
