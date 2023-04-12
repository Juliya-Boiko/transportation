import { Header } from "components/Header";
import { authentication } from "services/firebaseConfig";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { logoutUser } from "redux/auth/authOperations";
import { HiOutlineUserCircle } from "react-icons/hi";
// 

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { email = '', displayName = '', phoneNumber = '', photoURL = '' } = authentication.currentUser;

  //console.log(authentication.currentUser);

  return (
    <>
      <Header />
      <main className="profile-page container">

        <div>
          {photoURL
            ? <img src={`${photoURL}`} alt="Avatar" className="profile-page__avatar" />
            : <div className="profile-page__thumb" >
                <HiOutlineUserCircle size={100} />
              </div>
          }
          
          <p className="profile-page__label">
            <span className="profile-page__title">Name:</span> 
            {displayName}
          </p>
          
          <p className="profile-page__label">
            <span className="profile-page__title">Email:</span> 
            {email}
          </p>

          <p className="profile-page__label">
            <span className="profile-page__title">Phone:</span> 
            {phoneNumber}
          </p>

          <Button variant="outline-danger" className="profile-page__logout-btn" onClick={() => dispatch(logoutUser())} >Logout</Button>
        </div>

      </main>
    </>
  );
};

export default ProfilePage;