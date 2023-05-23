import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(null);

  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0();

  useEffect(() => {
    console.log(`user:${user}`);
    console.log(`isAuthenticated:${isAuthenticated}`);
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ myUser, loginWithRedirect, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
