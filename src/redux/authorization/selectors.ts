import { createSelector } from 'reselect';

import type { RootState } from '@/redux/store';

export const authorizationsStateSelector = ({ auth }: RootState) => auth;

export const userSelector = createSelector(authorizationsStateSelector, (state) => state.user);

export const userLoadingSelector = createSelector(
  authorizationsStateSelector,
  (state) => state.isLoading,
);
