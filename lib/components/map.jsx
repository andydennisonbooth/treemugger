import React from 'react';

export default class extends React.Component {
  render() {
    // <iframe
    //   ref={el => { this.mapFrame = el; }}
    //   width={window.innerWidth}
    //   height={window.innerHeight}
    //   frameBorder="0"
    //   allowFullScreen
    //   src="https://www.google.com/maps/embed/v1/view?zoom=11&center=37.7749%2C-122.4194&key=AIzaSyA3ZCGG6YT105EPvKzM6a4dVgjQrDmEsbk">
    // </iframe>
    return (
      <div
        ref={el => { this.mapDiv = el; }}
        >
      </div>
    );
  }
}
