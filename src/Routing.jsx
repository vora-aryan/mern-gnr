import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AddUserForm from "../pages/AddUserForm";
import App from "./App";
import UpdateUser from "../pages/UpdateUser";
import LoginPage from "../pages/LoginPage";
import ProtectedRoutes from "../Hooks/ProtectedRoutes";

import ProductPage from "../pages/ProductPage";
import Tasks from "../pages/Tasks";
import ThemeContextProvider from "../Context/ThemeContextProvider";
import Cart from "../pages/Cart";
import BankPage from "../pages/BankPage";
import MUI from "../pages/MUI";

export const Routing = () => {
  return (
    <div>
      <ThemeContextProvider>
        <Navbar />
      </ThemeContextProvider>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/adduser" element={<AddUserForm />}></Route>
          <Route path="/updateuser/:id" element={<UpdateUser />}></Route>
        </Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/bank" element={<BankPage />}></Route>
        <Route path="/mui" element={<MUI />}></Route>
      </Routes>
    </div>
  );
};
