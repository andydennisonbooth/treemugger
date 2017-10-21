import React from 'react';
import GoogleMapsLoader from 'google-maps';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

const mapStateToProps = ({ position, trees }) => ({
  position, trees
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        google: null,
        map: null,
        markers: []
      };
    }

    componentDidMount() {
      GoogleMapsLoader.KEY = 'AIzaSyCmIJEHMJa3a_uJHWhmwk-343tzf4b5chk';
      GoogleMapsLoader.load(google => {
        this.setState({
          google,
          map: new google.maps.Map(this.mapDiv, {
            center: {
              lat: 37.754709,
              lng: -122.4424069
            },
            zoom: 13,
            mapTypeId: 'satellite',
            disableDefaultUI: true
          })
        });
      });
    }

    componentDidUpdate(prevProps) {
      const map = this.state.map;
      if (map) {
        // Update map position on location update
        if (!isEqual(this.props.position, prevProps.position)) {
          map.setCenter({
            lat: this.props.position.coords.latitude,
            lng: this.props.position.coords.longitude
          });
          map.setZoom(18);
        }

        // Update map markers on tree data update
        if (!isEqual(this.props.trees, prevProps.trees)) {
          // Remove old markers
          this.state.markers.forEach(marker => {
            marker.setMap(null);
            marker = null;
          });

          // Populate new markers
          const newMarkers = [];
          this.props.trees.forEach(tree => {
            newMarkers.push(new google.maps.Marker({
              position: {
                lat: parseFloat(tree.latitude),
                lng: parseFloat(tree.longitude)
              },
              title: tree.qspecies,
              map
            }));
          });

          this.setState({ markers: newMarkers });
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
