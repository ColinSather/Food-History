import React from 'react'
import { Link } from 'react-router-dom'

import projectStyles from '../style.module.css'
import styles from './action-call.module.css'

const ActionCall = () => {
  return (
    <div className={styles.actioncall}>
      <span className={styles.text}>Explore the reusable components.</span>
      <Link to="/reusable-components" className={` ${projectStyles.thqLink} ${styles.text1} `}>
        SEE COMPONENTS
      </Link>
    </div>
  )
}

export default ActionCall
