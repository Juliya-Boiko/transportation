import { Header } from "components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "redux/users/usersOperations";
import { UserCard } from "components/UserCard";
//import ListGroup from 'react-bootstrap/ListGroup';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="users-page container">
        <div>
          {users.map((item) => {
            return <UserCard key={item.id} item={item} />
          })}
        </div>
      </main>
    </>
  );
};

export default UsersPage;