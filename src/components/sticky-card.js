import React from 'react'

import projectStyles from '../style.module.css'
import styles from './sticky-card.module.css'

const StickyCard = () => {
  return (
    <div className={styles.stickycard}>
      <img
        src="/playground_assets/corner-1100h.png"
        className={` ${projectStyles.thqImage} ${styles.image} `}
      />
      <span className={styles.text}>Have an idea in mind?</span>
      <span className={styles.text1}>
        Just start creating. Double-click on this component to edit its proprieties.
      </span>
    </div>
  )
}

export default StickyCard
