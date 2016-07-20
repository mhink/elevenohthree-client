import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Header = ({title, wrapperClassName}) => (
  <header>
    <div className={wrapperClassName}>
      <Link to="/"><h1>{title}</h1></Link>
    </div>
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  wrapperClassName: PropTypes.string.isRequired
}

export default Header
