
export const getPosition = () => (
  new Promise(resolve => (
    navigator.geolocation.getCurrentPosition(resolve)
  ))
);
