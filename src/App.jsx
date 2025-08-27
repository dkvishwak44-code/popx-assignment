import './App.css'
import Main from './components/Main'
import Login from './components/Login'
import Registration from './components/Registration'
import Profile from './components/Profile'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'

function App() {

  return (
     <>
       <BrowserRouter>
         <Routes>
            <Route  path='/' element={  <Main/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/Registration' element={<Registration/>} />
            <Route path='/account' element={<Profile/>}/>
         </Routes>
       </BrowserRouter>
     </>
  )
}

export default App
