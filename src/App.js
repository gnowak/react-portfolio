import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter className="min-h-screen">
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-600">
        <NavBar />

        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Projects} path="/projects" />
          <Route component={Resume} path="/resume" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
