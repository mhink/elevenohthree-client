import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Footer = ({title, wrapperClassName}) => (
  <footer>
    <div className={wrapperClassName}>
      <p>Ceci n'est pas un footer.</p>
    </div>
  </footer>
)

Footer.propTypes = {
  wrapperClassName: PropTypes.string.isRequired
}

export default Footer
