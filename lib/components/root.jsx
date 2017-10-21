import React from 'react';
import { connect, Provider } from 'react-redux';
import { updatePosition } from '../actions';
import Map from './map';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  updatePosition: () => dispatch(updatePosition())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.props.updatePosition();
    }

    render() {
      return (
        <Provider store={this.props.store}>
          <Map/>
        </Provider>
      );
    }
  }
);
