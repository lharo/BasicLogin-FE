import axios from "axios";

const localhostServer = "http://localhost:8080/api"
const signInPath = "sign-in"

export const serviceSignIn = async (user) => {
  try {
    console.log('user', user)
    let res = await fetch(`${localhostServer}/${signInPath}`, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
      body: JSON.stringify(user),
    });
    let resJson = await res.json();
    if (res.status === 200) {
      console.log('resJson', resJson)
    } else {
      console.error('res', res)
    }
  } catch (err) {
    console.log(err);
  }
}

export const serviceSignInAxios = async (user) => {
  console.log('user', user)
  axios
    .post(`${localhostServer}/${signInPath}`, {
      body: user
    })
    .then((response) => {
      console.log('response', response)
    });
}
