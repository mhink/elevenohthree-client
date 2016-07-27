import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import $ from 'jquery'

import {
  container3d,
  card3d,
  flippedLeft,
  flippedRight,
  front,
  back,
  demoFront,
  baseTiltCard
} from './styles.css'

class TiltCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tilt:             0,
      baseTilt:         0,
    }

    this.onCardClick      = this.onCardClick.bind(this)
    this.onCardMouseMove  = this.onCardMouseMove.bind(this)
    this.onCardMouseOut   = this.onCardMouseOut.bind(this)
  }

  render () {
    const { frontChild, backChild, width, height } = this.props
    const { tilt, baseTilt } = this.state

    const tiltTransform = "rotateY("+(tilt*10)+"deg)"
    const baseTransform = "rotateY("+baseTilt+"deg)"
    const cursor    = (Math.abs(tilt) > 0.1) ? "pointer" : "auto"

    return (
      <div 
        className={container3d} 
        onClick={this.onCardClick} 
        onMouseOut={this.onCardMouseOut} 
        onMouseMove={this.onCardMouseMove} 
        style={{width, height, cursor}}
        ref={(c) => { this._container = c }}
        >

        <div className={baseTiltCard} style={{transform: baseTransform}}>
          <div className={card3d} style={{transform: tiltTransform}}>
            <div className={front}>{frontChild}</div>
            { backChild && 
              <div className={back}>{backChild}</div>
            }
          </div>
        </div>
      </div>
    )
  }

  onCardClick (event) {
    const { tilt, baseTilt } = this.state

    if(tilt > 0.1) {
      this.setState({baseTilt: baseTilt + 180})
    }
    else if(tilt < -0.1) {
      this.setState({baseTilt: baseTilt - 180})
    }
  }

  onCardMouseMove (event) {
    if(event.currentTarget === this._container) {
      const $el     = $(event.currentTarget)

      const xMin    = $el.offset().left
      const xMax    = $el.width()
      const x       = event.clientX - xMin

      const yLin    = ((2.0 * x) / xMax) - 1.0
      const yCub    = Math.pow(yLin, 3)

      const diff = Math.abs(yCub - this.state.tilt)
      if(diff > 0.02) {
        this.setState({
          tilt: yCub
        })
      }
    }
  }

  onCardMouseOut (event) {
    this.setState({
      tilt: 0
    })
  }
}

TiltCard.propTypes = {
  frontChild: PropTypes.element.isRequired,
  backChild:  PropTypes.element,
}

export default TiltCard
