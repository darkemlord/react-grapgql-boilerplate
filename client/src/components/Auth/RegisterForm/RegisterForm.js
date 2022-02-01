import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../../gql/user'
import * as Yup from 'yup';

export const RegisterForm = (props) => {
  const { setShowLogin } = props;

  const [register] = useMutation(REGISTER_USER)

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
          .oneOf([Yup.ref("confirmPassword")], 'password does not match'),
        confirmPassword: Yup.string()
          .required('la contrasena es obli')
          .oneOf([Yup.ref("password")], 'password does not match'),
      }
    ),
    onSubmit: async (formData) => {
      try {
        const newUser = formData;
        delete newUser.confirmPassword;

        const result = await register({
          variables: {
            input: newUser
          }
        })
        console.log(result);
      } catch(err) {
        console.log(err.message)
      }
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
        error={formik.errors.password && true}
      />

      <Form.Input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
        autoComplete="current-password"
        onChange={formik.handleChange}
        error={formik.errors.confirmPassword && true}
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
