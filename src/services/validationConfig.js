import * as Yup from 'yup';

export const registerSchema = Yup.object().shape({
  email: Yup.string().email('invalid email address format').required('Email is required'),
  password: Yup.string().min(8).matches(/^\S+$/, 'must not contain spaces').required('Password is required'),
});

export const tripSchema = Yup.object().shape({
  autoModel: Yup.string().min(4).required('Model is required'),
  autoNumber: Yup.string().length(8).matches(/[A-Za-z0-9]/).required('Number is required'),  
  date: Yup.string().length(10).matches(/[0-9]/).required('Date is required'),
  totalPlaces: Yup.number().min(1).integer().required('Places amount is required'),
  from: Yup.string().min(3).required('Departure point is required'),
  to: Yup.string().min(3).required('Arrival point is required'),
})