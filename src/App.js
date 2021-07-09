import React from 'react';
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import SendMail from './SendMail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice'
import { selectUser, login } from './features/userSlice'
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase'


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

    useEffect(() => {
      auth.onAuthStateChanged( user => {
        if (user){
          //user is logegd in
          dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          }))
        } else {
          // user is logged out
        }
      })
    },[dispatch])
  return (
    <Router>
      {!user ? (
        <Login/>
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail/>
              </Route>
              <Route path="/">
                <EmailList/>
              </Route>
            </Switch>
          </div>
          { sendMessageIsOpen && <SendMail/>}
        </div>
      )}
      
    </Router>
  );
}

export default App;
