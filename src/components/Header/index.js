import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import {
  layoutElementWrapper
} from "styles/layout.css"

const Header = ({title}) => (
  <header>
    <div className={layoutElementWrapper}>
      <Link to="/"><h1>{title}</h1></Link>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
