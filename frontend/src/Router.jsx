import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Domains from "./components/Domains";
import Home from "./components/Home";
import Register from "./components/RegistrationForm";
import Schedule from "./components/Timeline";
import Sponsors from "./components/Sponsers";

import HackathonPage from "./components/HackathonPage";
import ProjectCompetitionPage from "./components/ProjectCompetitionPage";
import RoboticsCompetitionPage from "./components/RoboticsCompetitionPage";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/domains" element={<Domains />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/register" element={<Register />} />
                <Route path="/hackathon" element={<HackathonPage />} />
                <Route path="/project" element={<ProjectCompetitionPage />} />
                <Route path="/robotics" element={<RoboticsCompetitionPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
