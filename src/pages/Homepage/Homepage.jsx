import { Header } from 'components/Header';

const Homepage = () => {

  return (
    <>
      <Header />
      <main className="homepage">
        <h1 className='homepage__title'>
          Welcome to <br /> V-Transport
        </h1>
        <p>service for passengers and drivers</p>
      </main>
    </>
  );
};

export default Homepage;