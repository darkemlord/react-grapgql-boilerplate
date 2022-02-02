import React, { useState, useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import client from './config/apollo';
import Auth from './pages/Auth';


function App() {
  const [auth, setAuth] = useState(undefined);
  useEffect()
  return (
    < ApolloProvider client={client}>
       { !auth ? <Auth />: <h1>Estas logueado</h1>}
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
    </ApolloProvider>
  );
}

export default App;
