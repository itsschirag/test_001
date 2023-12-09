import React, { Component } from 'react';
import { useState } from "react";

import './App.css';
import Login from './components/Login';
import Dashboard from "./components/Dashboard";
import Emp from './components/Emp';
import { AuthProvider } from './auth';
import Protected from './Protected';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App () {
    const [loggedin, isLoggedIn] = useState(false);
    const login = () =>{
        isLoggedIn(true);
    };
    const logout = () =>{
        isLoggedIn(false);
    };
      return (
        <AuthProvider>
          <Router>
              <div className="App">
                  
                  <Routes>
                      <Route
                          exact
                          path="/"
                          element={<Login fun={isLoggedIn}/>}
                      ></Route>
                      <Route
                          exact
                          path="/dashboard"
                          element={<Dashboard log={loggedin}/>}
                      />
                      <Route
                      exact
                      path="/emp"
                      element={<Emp />}
                      />
                  </Routes>
              </div>
          </Router>
          </AuthProvider>
      );
  }


export default App;