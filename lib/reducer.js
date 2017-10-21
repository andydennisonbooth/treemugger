import { merge } from 'lodash';
import { RECEIVE_POSITION } from './actions'

const defaultState = {
  position: null
}

export default (state, action) => {
  Object.freeze(state);
  const stateCopy = merge({}, state);

  switch (action.type) {
    case RECEIVE_POSITION:
      return merge(stateCopy, { position: action.position });

    default:
      return state;
  }
}
