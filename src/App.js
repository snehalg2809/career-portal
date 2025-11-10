import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./home/Home";
import UserLogin from "./login/UserLogin";
import Nav from "./nav/Nav";
import PreferenceList from "./features/PreferenceList.js";
import Colleges from "./colleges/Colleges.js";
import AboutUs from "./about/AboutUs.js";
import BranchwiseList from "./features/BranchwiseList.js";
import ProtectedRoute from "./protected-route/ProtectedRoute";
import Profile from "./nav/profile/Profile.js";
import OptionForm from "./option-form/OptionForm.js";
import CollegePredictor from "./features/CollegePredictor.js";
import Chatbot from "./home/Chatbot.js";
import { AuthProvider } from "./auth-guard/AuthContext.js";
import ChatbotImg from "./images/chatbot/robot.png";
import Settings from "./nav/profile/Settings.js";
import TopCollegeList from "./features/TopCollegeList.js";
import Courses from "./courses/Courses.js";
import ContactUs from "./contat-us/ContactUs.js";
import EnrollmentForm from "./enrollment-form/EnrollmentForm.js";
import PaymentSuccess from "./courses/PaymentSuccess.js";
import Exams from "./exams/Exams.js";

function App() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="App">
      <div className="chatbot-floating">
        <div className="chatbot-toggle" onClick={() => setChatOpen(!chatOpen)}>
          <img src={ChatbotImg} alt="Chatbot" />
        </div>
        {chatOpen && (
          <div className="chatbot-box">
            <Chatbot chatOpen={chatOpen} setChatOpen={setChatOpen} />
          </div>
        )}
      </div>
      <Router>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<UserLogin />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />

            {/* Protected routes */}
            <Route
              path="/nav"
              element={
                <ProtectedRoute>
                  <Nav />
                </ProtectedRoute>
              }
            />

            <Route
              path="/preference-list"
              element={
                <ProtectedRoute>
                  <PreferenceList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/top-colleges/:name"
              element={
                <ProtectedRoute>
                  <Colleges />
                </ProtectedRoute>
              }
            />
            <Route
              path="/branch-list"
              element={
                <ProtectedRoute>
                  <BranchwiseList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/college-predictor"
              element={
                <ProtectedRoute>
                  <CollegePredictor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/option-form"
              element={
                <ProtectedRoute>
                  <OptionForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/top-college-list"
              element={
                <ProtectedRoute>
                  <TopCollegeList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/courses"
              element={
                <ProtectedRoute>
                  <Courses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/contact-us"
              element={
                <ProtectedRoute>
                  <ContactUs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/enrollment-form"
              element={
                <ProtectedRoute>
                  <EnrollmentForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/payment-success"
              element={
                <ProtectedRoute>
                  <PaymentSuccess />
                </ProtectedRoute>
              }
            />
            <Route
              path="/exams-details"
              element={
                <ProtectedRoute>
                  <Exams />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
