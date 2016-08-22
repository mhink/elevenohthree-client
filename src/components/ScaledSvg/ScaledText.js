import React, { PropTypes } from 'react'
import { flow, isUndefined } from 'lodash'
import WithDimensions from './WithDimensions.js'

const ScaledText = (props, context) => {
  const {
    svgWidth: sx, 
    svgHeight: sy,
    x: x0, 
    y: y0,
    children,
    ...restProps,
  } = props

  const posProps = {}

  if(!isUndefined(x0)) {
    posProps.x = x0 * sx
  }

  if(!isUndefined(y0)) {
    posProps.y = y0 * sy
  }

  return <text {...posProps} {...restProps}>{children}</text>
}

ScaledText.propTypes = {
  svgWidth: PropTypes.number.isRequired,
  svgHeight: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}

export default flow(
  WithDimensions
)(ScaledText)
