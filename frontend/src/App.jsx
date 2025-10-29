import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/Register'
import Profile from './components/Profile'
import Billing from './components/Billing'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/billing" element={<Billing/>}/>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App