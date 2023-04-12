import { Formik, Form, Field, ErrorMessage } from "formik";
import { tripSchema } from "services/validationConfig";
import Button from 'react-bootstrap/Button';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from "react";
import { FcCalendar } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { addTrip } from "redux/trips/tripsOperations";

const initialValues = {
  autoModel: '',
  autoNumber: '',
  date: '',
  totalPlaces: '',
  from: '',
  to: ''
}

export const TripForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [showPicker, setShowPicker] = useState(false);

  const submitHandler = (values) => {
    const newTrip = {
      ...values,
      totalPlaces: +values.totalPlaces,
      freePlaces: +values.totalPlaces
    };
    dispatch(addTrip(newTrip));
    onClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={tripSchema}
      onSubmit={submitHandler}
    >
      {({ values, handleChange, setFieldValue, isValid, dirty }) => (
        <Form className="trip-form">
          <div className="trip-form__wrapper">
            <span className="trip-form__label">Date:</span>
            <div className="trip-form__date-wrapper">
              <Field className="trip-form__input" placeholder="11.11.2021" name="date" type="text" value={values.date} onChange={handleChange} />
              <button type="button" className="trip-form__date-btn" onClick={() => setShowPicker(prevState => !prevState)}>
                <FcCalendar size={20} />
              </button>
              {showPicker
                ? <DayPicker mode="single" onSelect={(e) => { setFieldValue('date', e.toLocaleDateString()); setShowPicker(false) }} className='trip-form__rdp' /> 
                : null
              }
            </div>
            <ErrorMessage name="date" render={msg => <span className="trip-form__error">{msg}</span>} />
          </div>

          <div className="trip-form__wrapper">
            <span className="trip-form__label">Model auto: </span>
            <Field className="trip-form__input" placeholder="Mersedes Sprinter" name="autoModel" type="text" value={values.autoModel} onChange={handleChange} />
            <ErrorMessage name="autoModel" render={msg => <span className="trip-form__error">{msg}</span>} />
          </div>

          <div className="trip-form__wrapper">
            <span className="trip-form__label">Auto number: </span>
            <Field className="trip-form__input" placeholder="AA1234BB" name="autoNumber" type="text" value={values.autoNumber} onChange={handleChange} />
            <ErrorMessage name="autoNumber" render={msg => <span className="trip-form__error">{msg}</span>} />
          </div>

          <div className="trip-form__wrapper">
            <span className="trip-form__label">From: </span>
            <Field className="trip-form__input" placeholder="City name" name="from" type="text" value={values.from} onChange={handleChange} />
            <ErrorMessage name="from" render={msg => <span className="trip-form__error">{msg}</span>} />
          </div>

          <div className="trip-form__wrapper">
            <span className="trip-form__label">To: </span>
            <Field className="trip-form__input" placeholder="City name" name="to" type="text" value={values.to} onChange={handleChange} />
            <ErrorMessage name="to" render={msg => <span className="trip-form__error">{msg}</span>} />
          </div>

          <div className="trip-form__wrapper">
            <span className="trip-form__label">Amount of places: </span>
            <Field className="trip-form__input" placeholder="20" name="totalPlaces" type="text" value={values.totalPlaces} onChange={handleChange} />
            <ErrorMessage name="totalPlaces" render={msg => <span className="trip-form__error">{msg}</span>} />
          </div>

          <div className="trip-form__actions">
            <Button type="submit" className="trip-form__add-btn" disabled={!dirty || !isValid} variant="primary">Add trip</Button>
            <Button type="button" className="trip-form__cancel-btn" variant="light" onClick={onClose}>Cansel</Button> 
          </div>

        </Form>
      )}
    </Formik>
  );
};