import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/Signin'
import SignUp from './Pages/SignUp'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/about' element={<About/>} />
      <Route element={<PrivateRoute/>} >
      <Route path='/profile' element={<Profile/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App