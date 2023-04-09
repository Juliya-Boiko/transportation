import { useDispatch } from "react-redux";
import { authUserGoogle, authUserFacebook } from "redux/authOperations";
import { useNavigate } from "react-router-dom";
import { EmailForm } from "components/forms/EmailForm";
import { Logo } from "components/Logo";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div className="auth-page container">

      <Logo className="auth-page__logo" />

      <EmailForm />

      <p>or continue with: </p>
      <div className="auth-page__actions">
        <button type="button" className="auth-page__actions-btn" onClick={() => dispatch(authUserGoogle())}><FcGoogle size={30} /></button>
        <button type="button" className="auth-page__actions-btn" onClick={() => dispatch(authUserFacebook())}><GrFacebookOption size={30} /></button>
        <button type="button" className="auth-page__actions-btn" onClick={() => navigate('/auth/phone')}><FaPhone size={25} /></button>
      </div>

    </div>
  );
};

export default AuthPage;