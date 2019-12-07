import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function subscription(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@post/DELETE_POST_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@post/DELETE_POST_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@post/DELETE_POST_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
