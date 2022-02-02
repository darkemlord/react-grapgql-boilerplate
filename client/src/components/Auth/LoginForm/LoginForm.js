import React, { useState } from 'react';
import './LoginForm.scss';
import { Form, Button} from 'semantic-ui-react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../gql/user'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { setToken } from '../../../utils/token';
import useAuth from '../../../hooks/useAuth'
export const LoginForm = () => {
  const [ error , setError ] = useState('');
  const [ login ] = useMutation(LOGIN)

  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email(true).required(true),
      password: Yup.string().required(true)
    }),
    onSubmit: async (formData) => {
      setError('');
      try {
        const { data } = await login({
          variables: {
            input: formData
          }
        })
        const { token } = data.login
        setToken(token);
        setUser(token);
      } catch (err) {
        setError(err.message)
      }
    }
  });

  return(
   <Form className='login-form' onSubmit={formik.handleSubmit}>
     <h2>Login and share your pictures!</h2>
    <Form.Input
        type='text'
        placeholder='email'
        name='email'
        autoComplete='email'
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
     />

    <Form.Input
        type='password'
        placeholder='password'
        name='password'
        autoComplete='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
    />
    <Button type='submit' className='btn-submit'>Login</Button>
    { error && <p className='error-submit'>{error}</p> }
   </Form>
  );
};

const initialValues = () => {
  return {
    email: "",
    password: "",
  }
}

export default LoginForm;
