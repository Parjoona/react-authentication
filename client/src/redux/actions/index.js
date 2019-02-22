import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

export const signup = (formProps, callback) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:3080/signup', formProps)

    dispatch({
      type: AUTH_USER,
      payload: res.data.token
    })

    callback()

    console.log('Callbacked')
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email is in use'
    })
  }
}