import { Header } from 'components/Header';

const Homepage = () => {

  return (
    <div className="homepage">
      <Header />
      <h1>Homepage:</h1>
    </div>
  );
};

export default Homepage;


// import { updateProfile } from "firebase/auth";


  // const updateName = async () => {
  //   await updateProfile(authentication.currentUser, {
  //     displayName: "Jane Q. User", photoURL: ""
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  //   dispatch(getCurrentUser());
  // };


      // {/* <button type="button" onClick={updateName}>update</button>
      // <button type="button" onClick={() => console.log('check', authentication.currentUser)}>Check</button> */}