import React from 'react';
import './LoginForm.scss';
import { Form, Button} from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email().required(true),
      password: Yup.string().required(true)
    }),
    onSubmit: (formData) => {
      console.log(formData)
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
     />

    <Form.Input
        type='password'
        placeholder='password'
        name='password'
        autoComplete='password'
        value={formik.values.password}
        onChange={formik.handleChange}
    />
    <Button type='submit' className='btn-submit'>Login</Button>
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
