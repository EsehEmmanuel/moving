import React from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Landing from "./Page/Landing/Landing";
import Error from "./Components/Error";
import Dashboard from "./Page/Dashboard/Dashboard";
import Movies from "./Page/Dashboard/Movies";
import AllMovies from "./Page/Dashboard/AllMovies";
import Profile from "./Page/Dashboard/Profile";
import { HashRouter, Routes, Route } from "react-router-dom";
import Data from "./Components/Data";
import { All } from "./Components/All";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/E-Moive" element={<Dashboard />}>
          <Route path="" element={<AllMovies />} />
          <Route path="profile" element={<Profile />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movie/:id" element={<Data movies={All} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
