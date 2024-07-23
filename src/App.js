import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Courses from './components/Courses';
import Testimony from './components/Testimony';
import Footer from './components/Footer';
import Register from './pages/Authentication/Register/Register';
import Success from './pages/Authentication/Register/Success';
import Login from './pages/Authentication/Login/Login';
import QandA from './pages/DashBoard/QandA';
import UserDashboard from './pages/DashBoard/UserDashboard';
import Overview from './pages/DashBoard/Overview';
import BrowseCourse from './pages/DashBoard/BrowseCourse';
import MyCourses from './pages/DashBoard/MyCourses';
import UserInfomation from './pages/DashBoard/UserInfomation';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <About />
            <Courses />
            <Testimony />
            <Footer />
          </>
        } />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<UserDashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route path="browse-course" element={<BrowseCourse />} />
          <Route path="my-courses" element={<MyCourses />} />
          <Route path="user-information" element={<UserInfomation />} />
        </Route>
        <Route path="/q-and-a" element={<QandA />} />
      </Routes>
    </div>
  );
}

export default App;
