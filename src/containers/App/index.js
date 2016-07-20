import React, { Component, PropTypes } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const {children} = this.props

    return (
      <main>
        {children}
      </main>
    )
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
}

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({})

export default flow(
  connect(mapStateToProps, mapDispatchToProps)
)(App)
