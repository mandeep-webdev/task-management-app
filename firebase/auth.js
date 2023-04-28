import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut as authSignOUt } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const AuthUserContext = createContext({
  authUser: null,
  loading: true,
});

export const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setAuthUser({
          userId: user.uid,
          email: user.email,
          username: user.displayName,
        });
        setLoading(false);
      } else {
        // User is signed out
        setAuthUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const signOut = () => {
    authSignOUt(auth).then(() => {
      setAuthUser(null);
      setLoading(false);
    });
  };

  return {
    authUser,
    loading,
    setAuthUser,
    signOut,
  };
};

export const AuthUserProvider = ({ children }) => {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
};
