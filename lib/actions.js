import * as util from './util';

export const RECEIVE_POSITION = 'RECEIVE_POSITION';
export const RECEIVE_TREES = 'RECEIVE_TREES';

const receivePosition = position => ({
  type: RECEIVE_POSITION,
  position
});

const receiveTrees = trees => ({
  type: RECEIVE_TREES,
  trees
})

export const updatePosition = () => dispatch => (
  util.getPosition().then(
    position => dispatch(receivePosition(position))
  )
);

export const updateTrees = (position) => dispatch => (
  util.getTrees(position).then(
    ({ data }) => dispatch(receiveTrees(data))
  )
);
