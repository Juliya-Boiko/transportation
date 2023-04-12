import { Header } from "components/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "redux/users/usersOperations";
import { TripForm } from "components/forms/TripForm";
import { UserCard } from "components/UserCard";
import Button from 'react-bootstrap/Button';

const AdminPage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="admin-page container">

        {!showForm
          ?  <Button variant="secondary" className="admin-page__create-btn" onClick={() => setShowForm(prevState => !prevState)}>
              Create new trip
            </Button>
          : null
        }
        
        {showForm ? <TripForm onClose={() => setShowForm(false)} /> : null}

        <div>{users.map((item) => { return <UserCard key={item.id} item={item} /> })}</div>

      </main>
    </>
  );
};

export default AdminPage;