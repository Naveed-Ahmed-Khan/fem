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
import EvaluationForm from "./pages/EvaluationForm";
import TeacherProfile from "./pages/TeacherProfile";
import EvaluationStats from "./pages/EvaluationStats";
import CheckCourses from "./pages/CheckCourses";
import AddCourse from "./pages/AddCourse";

function App() {
  const user = localStorage.getItem("user");

  return (
    <Routes>
      {/* Login  */}
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Dashboard />}>
        {/* Students  */}
        <Route path="/profile" element={<StudentProfile />} />
        <Route path="/teacher-profile" element={<TeacherProfile />} />

        <Route path="/check-students" element={<CheckStudents />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/evaluationform" element={<EvaluationForm />} />
        <Route path="/evaluationstats" element={<EvaluationStats />} />

        {/* Tutors  */}
        <Route path="/check-teachers" element={<CheckTeachers />} />
        <Route path="/add-teacher" element={<AddTeacher />} />

        {/* Courses  */}
        <Route path="/check-courses" element={<CheckCourses />} />
        <Route path="/add-course" element={<AddCourse />} />
      </Route>
    </Routes>
  );
}

export default App;
