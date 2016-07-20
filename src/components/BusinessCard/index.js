import React, { PropTypes } from 'react'

import { 
  card,
  avatar,
  contactInfo,
  icon
} from './styles.css'

import Avatar from './profile.jpg';

import email  from './envelop.svg';
import github from './github.svg';
import twitter from './twitter.svg';

function BusinessCard(props) {
  return (
    <div className={card}>
      <div className={avatar}>
        <img src={Avatar} />
      </div>
      <div className={contactInfo}>
        <h1>Matt Hink</h1>
        <h2>Software Engineer<br/>Web Developer</h2>
        <ul>
          <li>
            <img className={icon} src={email} />
            <a href="mailto:mhink1103@gmail.com">mhink1103@gmail.com</a>
          </li>
          <li>
            <img className={icon} src={twitter} />
            <a href="https://twitter.com/mhink1103">@mhink1103</a>
          </li>
          <li>
            <img className={icon} src={github} />
            <a href="https://github.com/mhink">@mhink</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

BusinessCard.propTypes = {}

export default BusinessCard
