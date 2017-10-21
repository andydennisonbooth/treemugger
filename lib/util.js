import axios from'axios';

export const getPosition = () => (
  new Promise(resolve => (
    navigator.geolocation.getCurrentPosition(resolve)
  ))
);

export const getTrees = ({ coords: { latitude, longitude } }) => (
  axios.get('https://data.sfgov.org/resource/2zah-tuvt.json', {
    params: {
      $order: `DISTANCE_IN_METERS(location, 'POINT (${longitude} ${latitude})')`,
      $limit: 10
    }
  })
);
