import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { deletePostSuccess, deletePostFailure } from './actions';

export function* deletePost({ payload }) {
  try {
    yield call(api.delete, `post/${payload.id}`);

    yield put(deletePostSuccess());
  } catch (err) {
    Alert.alert(
      'Falha ao excluir',
      'Houve uma falha ao realizar a exclusão deste post.'
    );
    yield put(deletePostFailure());
  }
}

export default all([takeLatest('@post/DELETE_POST_REQUEST', deletePost)]);
