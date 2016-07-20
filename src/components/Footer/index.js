import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import {
  layoutElementWrapper
} from "styles/layout.css"

import {
  appFooter,
  faint
} from "./styles.css"

const Footer = ({title}) => (
  <footer className={appFooter}>
    <div className={layoutElementWrapper}>
      <p className={faint}>Ceci n'est pas un footer.</p>
    </div>
  </footer>
)

export default Footer
