import { Product as ProductType } from '../product/types'
import Image from "next/image";
import styles from '../styles/Product.module.css';
import { useContext, useState, useRef } from 'react';
import { PurchaseContext } from '../context/purchase';
import { CSSTransition } from 'react-transition-group';

type ComponentProps = {
   product: ProductType
};



const Product = ({product}:ComponentProps)=>{
  const [showAnimation, setShowAnimation] = useState(false);
  const nodeRef = useRef(null);
  const {actions:{addItem}} = useContext(PurchaseContext);
  
    return (
      <div className={styles.productContainer} >
        <div className={styles.product} onClick={(ev)=>{setShowAnimation(true)}} >
          <div className={styles.imageContainer} onClick={()=>{addItem(product)}}>
              {showAnimation === false?<Image src={product.imageSrc}  alt={product.imageAltText} layout="responsive" width={880} height={1156} />:null}
              <CSSTransition nodeRef={nodeRef} 
                mountOnEnter
                unmountOnExit 
                in={showAnimation} 
                timeout={500} 
                onEntered={()=>{setShowAnimation(false)}}
                classNames={{
                  enter:styles.addToCartEnter,
                  enterActive: styles.addToCartEnterActive,
                  exit: styles.addToCartExit
                }}>
                  <div ref={nodeRef}>
                    <img src="/addToCart.svg" alt="add to cart logo" className={styles.addToCartLogo}/> 
                  </div>
              </CSSTransition>
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