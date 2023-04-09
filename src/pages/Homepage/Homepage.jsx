import { authentication } from "services/firebaseConfig";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "redux/authOperations";

const Homepage = () => {
  const dispatch = useDispatch();

  const updateName = async () => {
    await updateProfile(authentication.currentUser, {
      displayName: "Jane Q. User", photoURL: ""
    }).catch((error) => {
      console.log(error);
    });
    dispatch(getCurrentUser());
  };

  return (
    <div>
      <h1>Homepage</h1>
      <button type="button" onClick={updateName}>update</button>
      <button type="button" onClick={() => console.log('check', authentication.currentUser)}>Check</button>
    </div>
  );
};

export default Homepage;