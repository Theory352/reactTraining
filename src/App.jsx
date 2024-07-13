import LoginForm from "./components/LoginForm"
import Home from "./pages/Home"
import {Routes, Route} from 'react-router-dom'

const App = () => {

  return (
    <div className="  h-screen">
      <Routes>
          <Route path="/login"  element={<LoginForm/>}/>
          <Route path="/"  element={<Home/>}/>


      </Routes>
    
    
    
    
    
      
    </div>
  )
}

export default App