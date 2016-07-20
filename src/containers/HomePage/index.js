import React, { Component, PropTypes } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'
import AuthButton from 'components/AuthButton'
import BusinessCard from 'components/BusinessCard'

class HomePage extends Component {
  render () {
    return (
      <section>
        <BusinessCard />
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
