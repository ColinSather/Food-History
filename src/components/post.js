import React from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import projectStyles from '../style.module.css'
import styles from './post.module.css'

const Post = (props) => {
  return (
    <div className={styles.post}>
      <h1 className={` ${projectStyles.thqHeading1} ${styles.title} `}>{props.title}</h1>
      <span className={styles.text}>{props.description}</span>
      <Button></Button>
    </div>
  )
}

Post.defaultProps = {
  title: 'Title\n',
  description: 'Description\n',
}

Post.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Post
