import React, { useState } from 'react';

export const LoginForm = () => {


  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onLogInFormSubmitted = (e) => {
    e.preventDefault();
    console.log('e', e)
  }

  return (
    <>
      <form onSubmit={onLogInFormSubmitted}>
        <label>Usuario</label>
        <input type="text" onChange={handleUsuarioChange} />
        <input type="password" onChange={handlePasswordChange} />
        <button type='submit' >Log In</button>
      </form>
    </>
  )
}
