import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Navigation from "./Components/Atoms/Navigation";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Store from "./Pages/Store";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Home />} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/store/:name" element={<Store />} />
        <Route path="/faq" element={<h1>FAQ</h1>} />
        <Route path="/report" element={<h1>Report</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favourite" element={<h1>Favourite</h1>} />
        <Route path="/notification" element={<h1>Notification</h1>} />
      </Route>
    )
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default App;
