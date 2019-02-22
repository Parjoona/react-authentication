import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class Signup extends Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field 
            type='text'
            name='email'
            component='input'
            autoComplete='none'
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field 
          type='password'
          name='password'
          component='input'
          autoComplete='none'
        />
        </fieldset>
        <button>Sign up</button>
      </form>
    )
  }
}

export default compose(
  connect(undefined, actions),
  reduxForm({ form: 'signup' })
)(Signup)