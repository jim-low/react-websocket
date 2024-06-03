import React from 'react'
import './App.css';
import { useRecoilState } from 'recoil'
import userState from './states/is-user-logged-in';
import LoginPage from './login/login-page';
import ChatPage from './chat/chat-page';

const App = () => {
  const [user] = useRecoilState(userState);

  console.log(user.name)

  return (
    <div className="App">
      {
        !user.loggedIn ?
          <LoginPage />
          :
          <ChatPage />
      }
    </div>
  )
}

export default App
