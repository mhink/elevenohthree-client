import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import {
  aboutPageSection
} from "./styles.css"

const AboutPage = () => (
  <section className={aboutPageSection}>
    <p>This is the About page!</p>
  </section>
)

AboutPage.propTypes = {
  title: PropTypes.string.isRequired
}

export default AboutPage
