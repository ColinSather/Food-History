import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import StickyCard from '../components/sticky-card'
import Stats from '../components/stats'
import Navbar from '../components/navbar'
import ActionCall from '../components/action-call'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './layout-components.module.css'

const LayoutComponents = () => {
  return (
    <div className={styles.layoutcomponents}>
      <Helmet>
        <title>LayoutComponents - Demo Project</title>
        <meta
          name="description"
          content="This is your initial demo project. Here you'll learn about elements, components and how to use of them. Have a look at our Tutorials for more explanations."
        />
        <meta property="og:title" content="LayoutComponents - Demo Project" />
        <meta
          property="og:description"
          content="This is your initial demo project. Here you'll learn about elements, components and how to use of them. Have a look at our Tutorials for more explanations."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/dd761713af4188367b254d9ce3d8bf08"
        />
      </Helmet>
      <h1 className={` ${projectStyles.thqHeading1} ${styles.text} `}>Layout components</h1>
      <div className={styles.grid}>
        <span className={styles.text1}>StickyCard</span>
        <div className={styles.stickycard}>
          <StickyCard></StickyCard>
        </div>
        <span className={styles.text2}>Navbar</span>
        <div className={styles.stats}>
          <Stats></Stats>
        </div>
        <span className={styles.text3}>Stats</span>
        <div className={styles.navbar}>
          <Navbar></Navbar>
        </div>
        <span className={styles.text4}>ActionCall</span>
        <ActionCall></ActionCall>
        <span className={styles.text5}>Footer</span>
        <Footer></Footer>
      </div>
      <div className={styles.navigation}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text6} `}>Navigate to</h1>
        <div className={styles.buttons}>
          <Link to="/" className={` ${projectStyles.thqLink} ${styles.text7} `}>
            HOMEPAGE
          </Link>
          <Link to="/reusable-components" className={` ${projectStyles.thqLink} ${styles.text8} `}>
            REUSABLE COMPONENTS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LayoutComponents
