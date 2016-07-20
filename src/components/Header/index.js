import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import {
  appHeader,
  appHeaderWrapper,
  brandLink
} from "./styles.css"

const Header = ({title}) => (
  <header className={appHeader}>
    <div className={appHeaderWrapper}>
      <Link to="/" className={brandLink}><h1>{title}</h1></Link>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
