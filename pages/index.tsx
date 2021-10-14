import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basement challenge</title>
        <meta name="description" content="Basement challenge developed in nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
          <div className={styles.logo}>b.</div>
          <button className={styles.cartButton}>CART (0)</button> 
          <img src="/header.svg" alt="basement supply header" className={styles.headerImg}/>
      </header>
      <div className={styles.marquee} >
            <p>
            A man can´t have enough basement. swag
            </p>
          </div>
      <main className={styles.main}>
        <div className={styles.productContainer}>
          <div className={styles.product}></div>
          <div className={styles.productInfo}></div>
        </div>
        <div className={styles.productContainer}>
          <div className={styles.product}></div>
          <div className={styles.productInfo}></div>
        </div>        
        <div className={styles.productContainer}>
          <div className={styles.product}></div>
          <div className={styles.productInfo}></div>          
        </div>
      </main>

      <footer className={styles.footer}>
        <img src="/footer.svg" alt="wear everyday" className={styles.footerLogo}/> 
      </footer>
    </div>
  )
}

export default Home
