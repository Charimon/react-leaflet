import { PropTypes } from 'react';
import { control } from 'leaflet';
import DR from 'leaflet-draw';

import MapControl from './MapControl';

export default class DrawControl extends MapControl {
  // static propTypes = {
  //   polygon: PropTypes.string,
  //   polyline: PropTypes.string,
  //   circle: PropTypes.string,
  //   rectangle: PropTypes.string,
  //   marker: PropTypes.string
  // };

  componentWillMount() {
    this.leafletElement = new L.Control.Draw(this.props);
    // this.leafletElement = control.zoom(this.props);
  }
}
