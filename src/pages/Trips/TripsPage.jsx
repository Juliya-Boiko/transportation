import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTrips } from "redux/trips/tripsOperations";
import { Header } from "components/Header";
import { Filters } from "components/Filters";
import { TripCard } from "components/TripCard";

const TripsPage = () => {
  const [filters, setFilters] = useState({ from: '', to: '' });
  const dispatch = useDispatch();
  const { trips } = useSelector(state => state.trips);

  useEffect(() => {
    dispatch(getAllTrips());
  }, [dispatch]);

  const filtered = () => {
    const filteredFrom = trips.filter(item => item.from.toLowerCase().includes(filters.from.toLowerCase()));
    const filteredTo = filteredFrom.filter(item => item.to.toLowerCase().includes(filters.to.toLowerCase()));
    return filteredTo;
  };

  const filterHandler = (e) => {
    const { name, value } = e.target;
    setFilters(prevState => {
      return { ...prevState, [name]: value.trim() }
    })
  };

  return (
    <>
      <Header />
      <main className="trips-page container">
        <Filters values={filters} onChange={filterHandler} />
        <div className="trips-page__list">{filtered().map((item) => { return <TripCard key={item.id} item={item} /> })}</div>
      </main>
    </>
  );
};

export default TripsPage;