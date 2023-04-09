import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  email: Yup.string().email('invalid email address format').required('Email is required'),
  password: Yup.string().min(8).matches(/^\S+$/, 'must not contain spaces').required('Password is required'),
})