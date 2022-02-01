import React from 'react';
import './LoginForm.scss';
import { Form, Button} from 'semantic-ui-react';

export const LoginForm = () => {
  return(
   <Form className='login-form'>
     <h2>Login and share your pictures!</h2>
    <Form.Input
        type='text'
        placeholder='email'
        name='email'
        autoComplete='email'
     />

    <Form.Input
        type='password'
        placeholder='password'
        name='password'
        autoComplete='password'
    />
    <Button type='submit' className='btn-submit'>Login</Button>
   </Form>
  );
};

export default LoginForm;
