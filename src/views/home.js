import React from 'react'

import Helmet from 'react-helmet'

import Navbar from '../components/navbar'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
      <Helmet>
        <title>Demo Project</title>
        <meta
          name="description"
          content="This is your initial demo project. Here you'll learn about elements, components and how to use of them. Have a look at our Tutorials for more explanations."
        />
        <meta property="og:title" content="Demo Project" />
        <meta
          property="og:description"
          content="This is your initial demo project. Here you'll learn about elements, components and how to use of them. Have a look at our Tutorials for more explanations."
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/playground-bucket.teleporthq.io/dd761713af4188367b254d9ce3d8bf08"
        />
      </Helmet>
      <div className={styles.landing}>
        <Navbar></Navbar>
        <div className={styles.main}>
          <span className={styles.text}>Meal Planning &amp; Tracking Application</span>
          <form className={styles.form}>
            <label className={styles.text1}>
              What did you eat?
              <br />
            </label>
            <input type="text" placeholder="Ex: cardboard flavored kale chips"className={` ${projectStyles.thqTextInput} ${styles.textinput} `} />
            <label className={styles.text2}>
              <br />
              Enter the portion size
              <br data-type="br" />
            </label>
            <input
              type="number" min="0" placeholder="Ex: 12" 
              className={` ${projectStyles.thqNumberInput} ${styles.numberinput} `}
            />
            <label className={styles.text2}>
              <br />
              Unit of Measurement
              <br data-type="br" />
            </label>
            <select className={` ${projectStyles.thqNumberInput} ${styles.numberinput} `}>
              <option>Grams</option>
              <option>Ounces</option>
              <option>Cups</option>
            </select>
            <br></br>
            <br></br>
            <button className={` ${projectStyles.thqButton} ${styles.button} `}>
              Upload  an image of your food
            </button>
            <br></br>
            <button className={` ${projectStyles.thqButton} ${styles.button1} `}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
