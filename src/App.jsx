import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import NetflixHome from "./pages/NetflixHome";
import Player from "./pages/Player";
import Signup from "./pages/Signup";
import MoviesSort from "./pages/MoviesSort";
import UserLikedMovies from "./pages/UserLikedMovies";
import AddProfile from "./pages/AddProfile"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/addprofile" element={<AddProfile/>}/>
        <Route exact path="/player" element={<Player/>}/>
        <Route exact path="/new" element={<Player/>}/>
        <Route exact path="/" element={<NetflixHome/>}/>
        <Route exact path="/movies" element={<MoviesSort/>}/>
        <Route exact path="/mylist" element={<UserLikedMovies/>}/>
        <Route exact path="/addprofile" element={<AddProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
}
