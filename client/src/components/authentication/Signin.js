import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { withRouter } from 'react-router-dom';


class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature')
    })
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <legend>Login</legend>
          <label>Email: </label>
          <Field 
            type='text'
            name='email'
            component='input'
            autoComplete='none'
          />

          <br/>
          
          <label>Password: </label>
          <Field 
          type='password'
          name='password'
          component='input'
          autoComplete='none'
        />
        {this.props.errorMsg && <p>Error with email or password</p>}
        </fieldset>
        <br/>
        <button>Sign in</button>
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
  reduxForm({ form: 'signin' })
)(Signin)