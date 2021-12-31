import type { NextPage, GetStaticProps,InferGetStaticPropsType  } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import path from "path"
import { promises as fs } from 'fs'
import { Product as ProductType } from '../product/types'
import Product from '../components/Product'
import Cart from '../components/Cart'



const Home: NextPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {


  return (
    <div className={styles.container}>
      <Head>
          <title>Basement challenge</title>
          <meta name="description" content="Basement challenge developed in nextjs" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
          <img src="/leftAsterisk.svg" alt="asterisk" className={styles.leftAsterisk}/> 
          <img src="/rightAsterisk.svg" alt="asterisk" className={styles.rightAsterisk}/> 
          <div className={styles.logo}>b.</div>
          <img src="/hdLogo.svg" alt="hd-4k logo" className={styles.hdLogo}/> 
          <Cart  />
          <img src="/header.svg" alt="basement supply header" className={styles.headerImg}/>
      </header>
      <div className={styles.marquee} >
          <p>
            A man can´t have enough basement. swag
          </p>
      </div>
      <main className={styles.main}>
          <ul className={styles.listContainer}>
           { 
            products.map((product:ProductType)=>{ 
              return (
              <li className={styles.listItem} key={product.id}>
                <Product product={product}/>
              </li>)
            })
           } 
           </ul>  
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
  const mockProducts: ProductType[] = await JSON.parse(fileContent);


  return {
    props: {
      products:mockProducts
    }
  }
}

export default Home
