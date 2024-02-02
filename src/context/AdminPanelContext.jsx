import { createContext } from 'react';

export const AdminPanelContext = createContext({
  adminPanelState: {},
  setAdminPanelState: () => {},
});
