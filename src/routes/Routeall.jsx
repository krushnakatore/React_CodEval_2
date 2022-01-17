import { Link, Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Admin } from "../components/Admin";
import { User } from "../components/User";
import { Register } from "../components/Register";
import { GetInfo } from "../components/Getinfo";

export const Routeall = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "grey",
          padding: "20px",
          marginLeft: "-10px",
          marginRight: "-10px",
          marginTop: "-10px",
          justifyContent: "space-between"
        }}
      >
        <Link
          style={{
            marginRight: "20px",
            textDecoration: "none"
          }}
          to="/adminlogin"
        >
          Admin_Login
        </Link>
        <Link
          style={{
            marginRight: "20px",
            textDecoration: "none"
          }}
          to="/userlogin"
        >
          User_Login
        </Link>
        <Link
          style={{
            marginRight: "20px",
            textDecoration: "none"
          }}
          to="/register"
        >
          Register
        </Link>
        {/* <Link to="/dashboard">Dashboard</Link> */}
        {/* <Link to="/getinfo">GetInfo</Link> */}
      </div>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>;
          <Route path="/adminlogin" element={<Admin />}></Route>
          <Route path="/userlogin" element={<User />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/getinfo" element={<GetInfo />}></Route>
        </Routes>
      </div>
    </>
  );
};
