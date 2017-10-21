import React from 'react';
import GoogleMapsLoader from 'google-maps';
import { connect } from 'react-redux';

const mapStateToProps = ({ position }) => ({
  position
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        map: null
      };
    }

    componentDidMount() {
      GoogleMapsLoader.KEY = 'AIzaSyCmIJEHMJa3a_uJHWhmwk-343tzf4b5chk';
      GoogleMapsLoader.load(google => {
        this.setState({
          map: new google.maps.Map(this.mapDiv, {
            center: {
              lat: 37.754709,
              lng: -122.4424069
            },
            zoom: 13,
            mapTypeId: 'hybrid',
            disableDefaultUI: true
          })
        });
      });
    }

    componentDidUpdate() {
      if (this.props.position) {
        const map = this.state.map;
        if (map) {
          map.setCenter({
            lat: this.props.position.coords.latitude,
            lng: this.props.position.coords.longitude
          })
        }
      }
    }

    render() {
      return (
        <div
          className="mapDiv"
          ref={el => { this.mapDiv = el; }}
          >
        </div>
      );
    }
  }
);
