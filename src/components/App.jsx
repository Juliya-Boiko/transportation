import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from "hocs/PublicRoute";
import { PrivateRoute } from "hocs/PrivateRoute";

const Layout = lazy(() => import('../layouts/Layout'));
const AuthPage = lazy(() => import('../pages/AuthPage/AuthPage'));
const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const PhonePage = lazy(() => import('../pages/PhonePage/PhonePage'));
const TripsPage = lazy(() => import('../pages/Trips/TripsPage'));

export const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<PrivateRoute><Homepage /></PrivateRoute>} />
          <Route path="trips" element={<PrivateRoute><TripsPage /></PrivateRoute>} />

          <Route path="auth" element={<PublicRoute restricted><AuthPage /></PublicRoute>} />
          <Route path="auth/phone" element={<PublicRoute restricted><PhonePage /></PublicRoute>} />
        </Route>
      </Routes>
    </Suspense>
  );
};
