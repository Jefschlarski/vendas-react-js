import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";
import Admin from "../pages/Admin";
import Users from "../pages/Admin/users";
import Address from "../pages/Admin/address";
import DashBoard from "../pages/Admin/dashboard";
import AddressForm from "../pages/Admin/address/form";

function Private({ Item }) {
    const { signed, loading } = useAuth();

    if (loading) {
        return <h1>Carregando...</h1>;
    }
    return signed > 0 ? <Item /> : <Signin />;
}

export default function RoutesApp() {
    return (
        <BrowserRouter>
                <Fragment>
                    <Routes>
                        <Route path="/home" element={<Private Item = {() => <Home />} />} />
                        <Route path="/admin" element={<Private Item={() => <Admin />} />}>
                            <Route path="users" element={<Users />} />
                            <Route path="address/create" element={<AddressForm />} />
                            <Route path="dashboard" element={<DashBoard />} />
                            <Route path="address" element={<Address />} />
                        </Route>
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<Signin />} />
                    </Routes>
                </Fragment>
        </BrowserRouter>
    );
}