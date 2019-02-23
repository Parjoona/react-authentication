import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

export const signup = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:3080/signup', formProps)
    console.log(res)
    dispatch({
      type: AUTH_USER,
      payload: res.data.token
    })

    localStorage.setItem('tokenFromCourse', res.data.token)

    callback()
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: `Error in email and password`
    })
  }
}

export const signin = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:3080/signin', formProps)
    console.log(res)
    dispatch({
      type: AUTH_USER,
      payload: res.data.token
    })

    localStorage.setItem('tokenFromCourse', res.data.token)

    callback()
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: `Invalid login credentials`
    })
  }
}

export const signout = () => {
  localStorage.removeItem('tokenFromCourse')

  return {
    type: AUTH_USER,
    payload: ''
  }
}