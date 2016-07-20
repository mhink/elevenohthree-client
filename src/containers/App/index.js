import React, { Component, PropTypes } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'

import Header from 'components/Header'
import Footer from 'components/Footer'

import {
  layoutWrapper,
  layoutElementWrapper
} from 'styles/layout.css'

import {
  appMain
} from './styles.css'

class App extends Component {
  render () {
    const {children} = this.props

    return (
      <div className={layoutWrapper}>
        <Header title="elevenohthree" />
        <main className={appMain}>
          <div className={layoutElementWrapper}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
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
