export function deletePostRequest(id) {
  return {
    type: '@post/DELETE_POST_REQUEST',
    payload: { id },
  };
}

export function deletePostSuccess() {
  return {
    type: '@post/DELETE_POST_SUCCESS',
  };
}

export function deletePostFailure() {
  return {
    type: '@post/DELETE_POST_FAILURE',
  };
}
