import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import StudentProfile from "./pages/StudentProfile";
import CheckStudents from "./pages/CheckStudents";
import AddStudent from "./pages/AddStudent";
import CheckTeachers from "./pages/CheckTeachers";
import AddTeacher from "./pages/AddTeacher";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useStateContext } from "./contexts/ContextProvider";
import { useEffect } from "react";

function App() {
  return (
    <div className="">
      <Routes>
        {/* Login  */}
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Dashboard />}>
          {/* Students  */}
          <Route path="/profile" element={<StudentProfile />} />
          <Route path="/check-students" element={<CheckStudents />} />
          <Route path="/add-student" element={<AddStudent />} />

          {/* Tutors  */}
          <Route path="/check-teachers" element={<CheckTeachers />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
