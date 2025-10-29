import { Route, Routes} from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/Register'
import Billing from './components/Billing'
import ProtectedRoute from './components/ProtectedRoute'
=======

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/Register'
import Profile from './components/Profile'
import Billing from './components/Billing'
>>>>>>> a9c53d22bb1a54f6c80d6a8526e2b5ed459d1ca6

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginForm/>}/>
<<<<<<< HEAD
      <Route path="/register" element={<RegisterForm/>}/>      
      <Route path="/billing" element={<Billing/>}/>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />

=======
      <Route path="/register" element={<RegisterForm/>}/>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="billing" element={<Billing/>}/>
      <Route path="/" element={<Home/>}/>
>>>>>>> a9c53d22bb1a54f6c80d6a8526e2b5ed459d1ca6
    </Routes>
    </>
  )
}

export default App

