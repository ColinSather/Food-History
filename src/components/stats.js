import React from 'react'

import styles from './stats.module.css'

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.top}>
        <div className={styles.container}></div>
        <div className={styles.container1}>
          <span className={styles.text}>1</span>
          <span className={styles.text1}>Project</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.container2}>
          <span className={styles.text2}>∞</span>
          <span>Deploys</span>
        </div>
        <div className={styles.container3}>
          <span className={styles.text4}>10</span>
          <span className={styles.text5}>Different frameworks to export your code</span>
        </div>
      </div>
    </div>
  )
}

export default Stats
