import { Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/Register'
import Billing from './components/Billing'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/register" element={<RegisterForm/>}/>      
      <Route path="/billing" element={<Billing/>}/>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />

    </Routes>
    </>
  )
}

export default App

