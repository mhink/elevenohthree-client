import React, { PropTypes } from 'react'
import { flow } from 'lodash'

import WithDimensions from './WithDimensions.js'

const ScaledPolyline = (props, context) => {
  const {
    svgWidth,
    svgHeight,
    points, 
    ...restProps
  } = props

  const scaledPoints = points.map((value, ix) => (
    (ix%2 == 0) 
      ? value * svgWidth
      : value * svgHeight
  ))

  return <polyline points={scaledPoints} {...restProps} />
}

ScaledPolyline.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  points: PropTypes.arrayOf(PropTypes.number).isRequired
}

ScaledPolyline.defaultProps = {
  stroke: "black",
  strokeWidth: 1
}

export default flow(
  WithDimensions
)(ScaledPolyline)
