import { storageService } from '@/services';

const getInitialReduxState = () => {
  return {
    auth: {
      user: storageService.getUser(),
      isLoading: false,
    },
  };
};

export default getInitialReduxState;
