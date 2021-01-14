import React from 'react'

import PropTypes from 'prop-types'

import styles from './footer-section.module.css'

const FooterSection = (props) => {
  return (
    <div className={styles.footersection}>
      <span className={styles.text}>{props.title}</span>
      <span className={styles.text1}>{props.text}</span>
      <span className={styles.text2}>{props.text1}</span>
      <span className={styles.text3}>{props.text2}</span>
    </div>
  )
}

FooterSection.defaultProps = {
  text: 'text',
  text1: 'text1',
  text2: 'text2',
  title: 'TITLE',
}

FooterSection.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  title: PropTypes.string,
}

export default FooterSection
