import { userStatus } from 'constants/userStatus';
import { useDispatch } from 'react-redux';
import { updateUserStatus } from 'redux/users/usersOperations';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';

export const UserCard = ({ item }) => {
  const dispatch = useDispatch();
  const { displayName, email, phone, id: userId } = item;
  const [currentStatus, setCurrentStatus] = useState(item.status);

  const selectHandler = (id, status) => {
    dispatch(updateUserStatus({ id, status }));
    setCurrentStatus(status);
  };

  return (
    <Card className="user-card">
      <Card.Header className='user-card__header'>
        {displayName}
        <Dropdown size="sm" >
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {currentStatus}
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ margin: 0 }}>
          {userStatus.map(({ id, status }) => {
            return <Dropdown.Item key={id} onClick={() => selectHandler(userId, status)}>{status}</Dropdown.Item>
          })}
          </Dropdown.Menu>
        </Dropdown>
      </Card.Header>

      <Card.Body>
        <Card.Text className=''>
          Email: {email}
        </Card.Text>

        <Card.Text className=''>
          Phone: {phone}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};