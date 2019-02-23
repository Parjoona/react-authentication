import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => {
  class ComposedComponent extends Component {

    // Component rendered
    componentDidMount() {
      this.navigateUser()
    }

    componentDidUpdate() {
      this.navigateUser()
    }

    navigateUser = () => {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
  }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth.authenticated
  })

  return connect(mapStateToProps)(ComposedComponent)
}