import { BrowserRouter , Route ,Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Signup from "./pages/sign-up"
import Signin from "./pages/sign_in"
import Dashboard from "./pages/dashboard"
import Projects from "./pages/projects"
import Header from "./component/header"
import Footer from "./component/Footer"
import PrivateRoute from "./component/PrivateRoute"

function App() {

  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route element = {<PrivateRoute/>} >
          <Route path="/Dashboard" element={<Dashboard/>} />
          </Route>
          <Route path="/projects" element={<Projects/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
