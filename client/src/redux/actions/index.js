import axios from 'axios'
import { AUTH_USER } from './types'

export const signup = formProps => async dispatch => {
  const res = await axios.post('http://localhost:3080/signup', formProps)

  dispatch({
    type: AUTH_USER,
    payload: res.data.token
  })
}