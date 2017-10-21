import { merge } from 'lodash';
import { RECEIVE_POSITION, RECEIVE_TREES } from './actions'

const defaultState = {
  position: null,
  trees: null
}

export default (state = defaultState, action) => {
  Object.freeze(state);
  const stateCopy = merge({}, state);

  switch (action.type) {
    case RECEIVE_POSITION:
      return merge(stateCopy, { position: action.position });

    case RECEIVE_TREES:
      return merge(stateCopy, { trees: action.trees });

    default:
      return state;
  }
}
