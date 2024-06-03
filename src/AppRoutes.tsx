import {
  Navigate,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import RestaurantPage from "./pages/RestaurantPage";
import SearchPage from "./pages/SearchPage";

const AppRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Auth0ProviderWithNavigate />}>
      <Route path="/" element={<Home />} />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/search/:city" element={<SearchPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/user-profile" element={<UserProfilePage />} />
        <Route path="/manage-restaurant" element={<RestaurantPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

// const AppRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/user-profile",
//     element: <div>User Profile</div>,
//   },
//   {
//     path: "*",
//     element: <Navigate to="/" />,
//   },
// ]);

export default AppRoutes;
