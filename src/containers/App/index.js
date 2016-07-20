import React, { Component, PropTypes } from 'react'
import { flow } from 'lodash'
import { connect } from 'react-redux'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { 
  outerWrapper,
  innerWrapper
} from './styles.css'

class App extends Component {
  render () {
    const {children} = this.props

    return (
      <div className={outerWrapper}>
        <Header title="elevenohthree" wrapperClassName={innerWrapper}/>
        <main>
          <div className={innerWrapper}>
            {children}
          </div>
        </main>
        <Footer wrapperClassName={innerWrapper}/>
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
