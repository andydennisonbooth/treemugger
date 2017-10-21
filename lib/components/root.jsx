import React from 'react';
import { connect, Provider } from 'react-redux';
import { updatePosition, updateTrees } from '../actions';
import Map from './map';

const mapStateToProps = ({ position }) => ({
  position
});

const mapDispatchToProps = dispatch => ({
  updatePosition: () => dispatch(updatePosition()),
  updateTrees: position => dispatch(updateTrees(position))
});

export default connect(mapStateToProps, mapDispatchToProps)(
  class extends React.Component {
    constructor(props) {
      super(props);

      this.props.updatePosition().then(
        () => this.props.updateTrees(this.props.position)
      );
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
