import type { NextPage, GetStaticProps,InferGetStaticPropsType  } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import path from "path"
import { promises as fs } from 'fs'
import { Product } from '../product/types'
import { useState } from 'react';
import ProductList from '../components/ProductList'



const Home: NextPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const [showCart, setShowCart] = useState(false);

  return (
    <div className={showCart? styles.containerOnCartOpen : styles.containerOnCartClose}>
      <Head>
        <title>Basement challenge</title>
        <meta name="description" content="Basement challenge developed in nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
          <div className={styles.logo}>b.</div>
            <div className={styles.cartContainer}> 
              <button className={styles.openCartButton} onClick={(ev)=>{setShowCart(true)}}>CART (0)</button>
              {
                showCart?(
                  <div className={styles.cart}>
                      <button onClick={()=>{setShowCart(false)}} className={styles.closeButton}>CLOSE</button>
                      <h2>YOUR <span>CART</span></h2>
                      <div className={styles.itemsContainer}>
                      </div>
                      <div className={styles.total}>
                        <p>
                          TOTAL
                        </p>
                        <p>
                           $37,50 
                        </p>
                      </div>
                      <button className={styles.checkout}>CHECKOUT</button>

                  </div>
                ):null

              }
            </div> 
          <img src="/header.svg" alt="basement supply header" className={styles.headerImg}/>
      </header>
      <div className={styles.marquee} >
            <p>
            A man can´t have enough basement. swag
            </p>
          </div>
      <main className={styles.main}>
          <ProductList  products={products}/>
      </main>

      <footer className={styles.footer}>
        <img src="/footer.svg" alt="wear everyday" className={styles.footerLogo}/> 
      </footer>
    </div>
  )
}







export const getStaticProps: GetStaticProps = async () => {
  
  const productsPath = path.join(process.cwd(), 'product', "mock.json");
  const fileContent  = await fs.readFile(productsPath, 'utf8');
  const mockProducts: Product[] = await JSON.parse(fileContent);


  return {
    props: {
      products:mockProducts
    }
  }
}

export default Home
