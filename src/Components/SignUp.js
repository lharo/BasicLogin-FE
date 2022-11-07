
import React, { useState } from 'react'

export const SignUp = ({redirect}) => {

  const [usuario, setUsuario] = useState(undefined);
  const [password, setPassword] = useState(undefined)
  const [confirmPassword, setConfirmPassword] = useState(undefined)

  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const onLogInFormSubmitted = (e) => {
    e.preventDefault();
    console.log('e', e)
  }
  
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={onLogInFormSubmitted}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handleUsuarioChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handlePasswordChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Re-enter password"
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Already a user? <a className='link' onClick={redirect}>Sign in</a>
          </p>
        </div>
      </form>
    </div>
  )
}