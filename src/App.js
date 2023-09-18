import React from 'react';
import * as ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'

export default function App() {

  <Router>
    <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
      <Route path="card">
        {/* <Card /> */}
      </Route>
    </Routes>
  </Router>

}

const root = ReactDOM.createPortal('root')
root.render(<App />)