import React from 'react';
import useAuth from '../../hooks/useAuth';
export const Home = () => {
  const auth = useAuth();
  console.log(auth)
  return <div>
    <h1>estamos en la home</h1>
  </div>;
};

export default Home;
