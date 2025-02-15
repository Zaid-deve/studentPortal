import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/404'
import SignIn from './components/Student/Login'
import SignUp from './components/Student/Signup'
import Dashboard from './components/Dashboard/Dashboard'
import Account from './components/Dashboard/Profile'
import Default from './components/Dashboard/Default'
import { Applications } from './components/Dashboard/Applications'
import { Forms } from './components/Forms'
import Auth from './context/Auth'
import Apply from './components/Student/Apply'
import SuccessPage from './Success'

export default function App() {
  return (
    <Auth>
      <div className="flex justify-center h-screen w-screen">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/student/login' element={<SignIn />} />
            <Route path='/student/signup' element={<SignUp />} />
            <Route path='/student/applications' element={<Forms />} />
            <Route path='/student/apply/:form' element={<Apply />} />
            <Route path='/dashboard' element={<Dashboard />} >
              <Route path='/dashboard/account' element={<Account />}></Route>
              <Route path='/dashboard/applications' element={<Applications />}></Route>
              <Route path='/dashboard/' element={<Default />}></Route>
            </Route>
            <Route path='/success' element={<SuccessPage />} />
          </Routes>
        </Router>
      </div>
    </Auth>
  )
}