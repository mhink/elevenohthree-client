import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import {
  appHeader,
  appHeaderWrapper,
} from "./styles.css"

const Header = ({title}) => (
  <header className={appHeader}>
    <div className={appHeaderWrapper}>
      <Link to="/"><h1>{title}</h1></Link>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
