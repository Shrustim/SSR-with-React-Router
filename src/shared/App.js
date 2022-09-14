import React from 'react'

import { Route, Routes ,Link} from 'react-router-dom'
const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      This is the home page!
    </p>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      This is the about page!
    </p>
  </div>
)

const Contact = ({ match }) => (
  <div>
    <h2>Contact</h2>
    <p>
      This is the contact us page!
    </p>
  </div>
)

const App = () => (
  
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <hr/>

 <h2>SSR with React Router </h2>
 <Routes>

   <Route  path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  
)
export default App;