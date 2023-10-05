import Home from "./components/Home/index.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, StrictMode } from 'react';
import { getUserInfo } from './api/getUserInfo';
import { Navigate, Outlet } from 'react-router-dom';

import MainLayout from "./components/MainLayout/index.jsx"
import Login from "./components/Login.js"
import Member from "./components/Member/index.jsx"
import TimeSchedule from "./components/TimeSchedule/index.jsx";
import Exercise from "./components/Exercise/index.jsx";
import CreateExercise from "./components/CreateExercise/index.jsx";
import userEvent from "@testing-library/user-event";

const App = () => {
  const [isLogin, setIsLogin] = useState(0);
  
  useEffect(() => {
    const initLogin = async () => {
      const name = await getUserInfo();
      setIsLogin(!!name);
    };
    initLogin();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  }

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [])

  return !isLoading ? (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout isLogin={isLogin} />}>
            <Route path="/course" element={isLogin ? <Home isLogin={isLogin} /> : <Navigate to="/" />} />
            <Route path="/course/member" element={<Member isLogin={isLogin}/>} />
            <Route path="/course/timeschedule" element={<TimeSchedule />} />
            <Route path="/course/exercise" element={<Exercise />} />
          </Route>
          <Route path="/course/exercise/create" element={<CreateExercise />} />
          <Route path="/" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
        </Routes>
      </BrowserRouter>
    </>

  ) : (
    <>
      <div>Loading...</div>
    </>
  );
}

export default App;

