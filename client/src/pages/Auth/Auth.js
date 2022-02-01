import React, { useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import icon from '../../assets/png/favicon.png'
import './Auth.scss';

export const Auth = () => {
  return (
    < Container fluid className='auth'>
      <Image src={icon} size='small'/>
      <div className='container-form'>
        <p>Parrafito</p>
      </div>

      <div className='change-form'>
        <p>do you have not an account?</p>
      </div>
    </Container>
  )
};

export default Auth;
