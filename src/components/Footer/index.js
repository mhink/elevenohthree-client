import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import {
  appFooter,
  appFooterWrapper,
  faint
} from "./styles.css"

const Footer = ({title}) => (
  <footer className={appFooter}>
    <div className={appFooterWrapper}>
      <p className={faint}>Ceci n'est pas un footer.</p>
    </div>
  </footer>
)

export default Footer
