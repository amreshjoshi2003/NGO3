import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import Navbar from './Components/Navbar';

import Home from './Pages/Home';
import MemberApply from './Pages/MemberApply';
import IDCardDownload from './Pages/IDCardDownload';
import UpcomingEvent from './Pages/UpcomingEvent';
import Donate from './Pages/Donate';
import Donors from './Pages/Donors';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import AboutUs from './Pages/AboutUs';
import ManagementTeam from './Pages/ManagementTeam';
import OurTeam from './Pages/OurTeam';
import Achievements from './Pages/Achievements';
import Certifications from './Pages/Certifications';
import Login from './Pages/Login';
// New Routes
import CrowdFunding from "./Pages/CrowdFunding";
import OurSolution from "./Pages/OurSolution";
import YourProblem from "./Pages/YourProblem";
import OurProject from "./Pages/OurProject";
import LoginCoordinator  from "./Pages/LoginCoordinator"
import LoginManager from './Pages/LoginManager';
import Community from './Pages/Community';


function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/member-apply" element={<MemberApply />} />
        <Route path="/id-card-download" element={<IDCardDownload />} />
        <Route path="/upcoming-event" element={<UpcomingEvent />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donors" element={<Donors />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
           <Route path="/about-us" element={<AboutUs />} />
        <Route path="/management-team" element={<ManagementTeam />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Community " element={<Community />} />

{/* New Dropdown Pages */}
        <Route path="/crowd-funding" element={<CrowdFunding />} />
        <Route path="/our-solution" element={<OurSolution />} />
        <Route path="/your-problem" element={<YourProblem />} />
        <Route path="/our-project" element={<OurProject />} />


  {/* Login Routes */}
        <Route path="/login/coordinator" element={<LoginCoordinator />} />
        <Route path="/login/manager" element={<LoginManager />} />




      </Routes>
    </>
  );
}

export default App;