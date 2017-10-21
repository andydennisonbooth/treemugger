import React from 'react';
import axios from 'axios';
import Map from './map';

const getCurrentPosition = () => (
  new Promise(resolve => {
    window.navigator.geolocation.getCurrentPosition(resolve);
  }
));

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    getCurrentPosition()
    .then(({ coords: { latitude, longitude } }) => (
      axios.get('https://data.sfgov.org/resource/2zah-tuvt.json', {
        params: {
          $order: `DISTANCE_IN_METERS(location, 'POINT (${longitude} ${latitude})')`,
          $limit: 10
        }
      })
    )).then(({ data }) => {
      console.log(data);
      this.setState({ data });
    });
  }

  render() {
    return (
      <div>
        <Map/>
      </div>
    );
  }
}
