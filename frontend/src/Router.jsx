import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Domains from "./components/Domains";
import Home from "./components/Home";
import Register from "./components/RegistrationForm";
import Schedule from "./components/Timeline";
import Sponsors from "./components/Sponsers";
import Contact from "./components/Contact";

import HackathonPage from "./components/HackathonPage";
import ProjectCompetitionPage from "./components/ProjectCompetitionPage";
import RoboticsCompetitionPage from "./components/RoboticsCompetitionPage";

import QueryManager from "./components/admin/QueryManager";
import ParticipantManager from "./components/admin/ParticipantManager";
import VerifiedParticipants from "./components/admin/VerifiedParticipants";
import Form from "./components/Form";
import AdminDashboard from "./components/admin/AdminDashboard";

const AppRouter = () => {
    // Add scroll management
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

                <Route path="/queries" element={<QueryManager />} />
                <Route path="/participants" element={<ParticipantManager />} />
                <Route path="/verified" element={<VerifiedParticipants />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/form" element={<Form/>} />

            </Routes>
        </Router>
    );
};

export default AppRouter;
