import React from 'react'
import './css/login-page.css'
import { Flex, Input, Button } from 'antd'
import { useRecoilState } from 'recoil'
import userState from '../states/is-user-logged-in'

const LoginPage = () => {
  const [user, setUser] = useRecoilState(userState);

  function handleSetName(nameInput: string) {
    setUser(prevState => {
      return {
        ...prevState,
        name: nameInput
      }
    })
  }

  function handleKeyDown(e: any) {
    if (e.key !== "Enter") return;

    handleLogin()
  }

  function handleLogin() {
    if (user.name === "") return
    setUser(prevState => {
      return {
        ...prevState,
        loggedIn: true
      }
    })
  }

  return (
    <Flex vertical justify="center" gap="middle" align="center" className="login-container">
      <div className="form-container">
        <Input
          placeholder='Enter username...'
          onChange={e => handleSetName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Button
        type="primary"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Flex>
  )
}

export default LoginPage
