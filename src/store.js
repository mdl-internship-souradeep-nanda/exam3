import { createStore } from 'redux';

import refreshAction from './Reducers/RefreshReducer';

export default createStore(
  refreshAction,
  {},
);
