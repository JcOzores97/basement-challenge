import { Product as ProductType } from '../product/types'
import Image from "next/image";
import styles from '../styles/Product.module.css';

type ComponentProps = {
   product: ProductType
};


const Product = ({product}:ComponentProps)=>{

    return (
      <div className={styles.productContainer} >
        <div className={styles.product}>
          <div className={styles.imageContainer} >
              <Image src={product.imageSrc}  alt={product.imageAltText} layout="responsive" width={880} height={1156}/>
          </div>
        </div>
        <div className={styles.productInfo}>
            <h3 className={styles.productName} >{product.name}</h3>
            <h3 className={styles.price}>$ {product.priceInDollars}</h3>
        </div>
      </div>
    )
}
   
    

export default Product;