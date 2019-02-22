import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { withRouter } from 'react-router-dom';

class Signup extends Component {
  onSubmit = formProps => {
    console.log(this.props.history)
    this.props.signup(formProps, () => {
      this.props.history.push('/feature')
    })
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
          <div>
            <p>{this.props.errorMsg}</p>
          </div>
        <button>Sign up</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  errorMsg: state.auth.errorMsg
})

export default compose(
  withRouter,
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup)