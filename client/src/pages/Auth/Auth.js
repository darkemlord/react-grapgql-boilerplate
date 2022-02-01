import React, { useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import icon from '../../assets/png/favicon.png'
import './Auth.scss';

export const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    < Container fluid className='auth'>
      <Image src={icon} size='small'/>
      <div className='container-form'>
        <p>Parrafito</p>
      </div>

      <div className='change-form'>
        <p>
          {showLogin ? (
            <>
              do you have not an account?
              <span onClick={() => setShowLogin(!showLogin)}>Sign In here</span>
            </>
          ): (
            <>
              Login with your account
              <span onClick={() => setShowLogin(!showLogin)}>Login</span>
            </>
          )
        }
      </p>
      </div>
    </Container>
  )
};

export default Auth;
