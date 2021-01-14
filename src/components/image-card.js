import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './image-card.module.css'

const ImageCard = (props) => {
  return (
    <div className={styles.imagecard}>
      <img src={props.src} className={` ${projectStyles.thqImage} ${styles.image} `} />
      <span className={styles.title}>{props.title}</span>
      <span className={styles.description}>{props.description}</span>
    </div>
  )
}

ImageCard.defaultProps = {
  src: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  title: 'Title\n',
  description: 'Description\n',
}

ImageCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default ImageCard
