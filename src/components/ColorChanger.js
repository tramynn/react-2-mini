import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render(props) {
    return (
      <select className="dropDownContainer" onChange={ e => props.updateColor(e.target.value) }>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    );
  }
}
