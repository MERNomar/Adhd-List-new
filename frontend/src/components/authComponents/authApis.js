import ky from "ky";

export const postSignup = async ({ username, email, password }) => {
  const authData = { username, email, password };
  try {
    return await ky.post(`/api/user/signup`, {
      json: authData,
    }).json();
  } catch (err) {
    throw await err.response.json()
  }
};

export const postLogin = async ({ email, password }) => {
  const authData = {email, password};
  try {
    return await ky.post(`/api/user/login`, {
      json: authData,
    }).json();
  } catch (err) {
    throw await err.response.json()
  }
};
