import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser, loginUser } from "redux/authOperations";
import { registerSchema } from "services/registerSchema";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from 'react-bootstrap/Button';

const initialValues = {
  email: '',
  password: '',
}

export const EmailForm = () => {
  const dispatch = useDispatch();
  const [toggleForm, setToggleForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = async (values) => {
    toggleForm ? dispatch(loginUser(values)) : dispatch(registerUser(values));
  };

  return (
    <div className="email-form">
      <h2 className="email-form__title">{toggleForm ? 'Login' : 'Register'}</h2>

      <div className="email-form-toggle">
        <span>{toggleForm ? "Don't have an account?" : 'Already have an account?'}</span>
        <span className="email-form-toggle--accent" onClick={() => setToggleForm(prevState => !prevState)}>
          { toggleForm ? 'Create account' : 'Login' }
        </span>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={submitHandler}
      >
        {({ values, handleChange, errors, isValid, dirty }) => (
          <Form className="email-form-form">

            <div className="email-form-form__wrapper">
              <Field className="email-form-form__input" name="email" type="email" placeholder="email" value={values.email} onChange={handleChange} error={errors.email} />
              <ErrorMessage name="email" render={msg => <span className="email-form-form__error">{msg}</span>} />
            </div>

            <div className="email-form-form__wrapper">
              <Field className="email-form-form__input" name="password" type={showPassword ? 'text' : 'password'} placeholder="password" value={values.password} onChange={handleChange} error={errors.email} />
              <ErrorMessage name="password" render={msg => <span className="email-form-form__error">{msg}</span>} />
              <button className="email-form-form__password-btn" type="button" onClick={() => setShowPassword(prevState => !prevState)}>
                {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} /> }
              </button>
            </div>

            <Button type="submit" disabled={!isValid || !dirty} variant="primary" size="lg" block="true">
              {toggleForm ? 'Login' : 'Register'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}