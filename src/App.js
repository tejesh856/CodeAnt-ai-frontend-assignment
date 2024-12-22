import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Login from "./Screens/Login";
import Layout from "./Screens/Layout";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("authToken"))
  );

  useEffect(() => {
    const checkAuthToken = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("authToken")));
    };

    window.addEventListener("storage", checkAuthToken);
    return () => {
      window.removeEventListener("storage", checkAuthToken);
    };
  }, []);

  return (
    <div className=" flex flex-col flex-1">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              !isLoggedIn ? (
                <Login setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            element={
              isLoggedIn ? (
                <Layout setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/" />
              )
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
