import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ReactComponent as Icon } from '../../assets/logo.svg';

export const TripCard = ({ item }) => {
  const { date='',from='', to='', autoModel='', autoNumber='', freePlaces=0, totalPlaces=0 } = item;

  return (
    <Card className="trip-card">
      <Card.Header className='trip-card__header'>
        <Icon className='trip-card__icon' />
        <span>{from} -  {to}</span>
      </Card.Header>

      <Card.Body>
        <Card.Text className='trip-card__text'>
          <span>Departure date:</span>
          {date}
        </Card.Text>

        <Card.Text className='trip-card__text'>
          <span>Left free places:</span>
          <span>{freePlaces} of {totalPlaces} </span>
        </Card.Text>
      </Card.Body>

      <Card.Footer className='trip-card__text'>
        <span>{autoModel} {autoNumber}</span>
        <Button variant="primary" size="sm">Book</Button>
      </Card.Footer>
    </Card>
  );
};