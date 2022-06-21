import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogin } from './Services';


function Login() {

  // sayfa geçiş hareketleri için kullanılan bir yöntemdir.
  const navigate = useNavigate()

  // useState
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // arrow function
  const fncSend = (evt: React.FormEvent) => {
    evt.preventDefault()
    userLogin(email, password).then(res => {
      const status = res.status
      if (status) {
        console.log(res.data)
      } else {
        alert("Giriş yapılamadı")
      }
    })
  }

  return (
    <>
      <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4'>
          <h1>User Login</h1>
          <form onSubmit={fncSend}>
            <div className='mt-3'>
              <input onChange={(evt) => setEmail(evt.target.value)} type='email' className='form-control' placeholder='E-Mail' />
            </div>
            <div className='mt-3'>
              <input onChange={(evt) => setPassword(evt.target.value)} type='password' className='form-control' placeholder='Password' />
            </div>
            <div className='mt-3'>
              <button onClick={(evt) => navigate('/dashboard')} className='btn btn-success form-control' type='submit'>Send</button>
            </div>
            <div className='mt-3'>
              <a onClick={(evt) => navigate('/register')} role='button' className='btn btn-danger form-control'>Register</a>
            </div>
          </form>
        </div>
        <div className='col-sm-4'></div>
      </div>
    </>
  )
}

export default Login;
