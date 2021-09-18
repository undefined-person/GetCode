import React, { useState } from 'react'
import styled from 'styled-components'

import { useActions } from '../../hooks/useActions'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login } = useActions()

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const handleSubmit = () => {
    login(email, password)
  }
  return (
    <LoginContainer>
      <Form>
        <LoginTitle>Log in</LoginTitle>
        <Placeholder>Email</Placeholder>
        <Input type="email" value={email} onChange={e => handleEmail(e)} />
        <Placeholder>Password</Placeholder>
        <Input type="password" value={password} onChange={e => handlePassword(e)} />
        <LoginButton onClick={handleSubmit}>Continue</LoginButton>
      </Form>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoginTitle = styled.h2`
  font-size: 25px;
  text-align: center;
  margin: 0;
  color: #202c39;
`

const Placeholder = styled.h3`
  text-align: left;
  font-size: 15px;
  color: #202c39;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #202c39;
  border-bottom: 1px solid #202c39;
  padding: 5px;
  margin-bottom: 5px;
  &:focus {
    border-bottom: 1px solid #6f8eae;
  }
`
const LoginButton = styled.div`
  background-color: #202c39;
  color: #fff;
  padding: 10px;
  width: 100px;
  text-align: center;
  margin: 10px auto 0;
  border-radius: 6px;
  cursor: pointer;
`
