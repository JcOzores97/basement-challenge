import { Product } from '../product/types'
import Image from "next/image";
import styles from '../styles/ProductList.module.css';

type ComponentProps = {
   products: Product[]
};


const ProductList = ({products}:ComponentProps)=>{
    return <ul className={styles.listContainer}> 
        {products.map((product:Product)=> {    
        return (
            <li className={styles.productContainer} key={product.id}>
              <div className={styles.product}>
              <div className={styles.imageContainer}>
                <Image src={product.imageSrc}  alt={product.imageAltText} layout="responsive" width={880} height={1156}/>
              </div>
              </div>
              <div className={styles.productInfo}>
               <h3 className={styles.productName} >{product.name}</h3>
               <h3 className={styles.price}>$ {product.priceInDollars}</h3>
              </div>
           
            </li>
        )
    })}
    </ul>


}
   
    
        


export default ProductList;