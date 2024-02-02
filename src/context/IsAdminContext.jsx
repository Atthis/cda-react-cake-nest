import { createContext } from 'react';

export const IsAdminContext = createContext({
  isAdmin: {},
  setIsAdmin: () => {},
});
