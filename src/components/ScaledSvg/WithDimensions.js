import React, { Component, PropTypes } from 'react'

const WithDimensions = ComposedComponent => {
  class DimensionProvider extends Component {
    render () {
      const {width: svgWidth, height: svgHeight} = this.context
      return <ComposedComponent 
        svgWidth={svgWidth} 
        svgHeight={svgHeight}
        {...this.props} />
    }
  }

  DimensionProvider.contextTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  return DimensionProvider
}

export default WithDimensions
