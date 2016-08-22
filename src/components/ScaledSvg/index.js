import React, { Component, PropTypes } from 'react'
import { pick } from 'lodash'

class ScaledSvg extends Component {
  getChildContext () {
    return pick(this.props, ['width', 'height'])
  }

  render () {
    const { className, width, height, version, xmlns, children } = this.props
    return (
      <svg className={className} width={width} height={height} version={version} xmlns={xmlns}>
        {children}
      </svg>
    )
  }
}

ScaledSvg.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  version: PropTypes.string,
  xmlns: PropTypes.string,
  className: PropTypes.string
}

ScaledSvg.defaultProps = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}

ScaledSvg.childContextTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default ScaledSvg
export ScaledPolyline from './ScaledPolyline.js'
export ScaledText from './ScaledText.js'
