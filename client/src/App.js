import React, { useState, useEffect, useMemo } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import client from './config/apollo';
import Auth from './pages/Auth';
import { getToken } from './utils/token';
import AuthContext from './context/AuthContext';
import Navigation from './routes/Navigation';


function App() {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();
    if(!token){
      setAuth(null)
    } else {
      setAuth(token)
    }
  }, []);

  const logout = () => {
    console.log('cerrar sesion')
  }

  const setUser = (user) => {
    setAuth(user)
  }

  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser
    }),
    [auth]
  )
  return (
    < ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        { !auth ? <Auth />: <Navigation />}
        < ToastContainer
            position='top-right'
            autoClose={2000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
        </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
