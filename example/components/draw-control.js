import React, { Component } from 'react';
import { Map, TileLayer, DrawControl } from '../../src';

export default class DrawControlExample extends Component {
  render() {
    return (
      <Map center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <DrawControl position='topright' />
      </Map>
    );
  }
}
