import React, { Component, PropTypes } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'
import AuthButton from 'components/AuthButton'

class HomePage extends Component {
  render () {
    return (
      <section>
        <p>Hello, world (from React)!</p>
        <AuthButton />
      </section>
    )
  }
}

HomePage.propTypes = {}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})

export default flow(
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage)
