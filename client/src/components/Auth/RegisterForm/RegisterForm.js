import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik'

export const RegisterForm = (props) => {
  const { setShowLogin } = props;

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password:"",
      confirmPassword: ""
    },

    validationSchema: null,
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
      />

      <Form.Input
        type="text"
        placeholder="Username"
        name="username"
        autoComplete="username"
        onChange={formik.handleChange}
      />

      <Form.Input
        type="email"
        placeholder="email"
        name="email"
        autoComplete="email"
        onChange={formik.handleChange}
      />

      <Form.Input
        type="password"
        placeholder="password"
        name="password"
        autoComplete="current-password"
        onChange={formik.handleChange}
      />

      <Form.Input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
        autoComplete="current-password"
        onChange={formik.handleChange}
      />

      <Button type="submit" className='btn-submit'>Sign In</Button>
    </Form>
  </>
  )
};

export default RegisterForm;
