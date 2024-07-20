import './index.css';
// import { Routes, Route } from "react-router-dom";
// import Header from './components/Header';
// import About from './components/About';
// import Courses from './components/Courses';
// import Testimony from './components/Testimony';
// import Footer from './components/Footer';
// import Register from '../src/pages/Authentication/Register/Register';
// import Success from './pages/Authentication/Register/Success';
// import Login from './pages/Authentication/Login/Login';
// import RegisterBoard from './pages/Authentication/Register/RegisterBoard';
// import LoginBoard from './pages/Authentication/Login/LoginBoard';
// import DashBoard from './pages/DashBoard/DashBoard';
// import Overview from './pages/DashBoard/Overview';
import BrowseCourse from './pages/DashBoard/BrowseCourse';
import MyCourse from './pages/DashBoard/MyCourses';



function App() {
  return (
    <div className="App">
      {/* <Header />
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Courses />
            <Testimony />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/testimony" element={<Testimony />} />
      </Routes>
      <Footer /> */}

     {/* <Register />  */}
      {/* <Success /> */}
      {/* <Login /> */}
   {/* <RegisterBoard /> */}
   {/* <LoginBoard /> */}
   {/* <DashBoard /> */}
   {/* <Overview /> */}
   <BrowseCourse />
   <MyCourse />

    </div>
  );
}

export default App;


