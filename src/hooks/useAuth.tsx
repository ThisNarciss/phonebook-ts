import { useSelector } from 'react-redux';
import {
  selectErrorAuth,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const error = useSelector(selectErrorAuth);
  return { isLoggedIn, isRefreshing, user, error };
};
