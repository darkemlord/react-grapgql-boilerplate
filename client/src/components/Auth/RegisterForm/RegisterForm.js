import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const RegisterForm = (props) => {
  const { setShowLogin } = props;

  const formik = useFormik({
    initialValues: initialValue(),
    validationSchema: Yup.object(
      {
        name: Yup.string().required(true),
        username: Yup.string().matches(/^[a-zA-Z0-9-]*$/).required(true),
        email: Yup.string()
          .email('email is not valid')
          .required(true),
        password: Yup.string()
          .required('la contrasena es obli')
          .oneOf([Yup.ref("confirmPassword")], 'las contras no son iguales'),
        confirmPassword: Yup.string()
          .required('la contrasena es obli')
          .oneOf([Yup.ref("password")], 'las contras no son iguales'),
      }
    ),
    onSubmit: (formValue) => {
      console.log('nice')
      console.log(formValue)
    }
  });

  return (
  <>
    <h2 className='register-form'>Sign In here</h2>
    <Form className='register-form' onSubmit={formik.handleSubmit}>
      <Form.Input
        type="text"
        placeholder="name and lastname"
        name="name"
        autoComplete="name"
        onChange={formik.handleChange}
        error={formik.errors.name}
      />

      <Form.Input
        type="text"
        placeholder="Username"
        name="username"
        autoComplete="username"
        onChange={formik.handleChange}
        error={formik.errors.username}
      />

      <Form.Input
        type="email"
        placeholder="email"
        name="email"
        autoComplete="email"
        onChange={formik.handleChange}
        error={formik.errors.email}
      />

      <Form.Input
        type="password"
        placeholder="password"
        name="password"
        autoComplete="current-password"
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Form.Input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
        autoComplete="current-password"
        onChange={formik.handleChange}
        error={formik.errors.confirmPassword}
      />

      <Button type="submit" className='btn-submit'>Sign In</Button>
    </Form>
  </>
  )
};

const initialValue = () => {
  return {
      name: "",
      username: "",
      email: "",
      password:"",
      confirmPassword: ""
    }
}

export default RegisterForm;
