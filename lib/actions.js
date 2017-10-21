import * as util from './util';

export const RECEIVE_POSITION = 'RECEIVE_POSITION';

const receivePosition = position => ({
  type: RECEIVE_POSITION,
  position
});

export const updatePosition = () => dispatch => (
  util.getPosition().then(
    position => dispatch(receivePosition(position))
  )
);
