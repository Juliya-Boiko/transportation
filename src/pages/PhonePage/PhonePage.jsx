import { PhoneForm } from "components/forms/PhoneForm";
import { Logo } from "components/Logo";
 
const PhonePage = () => {
  return (
    <div className="auth-page container">

      <Logo className="auth-page__logo" />

      <PhoneForm />

    </div>
  );
};

export default PhonePage;