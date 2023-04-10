import { useState } from "react";
import { useDispatch } from "react-redux";
import { authentication, generateRecaptcha } from "services/firebaseConfig";
import { authUserPhone } from "redux/auth/authOperations";
import { signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Button from 'react-bootstrap/Button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { codeFormatter } from "services/formatters";

const initialState = [
  { id: 0, value: '' },
  { id: 1, value: '' },
  { id: 2, value: '' },
  { id: 3, value: '' },
  { id: 4, value: '' },
  { id: 5, value: '' },
]

export const PhoneForm = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [flag, setFlag] = useState(false);
  const [code, setCode] = useState(initialState);
  const [focused] = useState(0);

  const sendCode = async () => {
    generateRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    await signInWithPhoneNumber(authentication, `+${phone}`, appVerifier)
      .then(result => {
        window.confirmationResult = result;
        //console.log('code sended');
      })
      .catch(error => console.log(error));
    setFlag(true);
    Notify.success('Verification code sended!');
  }; 


  const verifyCode = async () => {
    const value = codeFormatter(code);
    if (value.length === 6) {
      dispatch(authUserPhone(value));
    }
    setCode(initialState);
    setFlag(false);
    setPhone('');
  };

   const inputHandler = (e, id) => {
    const number = e.target.value;
    if (isNaN(+number)) {
      return;
    }

    if (number.length > 1) {
      return;
    }

    const updated = [...code].map(item => {
      return item.id === id ? { id, value: number } : item;
    })
    setCode(updated);

    if (number.length === 1) {
      const nextSibling = document.querySelector(`input[name=input-${id + 1}]`);
      if (nextSibling !== null) {
        nextSibling.focus();
      } 
    }
   };

  return (
    <div className="phone-form">
      <h2 className="email-form__title">Enter youre phone number</h2>

      <PhoneInput
        country={'ua'}
        excludeCountries={['ru']}
        value={phone} 
        onChange={(e) => setPhone(e)} 
        className="phone-form__input"
      />
      <Button type="button" variant="primary" size="md" block="true" id="sign-in-button" disabled={phone.length < 12 || codeFormatter(code).length >= 1 ? true : false} onClick={sendCode} className="phone-form__send-btn">
        Send code
      </Button>
      
      {flag
        ? <div>
          <div className="phone-form__wrapper">
            {code.map(({ id, value }) => {
              return <input
                key={id}
                type='text'
                className={value.length === 1 ? 'phone-form__number phone-form__number--colored' : 'phone-form__number'}
                name={`input-${id}`}
                value={value}
                autoFocus={id === focused ? true : false}
                onChange={(e) => inputHandler(e, id)}
              />
              })}
          </div>
          <Button type="button" variant="success" disabled={codeFormatter(code).length < 6 ? true : false} onClick={verifyCode} className="phone-form__verify-btn">Verify</Button>
          </div>
        : null
      }
    </div>
  );
};