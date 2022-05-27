import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { useAuth } from './contexts/AuthContext'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import {
  About,
  Account,
  Admin,
  Contact,
  Home,
  PayRent
} from './pages'

export default function App() {
  const { isLoggedIn } = useAuth()

  return (
    <div className='App'>

      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route exact path="/contactus" element={<Contact />} />
          <Route exact path="/payrent" element={<PayRent />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/account" element={<Account />} />
        </Routes>

        {isLoggedIn ? <LoggedInText /> : <LoggedOutText />}
      </Router>
    </div>
  )
}

const LoggedInText = () => {
  const { account } = useAuth()

  return <p>Hey, {account.username}! I'm happy to let you know: you are authenticated!</p>
}

const LoggedOutText = () => (
  <p>Don't forget to start your backend server, then authenticate yourself.</p>
)
