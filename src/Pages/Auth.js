import React, { useState } from 'react'
import { SignIn, SignUp } from '../Components/';

const pages = {
  SIGN_IN: 0,
  SIGN_UP: 1
}

export const Auth = () => {
  const { SIGN_IN, SIGN_UP } = pages;
  const [pageToRender, setPageToRender] = useState(0)

  const redirect = () => {
    setPageToRender(pageToRender === SIGN_UP ? SIGN_IN : SIGN_UP);
  }

  return (
    <>
      { pageToRender === SIGN_IN ? 
        <SignIn redirect={redirect}/> 
          : 
        <SignUp redirect={redirect}/>
      }
    </>
  )
}
