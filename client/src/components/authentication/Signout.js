import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

class Signout extends Component {
  componentDidMount() {
    this.props.signout()
  }

  render() {
    return (
      <div>
        Bye bye
      </div>
    )
  }
}

export default connect(undefined, actions)(Signout)