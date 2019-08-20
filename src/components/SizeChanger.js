import React, { Component } from 'react';

export default class ColorChanger extends Component {
  render(props) {
    return (
      <select className="dropDownContainer" onChange={ e => props.updateSize(e.target.value)} >
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    );
  }
}
