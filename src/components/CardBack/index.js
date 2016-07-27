import React, { PropTypes } from 'react'
import classnames from 'classnames'

import {
  cardBack,
  avatar,
  message,
  authenticated
} from './styles.css'

const Authenticated = (props) => {
  const { profile } = props

  return (
    <div className={cardBack}>
      <div className={classnames(message, authenticated)}>
        <h4>Hey there, {profile.nickname}!</h4>
        <p>Working together could be the start of something really excellent! Why not flip the card back over and get in touch? :)</p>
      </div>
      <div className={avatar}>
        <img src={profile.picture} />
      </div>
    </div>
  )
}

const Unauthenticated = (props) => {
  return (
    <div className={cardBack}>
      <div className={message}>
        <p>Hey there! You're clearly curious enough to click here... I wonder what would happen if you logged in?</p>
      </div>
    </div>
  )
}

const CardBack = (props, context) => {
  const { isAuthenticated, profile } = context

  if(isAuthenticated) {
    return <Authenticated profile={profile} />
  }
  else {
    return <Unauthenticated />
  }
}

CardBack.contextTypes = {
  isAuthenticated:  PropTypes.bool.isRequired,
  profile:          PropTypes.object
}

export default CardBack
