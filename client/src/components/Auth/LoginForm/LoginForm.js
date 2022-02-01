import React from 'react';
import './LoginForm.scss';
import { Form, Button} from 'semantic-ui-react';

export const LoginForm = () => {
  return(
   <Form className='login-form'>
    <Form.Input
        type='text'
        placeholder='email'
        name='email'
     />

    <Form.Input
        type='password'
        placeholder='password'
        name='password'
    />

   </Form>
  );
};

export default LoginForm;
