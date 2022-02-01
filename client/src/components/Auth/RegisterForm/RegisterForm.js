import React from 'react';
import { Form, Button } from 'semantic-ui-react';

export const RegisterForm = (props) => {
  const { setShowLogin } = props;
  return (
  <>
    <h2 className='register-form'>Sign In here</h2>
    <Form className='register-form'>
      <Form.Input
        type="text"
        placeholder="name and lastname"
        name="name"
      />

      <Form.Input
        type="text"
        placeholder="Username"
        name="username"
      />

      <Form.Input
        type="email"
        placeholder="email"
        name="email"
      />

      <Form.Input
        type="password"
        placeholder="password"
        name="password"
      />

      <Form.Input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
      />

      <Button className='btn-submit'>Sign In</Button>
    </Form>
  </>
  )
};

export default RegisterForm;
