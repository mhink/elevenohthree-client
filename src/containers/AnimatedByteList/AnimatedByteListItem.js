import React, { Component, PropTypes } from 'react'
import {animatedListItem} from './styles.css'

class AnimatedByteListItem extends Component {
  render () {
    const { children } = this.props

    return (
      <li className={animatedListItem} 
          ref={(c) => this._li = c}>
        {children}
      </li>
    )
  }

  componentDidAppear() {
    this._li.style.left = this.percentLeft()
  }

  componentWillEnter(callback) {
    this._li.style.left = this.percentLeft(1)
    setTimeout(() => callback(), 10)
  }

  componentDidEnter() {
    this._li.style.left = this.percentLeft()
  }

  componentDidUpdate(prevProps) {
    this._li.style.left = this.percentLeft()
  }

  componentWillLeave(callback) {
    this._li.style.left = this.percentLeft(-1)
    setTimeout(() => {
      callback()
    }, 250)
  }

  percentLeft(adjustment) {
    const { pos, unit } = this.props
    return ((pos + (adjustment || 0)) * unit) + "%"
  }
}

AnimatedByteListItem.propTypes = {
  pos: PropTypes.number.isRequired,
  unit: PropTypes.number.isRequired,
}

export default AnimatedByteListItem
