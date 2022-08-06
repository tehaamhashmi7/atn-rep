import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AppState from './context/States';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentLogin from './components/StudentLogin';
import StudentSignup from './components/StudentSignup';
import TeacherLogin from './components/TeacherLogin'
import TeacherSignup from './components/TeacherSignup'
import StudentList from './components/StudentList'
import Notice from './components/Notice'


function App() {
  return (
    <AppState >
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact={true} path={'/student/login'} element={<StudentLogin />}></Route>
        <Route exact={true} path={'/student/signup'} element={<StudentSignup />}></Route>
        <Route exact={true} path={'/teacher/login'} element={<TeacherLogin />}></Route>
        <Route exact={true} path={'/teacher/signup'} element={<TeacherSignup />}></Route>
        <Route exact={true} path={'/teacher/studentList'} element={<StudentList />}></Route>
        <Route exact={true} path={'/noticeboard'} element={<Notice />}></Route>
        <Route exact={true} path={'/'} element={<HomePage />}></Route>
      </Routes>
    </div>
    </AppState>
  );
}

export default App;
