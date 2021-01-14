import React from 'react'
import { Link } from 'react-router-dom'

import Helmet from 'react-helmet'

import SquareCard from '../components/square-card'
import Button from '../components/button'
import Post from '../components/post'
import FooterSection from '../components/footer-section'
import ImageCard from '../components/image-card'
import projectStyles from '../style.module.css'
import styles from './reusable-components.module.css'

const ReusableComponents = () => {
  return (
    <div className={styles.reusablecomponents}>
      <Helmet>
        <title>ReusableComponents - Demo Project</title>
        <meta
          name="description"
          content="This is your initial demo project. Here you'll learn about elements, components and how to use of them. Have a look at our Tutorials for more explanations."
        />
        <meta property="og:title" content="ReusableComponents - Demo Project" />
        <meta
          property="og:description"
          content="This is your initial demo project. Here you'll learn about elements, components and how to use of them. Have a look at our Tutorials for more explanations."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/dd761713af4188367b254d9ce3d8bf08"
        />
      </Helmet>
      <h1 className={` ${projectStyles.thqHeading1} ${styles.text} `}>Reusable components</h1>
      <div className={styles.grid}>
        <span className={styles.text1}>SquareCard</span>
        <SquareCard></SquareCard>
        <span className={styles.text2}>Button</span>
        <Button></Button>
        <span className={styles.text3}>Post</span>
        <div className={styles.post}>
          <Post></Post>
        </div>
        <span className={styles.text4}>FooterSection</span>
        <FooterSection></FooterSection>
        <span className={styles.text5}>ImageCard</span>
        <div className={styles.imagecard}>
          <ImageCard></ImageCard>
        </div>
      </div>
      <div className={styles.navigation}>
        <h1 className={` ${projectStyles.thqHeading1} ${styles.text6} `}>Navigate to</h1>
        <div className={styles.buttons}>
          <Link to="/" className={` ${projectStyles.thqLink} ${styles.text7} `}>
            HOMEPAGE
          </Link>
          <Link to="/layout-components" className={` ${projectStyles.thqLink} ${styles.text8} `}>
            LAYOUT COMPONENTS
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ReusableComponents
